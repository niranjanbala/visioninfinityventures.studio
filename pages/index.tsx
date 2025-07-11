import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Timeline from '../components/Timeline';
import Studios from '../components/Studios';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vision Infinity Ventures | HSR SaaS B2B Venture Studio</title>
        <meta name="description" content="Exclusive venture studio for idea-stage DIY entrepreneurs building SaaS B2B products in HSR Layout, Bangalore" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      <Hero />
      <Process />
      <Timeline />
      <Studios />
      
      {/* Venture Studio CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Build Your SaaS B2B Product?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our exclusive venture studio for idea-stage DIY entrepreneurs in HSR Layout. 
              Get a complete 12-phase roadmap, AI tools, funding guidance, and personal expense planning.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  HSR Layout SaaS B2B Venture Studio
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    12-phase journey roadmap
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI-powered tools & checklists
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete funding guidance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personal expense planning
                  </li>
                </ul>
                <p className="text-sm text-gray-600">
                  Limited to 10 founders. ₹25,000 one-time payment.
                </p>
              </div>
              <div className="text-center">
                <Link href="/venture-studio" className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                  Join Venture Studio
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your SaaS B2B Product in HSR Layout?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive venture studio for idea-stage DIY entrepreneurs. 
            Get everything you need to succeed with our 12-phase roadmap and AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/venture-studio" className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              Join Venture Studio
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="#process" className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
