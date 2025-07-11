import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Timeline from '../components/Timeline';
import Studios from '../components/Studios';
import FoundersWall from '../components/FoundersWall';
import Testimonials from '../components/Testimonials';
import DonationCTA from '../components/DonationCTA';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vision Infinity Ventures | Legendary Venture Studio</title>
        <meta name="description" content="Legendary Venture Studio for Bangalore Founders" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Hero />
      <Process />
      <Timeline />
      <Studios />
      
      {/* First 100 Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the First 100 Legendary Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're assembling our inaugural batch of 100 visionary founders from Bangalore. 
              Be part of a legendary community and shape the future with us.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Exclusive Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Direct access to our expert network
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority funding opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Exclusive workshops and events
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lifetime membership benefits
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$1,000</div>
                  <div className="text-gray-600 mb-4">per founder commitment</div>
                  <Link href="/apply" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                    Apply Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FoundersWall />
      <Testimonials />
      <DonationCTA />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Legendary?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Vision Infinity Ventures and turn your vision into a legendary company. 
            We're only accepting applications from exceptional founders in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              Apply Now
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
