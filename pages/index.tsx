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
        <meta name="theme-color" content="#6366f1" />
      </Head>
      <Hero />
      <Process />
      <Timeline />
      <Studios />
      {/* New Founders Batch Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <svg className="w-full h-full" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="0.3" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,101.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Meet the First 100 Legendary Founders</h2>
          <p className="mb-8 text-lg md:text-xl font-medium opacity-90">We're assembling our inaugural batch of 100 visionary founders from Bangalore. Be part of a legendary community, get exclusive access to resources, and shape the future with us.</p>
          <Link href="/apply" className="inline-block px-10 py-4 bg-white text-pink-600 font-bold rounded-full shadow-xl transition text-lg hover:bg-pink-100 border-2 border-white">
            Join the First 100
          </Link>
        </div>
      </section>
      {/* End Founders Batch Section */}
      <FoundersWall />
      <Testimonials />
      <DonationCTA />
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Legendary?</h2>
          <p className="mb-8 text-lg opacity-90">Join Vision Infinity Ventures and turn your vision into a legendary company. Only accepting applications from Bangalore.</p>
          <Link href="/apply" className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg transition text-lg hover:bg-indigo-100">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
} 