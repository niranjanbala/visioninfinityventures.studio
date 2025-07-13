import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface HubSpotFormProps {
  formData: {
    founderType: string;
    stage: string;
    industry: string;
    location: string;
    deliveryMedium: string;
    technologySkill: string;
    marketingSkill: string;
    salesSkill: string;
    productSkill: string;
    designSkill: string;
  };
  onFormSubmitted: () => void;
}

declare global {
  interface Window {
    hubspotScriptLoaded?: boolean;
  }
}

export default function HubSpotForm({ formData, onFormSubmitted }: HubSpotFormProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [fallbackData, setFallbackData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const formDivRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const handlePersonaCreation = useCallback(async (userData: any) => {
    try {
      setIsProcessing(true);
      
      // Prepare data for persona API - combine progressive form data with user data
      const personaData = {
        // Progressive form data
        founderType: formData.founderType,
        stage: formData.stage,
        industry: formData.industry,
        location: formData.location,
        deliveryMedium: formData.deliveryMedium,
        technologySkill: formData.technologySkill,
        marketingSkill: formData.marketingSkill,
        salesSkill: formData.salesSkill,
        productSkill: formData.productSkill,
        designSkill: formData.designSkill,
        // User form data
        firstName: userData.firstName || userData.firstname || '',
        lastName: userData.lastName || userData.lastname || '',
        email: userData.email || '',
        phone: userData.phone || userData.phone_number || '',
        company: userData.company || userData.company_name || '',
        jobTitle: userData.jobTitle || userData.jobtitle || userData.job_title || userData.title || '',
        website: userData.website || userData.website_url || '',
        address: userData.address || userData.street_address || '',
        city: userData.city || '',
        state: userData.state || userData.province || '',
        zip: userData.zip || userData.postal_code || userData.zip_code || '',
        country: userData.country || '',
        // Any other fields
        ...userData
      };

      // Call our persona API
      const response = await fetch('/api/persona', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personaData)
      });

      if (!response.ok) {
        throw new Error(`Persona API failed: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Persona created/updated:', result);
      
      // Call the original onFormSubmitted callback
      onFormSubmitted();
      
    } catch (error) {
      console.error('Error creating persona:', error);
      // Still call onFormSubmitted even if persona creation fails
      onFormSubmitted();
    } finally {
      setIsProcessing(false);
    }
  }, [formData, onFormSubmitted]);

  const loadHubSpotScript = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      // Check if script is already loaded
      if (window.hubspotScriptLoaded) {
        resolve();
        return;
      }

      // Check if script is already in the process of loading
      if (document.querySelector('script[src*="hsforms"]')) {
        // Wait for the existing script to load
        const checkScript = () => {
          if (window.hubspotScriptLoaded) {
            resolve();
          } else {
            setTimeout(checkScript, 100);
          }
        };
        checkScript();
        return;
      }

      console.log("Loading HubSpot script");
      // Load HubSpot script
      const script = document.createElement('script');
      script.src = 'https://js-na2.hsforms.net/forms/embed/243281589.js';
      script.defer = true;
      script.onload = () => {
        window.hubspotScriptLoaded = true;
        scriptRef.current = script;
        resolve();
      };
      script.onerror = () => {
        reject(new Error('Failed to load HubSpot script'));
      };
      
      document.head.appendChild(script);
    });
  }, []);

  const createForm = useCallback(async () => {
    try {
      await loadHubSpotScript();
      
      if (containerRef.current) {
        // Safely clear the container
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
        
        // Create the modern HubSpot form embed
        const formDiv = document.createElement('div');
        formDiv.className = 'hs-form-frame';
        formDiv.setAttribute('data-region', 'na2');
        formDiv.setAttribute('data-form-id', '52155d7a-44f5-4868-9f7c-ef38b74f6301');
        formDiv.setAttribute('data-portal-id', '243281589');
        formDivRef.current = formDiv;
        
        containerRef.current.appendChild(formDiv);
        
        // Set up form submission listener with proper cleanup
        const handleFormSubmit = (event: any) => {
          // Extract form data from the HubSpot form
          const form = event.target;
          if (form && form.tagName === 'FORM') {
            const formData = new FormData(form);
            const userData: any = {};
            
            for (const [key, value] of formData.entries()) {
              userData[key] = value;
            }
            
            handlePersonaCreation(userData);
          }
        };
        
        // Listen for form submission
        containerRef.current.addEventListener('submit', handleFormSubmit);
        
        setIsLoaded(true);
      }
    } catch (error) {
      console.error('Error creating HubSpot form:', error);
      // Fallback to a simple form if HubSpot fails
      setUseFallback(true);
      setIsLoaded(true);
    }
  }, [loadHubSpotScript, handlePersonaCreation]);

  const handleFallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handlePersonaCreation(fallbackData);
  };

  const handleFallbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFallbackData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Cleanup function
  const cleanup = useCallback(() => {
    if (containerRef.current) {
      // Remove event listeners
      containerRef.current.removeEventListener('submit', () => {});
      
      // Safely clear container
      try {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      } catch (error) {
        console.warn('Error during cleanup:', error);
      }
    }
  }, []);

  useEffect(() => {
    createForm();
    
    // Cleanup on unmount
    return () => {
      cleanup();
    };
  }, [createForm, cleanup]);

  return (
    <div className="bg-background rounded-xl p-8 border border-border shadow-sm max-w-2xl mx-auto">
      <div ref={containerRef} id="hubspot-form-container" className="min-h-[400px]">
        {!isLoaded && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading form...</p>
            </div>
          </div>
        )}
        
        {isProcessing && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Creating your personalized experience...</p>
            </div>
          </div>
        )}

        {useFallback && isLoaded && !isProcessing && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Get Your Personalized Roadmap</h3>
              <p className="text-muted-foreground">Enter your details to receive your customized 10-phase journey</p>
            </div>
            
            <form onSubmit={handleFallbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={fallbackData.firstName}
                    onChange={handleFallbackChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={fallbackData.lastName}
                    onChange={handleFallbackChange}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={fallbackData.email}
                  onChange={handleFallbackChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={fallbackData.phone}
                  onChange={handleFallbackChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={fallbackData.company}
                  onChange={handleFallbackChange}
                  className="mt-1"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isProcessing}>
                {isProcessing ? 'Creating Your Roadmap...' : 'Get My Personalized Roadmap'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
} 