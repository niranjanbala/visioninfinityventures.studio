import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function Careers() {
  const roles = [
    {
      id: 'vp-product-strategy',
      title: 'VP Product Strategy (Fractional)',
      type: 'Strategist',
      function: 'Product & Design',
      salary: '₹16-20 Lakhs/year',
      equity: '2% over 4 years',
      experience: '8+ years',
      description: 'Lead product strategy and market opportunity identification for our category-defining venture studio platform. Remote fractional role.',
      responsibilities: [
        'Market opportunity analysis (₹9.1L Cr Bangalore ecosystem)',
        'Bangalore-first product strategies',
        'Competitive positioning',
        'Customer discovery frameworks',
        'Product roadmap execution',
        'Remote team coordination and leadership'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager (Fractional)',
      type: 'Executor',
      function: 'Product & Design',
      salary: '₹8-12 Lakhs/year',
      equity: '1% over 4 years',
      experience: '5+ years',
      description: 'Execute rapid MVP development and product-market fit achievement through systematic iteration. Remote fractional role.',
      responsibilities: [
        'Rapid MVP development and testing',
        'User feedback collection and analysis',
        'Product-market fit metrics',
        'Technical implementation',
        'Rapid iteration cycles',
        'Remote collaboration with development team'
      ]
    },
    {
      id: 'ux-ui-designer',
      title: 'UX/UI Designer (Fractional)',
      type: 'Executor',
      function: 'Product & Design',
      salary: '₹6-10 Lakhs/year',
      equity: '0.5% over 4 years',
      experience: '3+ years',
      description: 'Create intuitive and engaging user experiences for our venture studio platform. Remote fractional role.',
      responsibilities: [
        'User interface design and prototyping',
        'User experience research and testing',
        'Design system development',
        'Visual design and branding',
        'Design-to-development handoff',
        'Remote design collaboration and feedback'
      ]
    },

    {
      id: 'cto-vp-technology',
      title: 'CTO/VP Technology Strategy (Fractional)',
      type: 'Strategist',
      function: 'Technology & AI',
      salary: '₹20-24 Lakhs/year',
      equity: '3% over 4 years',
      experience: '10+ years',
      description: 'Lead technology architecture and AI strategy for our scalable venture studio platform. Remote fractional role.',
      responsibilities: [
        'Scalable platform architecture',
        'AI/ML strategy development',
        'Bangalore platform scalability',
        'Technology partnerships',
        'Innovation leadership',
        'Remote technology team management'
      ]
    },
    {
      id: 'lead-engineer',
      title: 'Lead Engineer (Fractional)',
      type: 'Executor',
      function: 'Technology & AI',
      salary: '₹12-16 Lakhs/year',
      equity: '1.5% over 4 years',
      experience: '7+ years',
      description: 'Execute platform development and AI implementation with technical excellence. Remote fractional role.',
      responsibilities: [
        'Core platform feature development',
        'AI/ML model implementation',
        'Technical excellence and quality',
        'Performance optimization',
        'Engineering team leadership',
        'Remote development coordination'
      ]
    },
    {
      id: 'vp-growth-strategy',
      title: 'VP Growth Strategy (Fractional)',
      type: 'Strategist',
      function: 'Growth & Customer Success',
      salary: '₹16 Lakhs/year',
      equity: '2% over 4 years',
      experience: '8+ years',
      description: 'Lead growth strategy and customer success for rapid Bangalore market expansion. Remote fractional role.',
      responsibilities: [
        'Comprehensive growth strategy',
        'Bangalore market expansion',
        'Customer success optimization',
        'Growth metrics and KPIs',
        'Strategic partnerships',
        'Remote growth team leadership'
      ]
    },
    {
      id: 'growth-manager',
      title: 'Growth Manager (Fractional)',
      type: 'Executor',
      function: 'Growth & Customer Success',
      salary: '₹8 Lakhs/year',
      equity: '1% over 4 years',
      experience: '5+ years',
      description: 'Execute growth initiatives and user acquisition strategies for rapid platform growth. Remote fractional role.',
      responsibilities: [
        'User acquisition strategies',
        'Founder community building',
        'Growth experiments',
        'Performance marketing',
        'Engagement optimization',
        'Remote community management'
      ]
    },
    {
      id: 'customer-success-manager',
      title: 'Customer Success Manager (Fractional)',
      type: 'Executor',
      function: 'Growth & Customer Success',
      salary: '₹6-10 Lakhs/year',
      equity: '0.5% over 4 years',
      experience: '3+ years',
      description: 'Ensure founder success and satisfaction through proactive support and guidance. Remote fractional role.',
      responsibilities: [
        'Founder onboarding and training',
        'Success metrics tracking',
        'Proactive support and guidance',
        'Feedback collection and analysis',
        'Retention and expansion strategies',
        'Remote customer support coordination'
      ]
    },

  ];

  return (
    <>
      <Head>
        <title>Careers | Vision Infinity Ventures - Open Source & AI Native Venture Studio</title>
        <meta name="description" content="Join our open source and AI native venture studio platform. Build the future of startup creation with rapid product-market fit and proven methodologies." />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Ready to Build
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our Open Source & AI Native
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Venture Studio Platform
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            We&apos;re building Bangalore&apos;s first open source and AI-native systematic venture studio platform that creates successful startups 
            through rapid product-market fit and proven methodologies. All roles are fractional and remote. Ready to build for ₹10Cr (10% equity).
          </p>
          
          {/* Investment Context */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-400 mb-2">₹10Cr</div>
              <div className="text-sm text-gray-300">For 10% Equity</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-2">₹9.1L Cr</div>
              <div className="text-sm text-gray-300">Bangalore Market</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-sm text-gray-300">Open Positions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-indigo-400 mb-2">₹100-110L</div>
              <div className="text-sm text-gray-300">Annual Team Cost</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#open-positions" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              View Open Positions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="mailto:careers@visioninfinityventures.studio" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Team Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;ve designed a systematic team structure with 4 core functions. Venture Building roles handled by founder. 
              Finance & Operations managed by fractional agency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product & Design</h3>
              <p className="text-sm text-gray-600">Rapid iteration and UX</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Venture Building</h3>
              <p className="text-sm text-gray-600">Founder-led methodology</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology & AI</h3>
              <p className="text-sm text-gray-600">Scalable platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth & Customer Success</h3>
              <p className="text-sm text-gray-600">Regional expansion & support</p>
            </div>
            

          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to build Bangalore&apos;s first venture studio platform. 
              Each role is designed to contribute to rapid product-market fit and regional scale.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {roles.map((role) => (
              <div key={role.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        role.type === 'Strategist' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {role.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {role.function}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{role.salary}</div>
                    <div className="text-sm text-gray-600">{role.equity}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{role.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {role.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <strong>Experience:</strong> {role.experience}
                  </div>
                  <a 
                    href={`mailto:careers@visioninfinityventures.studio?subject=${role.title} - Ready to Build`}
                    className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200"
                  >
                    Apply Now
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our systematic approach to building the future of venture creation. 
              Here&apos;s how to become part of our strategic team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Requirements</h3>
              <p className="text-sm text-gray-600">Ensure you meet experience and skill requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prepare Application</h3>
              <p className="text-sm text-gray-600">Resume, cover letter, and portfolio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-sm text-gray-600">Send to careers@visioninfinityventures.studio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-sm text-gray-600">3-4 rounds including technical and cultural fit</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offer & Onboarding</h3>
              <p className="text-sm text-gray-600">Competitive package with equity participation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-400 text-sm text-center">
            Join us in building the category-defining venture studio platform that will transform 
                          how startups are created and scaled globally. Ready to build for ₹10Cr (10% equity).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@visioninfinityventures.studio?subject=General Application - Ready to Build"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Apply Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <Link href="/" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 