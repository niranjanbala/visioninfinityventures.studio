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
    deliveryMedium: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      deliveryMedium: formData.deliveryMedium
    });
    
    window.location.href = `/venture-studio?${params.toString()}`;
  };

  const isFormComplete = formData.founderType && formData.stage && formData.industry && formData.location && formData.deliveryMedium;

  return (
    <>
      <Head>
        <title>Vision Infinity Ventures | Venture Studio for Founders</title>
        <meta name="description" content="Join our venture studio and get personalized guidance for your startup journey. Choose your path and get a customized roadmap." />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      <Hero />
      
      {/* Persona Selection Section */}
      <section id="persona-selection" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Venture Studio Path
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us about your startup journey and we'll create a personalized roadmap just for you. 
              Get access to tailored resources, tools, and guidance specific to your needs.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Founder Type */}
                <div>
                  <label htmlFor="founderType" className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...
                  </label>
                  <select
                    id="founderType"
                    name="founderType"
                    value={formData.founderType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select your type</option>
                    <option value="diy-founder">DIY Founder</option>
                    <option value="fractional-support">Need Fractional Support</option>
                  </select>
                </div>

                {/* Stage */}
                <div>
                  <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-2">
                    My startup is at...
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select your stage</option>
                    <option value="idea-stage">Idea Stage</option>
                    <option value="mvp-stage">MVP Stage</option>
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm building in...
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="education">Education</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm based in...
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select your location</option>
                    <option value="hsr-only">HSR Layout, Bangalore</option>
                    <option value="bangalore-only">Other parts of Bangalore</option>
                  </select>
                </div>

                {/* Delivery Medium */}
                <div>
                  <label htmlFor="deliveryMedium" className="block text-sm font-medium text-gray-700 mb-2">
                    I prefer...
                  </label>
                  <select
                    id="deliveryMedium"
                    name="deliveryMedium"
                    value={formData.deliveryMedium}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select delivery medium</option>
                    <option value="offline">Offline (In-person)</option>
                    <option value="online">Online (Virtual)</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!isFormComplete || isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
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
              </div>
            </form>

            {/* Preview of what they'll get */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">What You'll Get:</h3>
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
            <a href="#persona-selection" className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              Choose My Path
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#process" className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
