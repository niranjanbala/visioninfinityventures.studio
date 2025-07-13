import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Timeline from '../components/Timeline';
import Studios from '../components/Studios';
import HubSpotForm from '../components/HubSpotForm';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [formData, setFormData] = useState({
    founderType: '',
    stage: '',
    industry: '',
    location: '',
    deliveryMedium: '',
    technologySkill: '',
    marketingSkill: '',
    salesSkill: '',
    productSkill: '',
    designSkill: ''
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      id: 0,
      title: "Founder Type",
      description: "What type of founder are you?",
      subtitle: "Choose the approach that best describes your style"
    },
    {
      id: 1,
      title: "Stage",
      description: "What stage is your startup in?",
      subtitle: "Select the phase that best describes your current situation"
    },
    {
      id: 2,
      title: "Industry",
      description: "What industry are you in?",
      subtitle: "Select the sector that best matches your business"
    },
    {
      id: 3,
      title: "Location",
      description: "Where are you located?",
      subtitle: "Select your primary location in Bangalore"
    },
    {
      id: 4,
      title: "Delivery Medium",
      description: "How do you prefer to receive guidance?",
      subtitle: "Choose your preferred delivery method"
    },
    {
      id: 5,
      title: "Technology Skills",
      description: "How proficient are you in Technology & AI?",
      subtitle: "Rate your technical skills and AI knowledge"
    },
    {
      id: 6,
      title: "Marketing Skills",
      description: "How proficient are you in Marketing?",
      subtitle: "Rate your marketing and growth skills"
    },
    {
      id: 7,
      title: "Sales Skills",
      description: "How proficient are you in Sales?",
      subtitle: "Rate your sales and business development skills"
    },
    {
      id: 8,
      title: "Product Skills",
      description: "How proficient are you in Product Management?",
      subtitle: "Rate your product strategy and management skills"
    },
    {
      id: 9,
      title: "Design Skills",
      description: "How proficient are you in Design?",
      subtitle: "Rate your UX/UI and design skills"
    }
  ];

  const options = {
    founderType: [
      { value: 'diy-founder', label: 'Do It Yourself Founder', description: 'I want to do everything myself, maximize learning, and minimize cash burn.', icon: '✓' },
      { value: 'fractional-support', label: 'Fractional Support', description: 'I want expert support for specific functions while maintaining control.', icon: '👥' }
    ],
    stage: [
      { value: 'idea-stage', label: 'Idea Stage', description: 'I have an idea and want to validate it before building an MVP.', icon: '💡' },
      { value: 'mvp-stage', label: 'MVP Stage', description: 'I have an MVP and want to achieve product-market fit.', icon: '🚀' }
    ],
    industry: [
      { value: 'education', label: 'Education', description: 'EdTech, online learning, educational products and services.', icon: '📚' },
      { value: 'saas-b2b', label: 'SaaS B2B', description: 'Software-as-a-Service for business customers.', icon: '💼' }
    ],
    location: [
      { value: 'hsr-layout', label: 'HSR Layout', description: 'HSR Layout and surrounding areas in South Bangalore.', icon: '📍' },
      { value: 'whitefield', label: 'Whitefield', description: 'Whitefield and surrounding areas in East Bangalore.', icon: '📍' }
    ],
    deliveryMedium: [
      { value: 'offline', label: 'Offline', description: 'In-person meetings, workshops, and local community events.', icon: '🤝' },
      { value: 'online', label: 'Online', description: 'Virtual meetings, online courses, and digital resources.', icon: '💻' }
    ],
    technologySkill: [
      { value: 'beginner', label: 'Beginner', description: 'Basic understanding, need guidance', icon: '🔴', color: 'red' },
      { value: 'intermediate', label: 'Intermediate', description: 'Some experience, can work independently', icon: '🟡', color: 'yellow' },
      { value: 'advanced', label: 'Advanced', description: 'Expert level, can lead technical decisions', icon: '🟢', color: 'green' }
    ],
    marketingSkill: [
      { value: 'beginner', label: 'Beginner', description: 'Basic understanding, need guidance', icon: '🔴', color: 'red' },
      { value: 'intermediate', label: 'Intermediate', description: 'Some experience, can work independently', icon: '🟡', color: 'yellow' },
      { value: 'advanced', label: 'Advanced', description: 'Expert level, can lead marketing strategy', icon: '🟢', color: 'green' }
    ],
    salesSkill: [
      { value: 'beginner', label: 'Beginner', description: 'Basic understanding, need guidance', icon: '🔴', color: 'red' },
      { value: 'intermediate', label: 'Intermediate', description: 'Some experience, can work independently', icon: '🟡', color: 'yellow' },
      { value: 'advanced', label: 'Advanced', description: 'Expert level, can lead sales strategy', icon: '🟢', color: 'green' }
    ],
    productSkill: [
      { value: 'beginner', label: 'Beginner', description: 'Basic understanding, need guidance', icon: '🔴', color: 'red' },
      { value: 'intermediate', label: 'Intermediate', description: 'Some experience, can work independently', icon: '🟡', color: 'yellow' },
      { value: 'advanced', label: 'Advanced', description: 'Expert level, can lead product strategy', icon: '🟢', color: 'green' }
    ],
    designSkill: [
      { value: 'beginner', label: 'Beginner', description: 'Basic understanding, need guidance', icon: '🔴', color: 'red' },
      { value: 'intermediate', label: 'Intermediate', description: 'Some experience, can work independently', icon: '🟡', color: 'yellow' },
      { value: 'advanced', label: 'Advanced', description: 'Expert level, can lead design strategy', icon: '🟢', color: 'green' }
    ]
  };

  const getFieldName = (stepId: number) => {
    switch (stepId) {
      case 0: return 'founderType';
      case 1: return 'stage';
      case 2: return 'industry';
      case 3: return 'location';
      case 4: return 'deliveryMedium';
      case 5: return 'technologySkill';
      case 6: return 'marketingSkill';
      case 7: return 'salesSkill';
      case 8: return 'productSkill';
      case 9: return 'designSkill';
      default: return '';
    }
  };

  const handleOptionSelect = (value: string) => {
    const fieldName = getFieldName(currentStep);
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const nextStep = () => {
    const fieldName = getFieldName(currentStep);
    if (formData[fieldName as keyof typeof formData]) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const goToStep = (step: number) => {
    // Only allow going to steps that have been completed or are the next step
    if (step <= currentStep || canProceedToStep(step)) {
      setCurrentStep(step);
    }
  };

  const canProceedToStep = (step: number) => {
    for (let i = 0; i < step; i++) {
      const fieldName = getFieldName(i);
      if (!formData[fieldName as keyof typeof formData]) return false;
    }
    return true;
  };

  const isStepCompleted = (step: number) => {
    const fieldName = getFieldName(step);
    return !!formData[fieldName as keyof typeof formData];
  };

  const handleHubSpotFormSubmitted = () => {
    setIsSubmitting(false);
    const params = new URLSearchParams(formData);
    window.location.href = `/venture-studio?${params.toString()}`;
  };

  const resetForm = () => {
    setFormData({
      founderType: '',
      stage: '',
      industry: '',
      location: '',
      deliveryMedium: '',
      technologySkill: '',
      marketingSkill: '',
      salesSkill: '',
      productSkill: '',
      designSkill: ''
    });
    setCurrentStep(0);
  };

  const currentStepData = steps[currentStep];
  const currentFieldName = getFieldName(currentStep);
  const currentOptions = options[currentFieldName as keyof typeof options] || [];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>
      <Head>
        <title>Vision Infinity Ventures - Democratizing Startup Success</title>
        <meta name="description" content="Join our venture studio designed specifically for founders in Bangalore. Get personalized roadmaps, AI-powered tools, and democratized access to startup success." />
        <meta name="keywords" content="venture studio, startup, entrepreneur, Bangalore, AI tools, funding" />
        <meta property="og:title" content="Vision Infinity Ventures - Democratizing Startup Success" />
        <meta property="og:description" content="Join our venture studio designed specifically for founders in Bangalore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visioninfinityventures.studio" />
      </Head>

      <Navigation />
      <Hero />

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Democratizing Startup Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
              We believe every founder deserves success. Our venture studio provides personalized roadmaps, 
              AI-powered tools, and democratized access to the knowledge and support you need to build 
              sustainable, scalable businesses.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Personalized Roadmaps</h3>
                <p className="text-muted-foreground">10-phase journey tailored to your specific needs and goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI-Powered Tools</h3>
                <p className="text-muted-foreground">Cutting-edge technology to accelerate your growth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Community Support</h3>
                <p className="text-muted-foreground">Connect with fellow founders and mentors in Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Form Section */}
      <section id="persona-selection" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Start Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about yourself and get a personalized 10-phase roadmap tailored to your specific journey.
            </p>
          </div>
          
          <Card className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => goToStep(step.id)}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      isStepCompleted(step.id) 
                        ? 'bg-primary hover:bg-primary/80' 
                        : currentStep === step.id 
                          ? 'bg-primary/60' 
                          : 'bg-muted-foreground/20'
                    }`}
                    title={`Step ${step.id + 1}${isStepCompleted(step.id) ? ' - Completed' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Summary of Selections */}
            {Object.values(formData).some(value => value !== '') && (
              <div className="bg-muted/50 rounded-lg p-4 mb-8">
                <h4 className="text-sm font-medium text-foreground mb-3">Your Selections:</h4>
                <div className="flex flex-wrap gap-2">
                  {formData.founderType && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {formData.founderType === 'diy-founder' ? 'DIY Founder' : 'Fractional Support'}
                    </span>
                  )}
                  {formData.stage && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {formData.stage === 'idea-stage' ? 'Idea Stage' : 'MVP Stage'}
                    </span>
                  )}
                  {formData.industry && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {formData.industry === 'education' ? 'Education' : 'SaaS B2B'}
                    </span>
                  )}
                  {formData.location && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {formData.location === 'hsr-layout' ? 'HSR Layout' : 'Whitefield'}
                    </span>
                  )}
                  {formData.deliveryMedium && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {formData.deliveryMedium === 'offline' ? 'Offline' : 'Online'}
                    </span>
                  )}
                  {formData.technologySkill && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Tech: {formData.technologySkill}
                    </span>
                  )}
                  {formData.marketingSkill && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Marketing: {formData.marketingSkill}
                    </span>
                  )}
                  {formData.salesSkill && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Sales: {formData.salesSkill}
                    </span>
                  )}
                  {formData.productSkill && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Product: {formData.productSkill}
                    </span>
                  )}
                  {formData.designSkill && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Design: {formData.designSkill}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Current Step Content */}
            {currentStep < 9 ? (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {currentStepData.description}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {currentStepData.subtitle}
                </p>
                
                <div className={`grid gap-4 ${currentOptions.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                  {currentOptions.map((option) => (
                    <Card
                      key={option.value}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        formData[currentFieldName as keyof typeof formData] === option.value
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:ring-1 hover:ring-primary/50'
                      }`}
                      onClick={() => handleOptionSelect(option.value)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl mb-4">{option.icon}</div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {option.label}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Almost There!</h3>
                  <p className="text-muted-foreground">You&apos;ve completed the assessment. Now let&apos;s get your personalized roadmap.</p>
                </div>
                
                <HubSpotForm 
                  formData={formData} 
                  onFormSubmitted={handleHubSpotFormSubmitted} 
                />
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 9 && (
              <div className="flex justify-between items-center pt-8">
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    variant="ghost"
                    className="px-6 py-3 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    ← Back
                  </Button>
                  
                  {Object.values(formData).some(value => value !== '') && (
                    <Button
                      type="button"
                      onClick={resetForm}
                      variant="outline"
                      className="px-6 py-3 text-muted-foreground hover:text-foreground font-medium"
                    >
                      Reset Form
                    </Button>
                  )}
                </div>
                
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData[currentFieldName as keyof typeof formData]}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formData[currentFieldName as keyof typeof formData] ? 'Next →' : 'Please select an option'}
                </Button>
              </div>
            )}
          </Card>
        </div>
      </section>

      <Process />
      <Timeline />
      <Studios />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us in creating the category-defining venture studio platform that will transform 
            how startups are created and scaled in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '#persona-selection'}
              className="inline-flex items-center px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors shadow-sm"
            >
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Link 
              href="/pitch-deck" 
              className="inline-flex items-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              View Pitch Deck
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
