import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Timeline from '../components/Timeline';
import Studios from '../components/Studios';
import HubSpotForm from '../components/HubSpotForm';
import Link from 'next/link';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleHubSpotFormSubmitted = () => {
    setIsSubmitting(false);
    // Navigate to personalized page
    const params = new URLSearchParams({
      founderType: formData.founderType,
      stage: formData.stage,
      industry: formData.industry,
      location: formData.location,
      deliveryMedium: formData.deliveryMedium,
      technologySkill: formData.technologySkill,
      marketingSkill: formData.marketingSkill,
      salesSkill: formData.salesSkill,
      productSkill: formData.productSkill,
      designSkill: formData.designSkill
    });
    window.location.href = `/venture-studio?${params.toString()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate to personalized page
    const params = new URLSearchParams({
      founderType: formData.founderType,
      stage: formData.stage,
      industry: formData.industry,
      location: formData.location,
      deliveryMedium: formData.deliveryMedium,
      technologySkill: formData.technologySkill,
      marketingSkill: formData.marketingSkill,
      salesSkill: formData.salesSkill,
      productSkill: formData.productSkill,
      designSkill: formData.designSkill
    });
    
    window.location.href = `/venture-studio?${params.toString()}`;
  };

  const isFormComplete = formData.founderType && formData.stage && formData.industry && formData.location && formData.deliveryMedium && formData.technologySkill && formData.marketingSkill && formData.salesSkill && formData.productSkill && formData.designSkill;

  return (
    <>
      <Head>
        <title>Vision Infinity Ventures | Open Source & AI Native Venture Studio</title>
        <meta name="description" content="Join our open source and AI native venture studio platform. Get personalized guidance for your startup journey with rapid product-market fit and proven methodologies." />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      <Hero />
      
      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Should Strategic Investors Back Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building the category-defining venture studio platform that systematically creates 
              successful startups through rapid product-market fit, proven methodologies, and AI-native architecture.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Problem Statement */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Bangalore Market Opportunity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    ₹9.1L Cr Bangalore startup ecosystem with 8,000+ startups and 40+ unicorns, 
                    but no systematic venture studio platform. Current solutions are fragmented, 
                    manual, and don&apos;t scale. We bring open source and AI-native solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Bangalore Advantage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    First-mover advantage in Bangalore&apos;s systematic venture studio platform. AI-powered personalization, 
                    proven 10-phase methodology, deep local network effects, and open source architecture.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Solution */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Platform</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Systematic venture creation methodology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">AI-native rapid product-market fit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Open source category-defining platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Bangalore-focused with local network effects</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Source & AI Native</h3>
              <p className="text-gray-600 leading-relaxed">
                We build Bangalore&apos;s first open source and AI-native venture studio platform, not compete in existing ones. 
                Our platform creates the category of systematic venture studio methodology with transparent, scalable architecture.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Iteration</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on rapid product-market fit achievement through systematic 
                iteration and data-driven optimization.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Category-Defining</h3>
              <p className="text-gray-600 leading-relaxed">
                We build new markets rather than compete in existing ones. Our platform 
                creates the category of systematic venture studio methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Selection Section */}
      <section id="persona-selection" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about yourself and get a personalized 10-phase roadmap tailored to your specific journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step Indicators */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-2">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentStep >= step ? 'bg-indigo-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 0: Founder Type */}
              {currentStep === 0 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What type of founder are you?</h3>
                  <p className="text-gray-600 mb-8">Choose the approach that best describes your style</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, founderType: 'diy-founder' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Do It Yourself Founder</h4>
                      </div>
                      <p className="text-gray-600">I want to do everything myself, maximize learning, and minimize cash burn.</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, founderType: 'fractional-support' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Fractional Support</h4>
                      </div>
                      <p className="text-gray-600">I want expert support for specific functions while maintaining control.</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1: Stage */}
              {currentStep === 1 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What stage is your startup in?</h3>
                  <p className="text-gray-600 mb-8">Select the phase that best describes your current situation</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, stage: 'idea-stage' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Idea Stage</h4>
                      </div>
                      <p className="text-gray-600">I have an idea and want to validate it before building an MVP.</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, stage: 'mvp-stage' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">MVP Stage</h4>
                      </div>
                      <p className="text-gray-600">I have an MVP and want to achieve product-market fit.</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Industry */}
              {currentStep === 2 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What industry are you in?</h3>
                  <p className="text-gray-600 mb-8">Select the sector that best matches your business</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, industry: 'education' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Education</h4>
                      </div>
                      <p className="text-gray-600">EdTech, online learning, educational products and services.</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, industry: 'saas-b2b' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">SaaS B2B</h4>
                      </div>
                      <p className="text-gray-600">Software-as-a-Service for business customers.</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Location */}
              {currentStep === 3 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Where are you located?</h3>
                  <p className="text-gray-600 mb-8">Select your primary location in Bangalore</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, location: 'hsr-layout' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">HSR Layout</h4>
                      </div>
                      <p className="text-gray-600">HSR Layout and surrounding areas in South Bangalore.</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, location: 'whitefield' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Whitefield</h4>
                      </div>
                      <p className="text-gray-600">Whitefield and surrounding areas in East Bangalore.</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Delivery Medium */}
              {currentStep === 4 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How do you prefer to receive guidance?</h3>
                  <p className="text-gray-600 mb-8">Choose your preferred delivery method</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, deliveryMedium: 'offline' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Offline</h4>
                      </div>
                      <p className="text-gray-600">In-person meetings, workshops, and local community events.</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, deliveryMedium: 'online' });
                        nextStep();
                      }}
                      className="p-8 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Online</h4>
                      </div>
                      <p className="text-gray-600">Virtual meetings, online courses, and digital resources.</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Technology & AI Skills */}
              {currentStep === 5 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How proficient are you in Technology & AI?</h3>
                  <p className="text-gray-600 mb-8">Rate your technical skills and AI knowledge</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, technologySkill: 'beginner' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Beginner</h4>
                      <p className="text-sm text-gray-600">Basic understanding, need guidance</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, technologySkill: 'intermediate' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h4>
                      <p className="text-sm text-gray-600">Some experience, can work independently</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, technologySkill: 'advanced' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h4>
                      <p className="text-sm text-gray-600">Expert level, can lead technical decisions</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 6: Marketing Skills */}
              {currentStep === 6 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How proficient are you in Marketing?</h3>
                  <p className="text-gray-600 mb-8">Rate your marketing and growth skills</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, marketingSkill: 'beginner' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Beginner</h4>
                      <p className="text-sm text-gray-600">Basic understanding, need guidance</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, marketingSkill: 'intermediate' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h4>
                      <p className="text-sm text-gray-600">Some experience, can work independently</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, marketingSkill: 'advanced' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h4>
                      <p className="text-sm text-gray-600">Expert level, can lead marketing strategy</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 7: Sales Skills */}
              {currentStep === 7 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How proficient are you in Sales?</h3>
                  <p className="text-gray-600 mb-8">Rate your sales and business development skills</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, salesSkill: 'beginner' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Beginner</h4>
                      <p className="text-sm text-gray-600">Basic understanding, need guidance</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, salesSkill: 'intermediate' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h4>
                      <p className="text-sm text-gray-600">Some experience, can work independently</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, salesSkill: 'advanced' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h4>
                      <p className="text-sm text-gray-600">Expert level, can lead sales strategy</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 8: Product Management Skills */}
              {currentStep === 8 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How proficient are you in Product Management?</h3>
                  <p className="text-gray-600 mb-8">Rate your product strategy and management skills</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, productSkill: 'beginner' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Beginner</h4>
                      <p className="text-sm text-gray-600">Basic understanding, need guidance</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, productSkill: 'intermediate' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h4>
                      <p className="text-sm text-gray-600">Some experience, can work independently</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, productSkill: 'advanced' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h4>
                      <p className="text-sm text-gray-600">Expert level, can lead product strategy</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 9: Design Skills */}
              {currentStep === 9 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How proficient are you in Design?</h3>
                  <p className="text-gray-600 mb-8">Rate your UX/UI and design skills</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, designSkill: 'beginner' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Beginner</h4>
                      <p className="text-sm text-gray-600">Basic understanding, need guidance</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, designSkill: 'intermediate' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h4>
                      <p className="text-sm text-gray-600">Some experience, can work independently</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, designSkill: 'advanced' });
                        nextStep();
                      }}
                      className="p-6 text-center bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h4>
                      <p className="text-sm text-gray-600">Expert level, can lead design strategy</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 10: HubSpot Form */}
              {currentStep === 9 && (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Your Personalized Roadmap</h3>
                  <p className="text-gray-600 mb-8">Enter your details to receive your customized 10-phase journey</p>
                  
                  <HubSpotForm 
                    formData={formData} 
                    onFormSubmitted={handleHubSpotFormSubmitted} 
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 9 && (
                <div className="flex justify-between items-center pt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    ← Back
                  </button>
                  
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  >
                    Next →
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Process />
      <Timeline />
      <Studios />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join us in creating the category-defining venture studio platform that will transform 
            how startups are created and scaled in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#persona-selection"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
            >
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link 
              href="/pitch-deck" 
              className="inline-flex items-center px-8 py-4 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-colors"
            >
              View Pitch Deck
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
