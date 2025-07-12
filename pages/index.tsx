import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Timeline from '../components/Timeline';
import Studios from '../components/Studios';
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
        <title>Vision Infinity Ventures | Venture Studio for Founders</title>
        <meta name="description" content="Join our venture studio and get personalized guidance for your startup journey. Choose your path and get a customized roadmap." />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      <Hero />
      
      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Should Accel Atom Back Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building the category-defining venture studio platform that systematically creates 
              successful startups through rapid product-market fit and proven methodologies. 
              Looking for a backer for an ask of $1M (25% equity).
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Problem Statement */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The Bangalore Market Opportunity</h3>
                  <p className="text-gray-600">
                    $110B Bangalore startup ecosystem with 8,000+ startups and 40+ unicorns, 
                    but no systematic venture studio platform. Current solutions are fragmented, 
                    manual, and don&apos;t scale. We&apos;re building the category-defining platform 
                    that changes this for Bangalore founders.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Bangalore Advantage</h3>
                  <p className="text-gray-600">
                    First-mover advantage in Bangalore&apos;s systematic venture studio platform. AI-powered personalization, 
                    proven 12-phase methodology, and deep local network effects create an unassailable competitive moat 
                    in Bangalore&apos;s startup ecosystem.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Solution */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Platform</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Systematic venture creation methodology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">AI-powered rapid product-market fit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Category-defining market creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bangalore-First</h3>
              <p className="text-gray-600">
                We build Bangalore&apos;s first systematic venture studio platform, not compete in existing ones. 
                Our platform creates the category of systematic venture studio methodology for Bangalore founders.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Iteration</h3>
              <p className="text-gray-600">
                We focus on rapid product-market fit achievement through systematic 
                iteration and data-driven optimization.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Systematic Execution</h3>
              <p className="text-gray-600">
                We use proven methodologies and systematic approaches to ensure 
                consistent, scalable results across all ventures.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Persona Selection Section */}
      <section id="persona-selection" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Bangalore&apos;s First Venture Studio Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us about your startup journey and we&apos;ll create a systematic roadmap for rapid 
              product-market fit achievement. Get access to proven methodologies and AI-powered tools 
              tailored for Bangalore&apos;s startup ecosystem.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Step {currentStep + 1} of 10</span>
                <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / 10) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentStep + 1) / 10) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[400px] flex flex-col justify-center">
              {currentStep === 0 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">👤</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What type of founder are you?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This helps us understand your approach to building your startup and tailor our support accordingly.
                  </p>
                  <select
                    name="founderType"
                    value={formData.founderType}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your type</option>
                    <option value="diy-founder">DIY Founder - I want to do everything myself</option>
                    <option value="fractional-support">Need Fractional Support - I want professional help</option>
                  </select>
                </div>
              )}

              {currentStep === 1 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What stage is your startup at?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This determines the type of guidance and resources you&apos;ll receive in your personalized roadmap.
                  </p>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your stage</option>
                    <option value="idea-stage">Idea Stage - Validating my concept</option>
                    <option value="mvp-stage">MVP Stage - Building my product</option>
                  </select>
                </div>
              )}

              {currentStep === 2 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">💼</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What industry are you building in?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This helps us provide industry-specific insights, tools, and connections relevant to your market.
                  </p>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="education">Education - EdTech, learning platforms, training</option>
                    <option value="others">Others - Any other industry</option>
                  </select>
                </div>
              )}

              {currentStep === 3 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">📍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Where are you based?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This enables us to provide Bangalore-specific resources, connections, and market insights 
                    tailored to your location within the city.
                  </p>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your location</option>
                    <option value="hsr-only">HSR Layout, Bangalore - Tech hub area</option>
                    <option value="bangalore-only">Other parts of Bangalore</option>
                  </select>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">📱</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How would you prefer to work with us?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Choose your preferred way of receiving guidance and support throughout your startup journey.
                  </p>
                  <select
                    name="deliveryMedium"
                    value={formData.deliveryMedium}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select delivery medium</option>
                    <option value="offline">Offline - In-person meetings and workshops</option>
                    <option value="online">Online - Virtual sessions and digital tools</option>
                  </select>
                </div>
              )}

              {currentStep === 5 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">💻</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How would you rate your technology skills?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This helps us understand your technical capabilities and recommend appropriate tools and resources.
                  </p>
                  <select
                    name="technologySkill"
                    value={formData.technologySkill}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="1">1 - Beginner - Learning the basics</option>
                    <option value="2">2 - Basic - Can use common tools</option>
                    <option value="3">3 - Intermediate - Can build simple solutions</option>
                    <option value="4">4 - Advanced - Can build complex systems</option>
                    <option value="5">5 - Expert - Can architect entire platforms</option>
                  </select>
                </div>
              )}

              {currentStep === 6 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">📢</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How would you rate your marketing skills?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This helps us understand your ability to reach and engage your target audience effectively.
                  </p>
                  <select
                    name="marketingSkill"
                    value={formData.marketingSkill}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="1">1 - Beginner - Learning marketing concepts</option>
                    <option value="2">2 - Basic - Can run simple campaigns</option>
                    <option value="3">3 - Intermediate - Can execute marketing strategies</option>
                    <option value="4">4 - Advanced - Can optimize and scale campaigns</option>
                    <option value="5">5 - Expert - Can build complete marketing systems</option>
                  </select>
                </div>
              )}

              {currentStep === 7 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">💰</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How would you rate your sales skills?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This helps us understand your ability to convert prospects into customers and generate revenue.
                  </p>
                  <select
                    name="salesSkill"
                    value={formData.salesSkill}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="1">1 - Beginner - Learning sales fundamentals</option>
                    <option value="2">2 - Basic - Can handle simple sales conversations</option>
                    <option value="3">3 - Intermediate - Can close deals consistently</option>
                    <option value="4">4 - Advanced - Can build sales processes</option>
                    <option value="5">5 - Expert - Can scale sales operations</option>
                  </select>
                </div>
              )}

              {currentStep === 8 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How would you rate your product skills?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This helps us understand your ability to define, build, and iterate on your product effectively.
                  </p>
                  <select
                    name="productSkill"
                    value={formData.productSkill}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="1">1 - Beginner - Learning product management</option>
                    <option value="2">2 - Basic - Can define simple features</option>
                    <option value="3">3 - Intermediate - Can manage product development</option>
                    <option value="4">4 - Advanced - Can build product strategy</option>
                    <option value="5">5 - Expert - Can scale product operations</option>
                  </select>
                </div>
              )}

              {currentStep === 9 && (
                <div className="text-center">
                  <div className="text-6xl mb-6">🎨</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How would you rate your design skills?</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This helps us understand your ability to create user experiences and visual elements for your product.
                  </p>
                  <select
                    name="designSkill"
                    value={formData.designSkill}
                    onChange={handleInputChange}
                    className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="1">1 - Beginner - Learning design principles</option>
                    <option value="2">2 - Basic - Can create simple layouts</option>
                    <option value="3">3 - Intermediate - Can design user interfaces</option>
                    <option value="4">4 - Advanced - Can create design systems</option>
                    <option value="5">5 - Expert - Can lead design strategy</option>
                  </select>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: 10 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToStep(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === currentStep ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {currentStep < 9 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData[Object.keys(formData)[currentStep] as keyof typeof formData]}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isFormComplete || isSubmitting}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Your Path...
                    </>
                  ) : (
                    <>
                      Get My Personalized Path
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Preview of what they'll get */}
            <div className="mt-8 pt-8 border-t border-gray-200">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">What You&apos;ll Get:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-medium text-gray-900">12-Phase Roadmap</h4>
                  <p className="text-sm text-gray-600">Tailored to your specific journey</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-medium text-gray-900">AI Tools & Checklists</h4>
                  <p className="text-sm text-gray-600">Industry-specific resources</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl mb-2">💰</div>
                  <h4 className="font-medium text-gray-900">Funding Guidance</h4>
                  <p className="text-sm text-gray-600">Complete financial planning</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      <Process />
      <Timeline />
      <Studios />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Startup Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your path above and get a personalized roadmap designed specifically for your startup stage, industry, and location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#persona-selection">
              <a className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                Choose My Path
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Link>
            <Link href="#process">
              <a className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
