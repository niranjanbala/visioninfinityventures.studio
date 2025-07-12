import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
            Seeking Accel Atom Backing
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Open Source & AI Native
            <span className="block text-indigo-600">Venture Studio Platform</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We&apos;re building the category-defining venture studio platform that systematically creates 
            successful startups through rapid product-market fit, proven methodologies, and AI-native architecture.
          </p>
          
          {/* Investment Context */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">$1M</div>
              <div className="text-sm text-gray-600">For 25% Equity</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">$110B</div>
              <div className="text-sm text-gray-600">Bangalore Market</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">8</div>
              <div className="text-sm text-gray-600">Open Positions</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Phase Journey</div>
            </div>
          </div>
          
          {/* Primary CTA */}
          <div className="mb-6">
            <a 
              href="#persona-selection" 
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Secondary Navigation */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/pitch-deck" 
              className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              View Pitch Deck
            </Link>
            <span className="text-gray-400">•</span>
            <Link 
              href="/careers" 
              className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              Join Our Team
            </Link>
            <span className="text-gray-400">•</span>
            <Link 
              href="/stages" 
              className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              Explore Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
