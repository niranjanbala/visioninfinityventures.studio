import React, { useEffect, useState, useCallback } from 'react';

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
    hbspt: {
      forms: {
        create: (config: any) => void;
      };
    };
  }
}

export default function HubSpotForm({ formData, onFormSubmitted }: HubSpotFormProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePersonaCreation = useCallback(async (hubspotFormData: any) => {
    try {
      setIsProcessing(true);
      
      // Extract name and email from HubSpot form data
      const firstName = hubspotFormData.firstname || hubspotFormData.first_name || '';
      const lastName = hubspotFormData.lastname || hubspotFormData.last_name || '';
      const email = hubspotFormData.email || '';

      // Prepare data for persona API - combine progressive form data with HubSpot form data
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
        // HubSpot form data
        firstName,
        lastName,
        email,
        // Additional HubSpot fields
        phone: hubspotFormData.phone || hubspotFormData.phone_number || '',
        company: hubspotFormData.company || hubspotFormData.company_name || '',
        jobTitle: hubspotFormData.jobtitle || hubspotFormData.job_title || hubspotFormData.title || '',
        website: hubspotFormData.website || hubspotFormData.website_url || '',
        address: hubspotFormData.address || hubspotFormData.street_address || '',
        city: hubspotFormData.city || '',
        state: hubspotFormData.state || hubspotFormData.province || '',
        zip: hubspotFormData.zip || hubspotFormData.postal_code || hubspotFormData.zip_code || '',
        country: hubspotFormData.country || '',
        // Any other fields from HubSpot form
        ...hubspotFormData
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

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/243281589.js';
    script.defer = true;
    script.onload = () => {
      setIsLoaded(true);
      
      // Initialize the form with hidden fields
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na2',
          portalId: '243281589',
          formId: '52155d7a-44f5-4868-9f7c-ef38b74f6301',
          target: '#hubspot-form-container',
          onFormSubmitted: function(form: any) {
            // Get form data and create persona
            const formData = form.getData();
            handlePersonaCreation(formData);
          },
          onFormReady: function(form: any) {
            // Set hidden field values
            const hiddenFields = {
              founder_type: formData.founderType,
              stage: formData.stage,
              industry: formData.industry,
              location: formData.location,
              delivery_medium: formData.deliveryMedium,
              technology_skill: formData.technologySkill,
              marketing_skill: formData.marketingSkill,
              sales_skill: formData.salesSkill,
              product_skill: formData.productSkill,
              design_skill: formData.designSkill
            };
            
            // Set hidden field values
            Object.entries(hiddenFields).forEach(([fieldName, value]) => {
              const field = form.find(`input[name="${fieldName}"]`);
              if (field.length) {
                field.val(value);
              }
            });
          }
        });
      }
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src*="hsforms"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [formData, onFormSubmitted, handlePersonaCreation]);

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm max-w-2xl mx-auto">
      <div id="hubspot-form-container" className="min-h-[400px]">
        {!isLoaded && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading form...</p>
            </div>
          </div>
        )}
        {isProcessing && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Creating your personalized experience...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 