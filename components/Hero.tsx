import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-24 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Backed by Accel Atom
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The First Systematic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Venture Studio Platform
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              We&apos;re building the category-defining venture studio platform that systematically creates, 
              builds, and launches startups. Our AI-powered platform delivers rapid product-market fit 
              through proven methodologies and hands-on support.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-lg font-semibold mb-3 text-green-400">Our Vision</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                &quot;To become the category-defining venture studio platform that systematically creates 
                successful startups through AI-powered methodologies and rapid product-market fit achievement.&quot;
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#persona-selection" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                Start Your Journey
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#mission" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20">
                Learn Our Mission
              </a>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Rapid PMF</h3>
                  <p className="text-sm text-gray-300">Product-market fit achievement</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Systematic Approach</h3>
                  <p className="text-sm text-gray-300">Proven venture studio methodology</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Category-Defining</h3>
                  <p className="text-sm text-gray-300">Building new markets, not competing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Global Scale</h3>
                  <p className="text-sm text-gray-300">Massive market opportunity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
