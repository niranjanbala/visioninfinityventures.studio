import React from 'react';
import Link from 'next/link';

export default function DonationCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Help us build the next generation of legendary startups in Bangalore. 
            Every contribution fuels innovation and empowers founders.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link 
              href="/apply" 
              className="btn-gradient group text-lg px-8 py-4 bg-background/10 backdrop-blur-sm border-background/20 hover:bg-background/20"
            >
              <span>Join as Founder</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/content" 
              className="btn-secondary group text-lg px-8 py-4 bg-background/10 backdrop-blur-sm border-background/20 hover:bg-background/20"
            >
              <span>Explore Content</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20">
            <h3 className="text-2xl font-semibold mb-4">Why Support Vision Infinity Ventures?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2">Fuel Innovation</h4>
                <p className="text-sm opacity-80">Support cutting-edge AI tools and methodologies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💎</div>
                <h4 className="font-semibold mb-2">Build Community</h4>
                <p className="text-sm opacity-80">Help create Bangalore&apos;s premier founder ecosystem</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-semibold mb-2">Create Impact</h4>
                <p className="text-sm opacity-80">Enable the next generation of legendary startups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 