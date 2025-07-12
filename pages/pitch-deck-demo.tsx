import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import PitchDeckLayout, { Slide, FeatureGrid, Stats } from '../components/PitchDeckLayout';

export default function PitchDeckDemo() {
  const headings = [
    { id: 'vision', text: 'Our Vision', level: 2 },
    { id: 'problem', text: 'The Problem', level: 2 },
    { id: 'solution', text: 'Our Solution', level: 2 },
    { id: 'market', text: 'Market Opportunity', level: 2 },
    { id: 'approach', text: 'Our Approach', level: 2 },
    { id: 'results', text: 'Expected Results', level: 2 }
  ];

  return (
    <>
      <Head>
        <title>Pitch Deck Demo | Vision Infinity Ventures</title>
        <meta name="description" content="Demo of our pitch deck-style content layout" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <PitchDeckLayout 
        title="Vision Infinity Ventures Studio" 
        subtitle="Democratizing Startup Success Through AI-Native, Open Source Innovation"
        slug="pitch-deck-demo"
        headings={headings}
      >
        <Slide title="Our Vision" id="vision" background="gradient">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              A World Where Every Founder Succeeds
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We envision a world where every aspiring founder, regardless of their background, 
              location, or resources, has access to the knowledge, tools, and guidance needed 
              to build successful, impactful companies.
            </p>
          </div>
          
          <FeatureGrid 
            features={[
              {
                icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>,
                title: "Democratization",
                description: "Make startup success accessible to everyone, regardless of background or location."
              },
              {
                icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>,
                title: "AI-Native",
                description: "Build from the ground up with AI-first principles for personalized guidance."
              },
              {
                icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>,
                title: "Open Source",
                description: "Transparent, collaborative development practices accessible to all."
              }
            ]}
          />
        </Slide>

        <Slide title="The Problem" id="problem" background="white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Startup Success is Still a Lottery
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>90% of startups fail due to lack of systematic guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Geographic barriers limit access to quality mentorship</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Fragmented tools and resources create confusion</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>High costs exclude many potential founders</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-600 mb-4">90%</div>
                <div className="text-xl font-semibold text-red-800 mb-2">Failure Rate</div>
                <div className="text-red-600">Traditional startup approach</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide title="Our Solution" id="solution" background="gray">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Systematic Venture Studio Platform
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're building the category-defining venture studio platform that systematically creates 
              successful startups through rapid product-market fit, proven methodologies, and AI-native architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">12-Phase Methodology</h4>
              <p className="text-gray-600 text-center">
                Proven, systematic approach to startup building with clear milestones and outcomes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">AI-Native Personalization</h4>
              <p className="text-gray-600 text-center">
                Tailored guidance for each founder's unique situation and market context.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Open Source Platform</h4>
              <p className="text-gray-600 text-center">
                Transparent, collaborative development with no vendor lock-in or hidden agendas.
              </p>
            </div>
          </div>
        </Slide>

        <Slide title="Market Opportunity" id="market" background="white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                ₹9.1L Cr Bangalore Startup Ecosystem
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                With 8,000+ startups and 40+ unicorns, Bangalore represents the perfect 
                market for our systematic venture studio platform.
              </p>
              
              <Stats 
                stats={[
                  { number: "₹9.1L Cr", label: "Market Size", color: "text-indigo-600" },
                  { number: "8,000+", label: "Startups", color: "text-green-600" },
                  { number: "40+", label: "Unicorns", color: "text-purple-600" }
                ]}
              />
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">First-Mover Advantage</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No systematic venture studio platform exists
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered personalization capabilities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Deep local network effects
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Open source architecture
                </li>
              </ul>
            </div>
          </div>
        </Slide>

        <Slide title="Our Approach" id="approach" background="gradient">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              From Idea to Product-Market Fit in 12 Months
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our systematic approach leverages AI-native technology and proven methodologies 
              to accelerate startup success and reduce failure rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: "1-2", title: "Ideation", desc: "Market research & validation" },
              { phase: "3-4", title: "MVP", desc: "Rapid prototyping & development" },
              { phase: "5-6", title: "Testing", desc: "User feedback & iteration" },
              { phase: "7-9", title: "Refinement", desc: "Product optimization" },
              { phase: "10-11", title: "Scaling", desc: "GTM & growth strategies" },
              { phase: "12", title: "PMF", desc: "Product-market fit assessment" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{item.phase}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Slide>

        <Slide title="Expected Results" id="results" background="white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Startup Success Rates
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our platform aims to dramatically improve startup success rates through 
              systematic guidance and AI-native personalization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-semibold text-gray-900">Target Success Rate</span>
                  <span className="text-2xl font-bold text-green-600">60%+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-semibold text-gray-900">Time to PMF</span>
                  <span className="text-2xl font-bold text-blue-600">12 Months</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <span className="font-semibold text-gray-900">Geographic Reach</span>
                  <span className="text-2xl font-bold text-purple-600">100+ Cities</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Economic Impact</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">₹1T+</div>
                  <div className="text-indigo-100">New Value Created</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-green-100">Founders Empowered</div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-orange-100">Open Source Contributors</div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </PitchDeckLayout>
    </>
  );
} 