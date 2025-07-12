import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const VentureStudioLanding = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [personaData, setPersonaData] = useState({
    founderType: '',
    stage: '',
    industry: '',
    location: '',
    deliveryMedium: ''
  });

  useEffect(() => {
    if (router.isReady) {
      const { founderType, stage, industry, location, deliveryMedium } = router.query;
      setPersonaData({
        founderType: founderType as string || '',
        stage: stage as string || '',
        industry: industry as string || '',
        location: location as string || '',
        deliveryMedium: deliveryMedium as string || ''
      });
    }
  }, [router.isReady, router.query]);

  const getDisplayName = (type: string) => {
    const founderMap = {
      'diy-founder': 'DIY Founder',
      'fractional-support': 'Fractional Support'
    };
    return founderMap[type as keyof typeof founderMap] || type;
  };

  const getStageName = (stage: string) => {
    const stageMap = {
      'idea-stage': 'Idea Stage',
      'mvp-stage': 'MVP Stage'
    };
    return stageMap[stage as keyof typeof stageMap] || stage;
  };

  const getIndustryName = (industry: string) => {
    const industryMap = {
      'education': 'Education',
      'others': 'Others'
    };
    return industryMap[industry as keyof typeof industryMap] || industry;
  };

  const getLocationName = (location: string) => {
    const locationMap = {
      'hsr-only': 'HSR Layout, Bangalore',
      'bangalore-only': 'Other parts of Bangalore'
    };
    return locationMap[location as keyof typeof locationMap] || location;
  };

  const getDeliveryMediumName = (deliveryMedium: string) => {
    const deliveryMap = {
      'offline': 'Offline (In-person)',
      'online': 'Online (Virtual)'
    };
    return deliveryMap[deliveryMedium as keyof typeof deliveryMap] || deliveryMedium;
  };

  const getPricing = () => {
    // Different pricing based on persona
    if (personaData.founderType === 'diy-founder' && personaData.location === 'hsr-only') {
      return '₹25,000';
    }
    if (personaData.founderType === 'fractional-support') {
      return '₹50,000';
    }
    return '₹35,000';
  };

  const getPersonaTitle = () => {
    if (!personaData.founderType || !personaData.stage || !personaData.industry || !personaData.location || !personaData.deliveryMedium) {
      return 'Venture Studio';
    }
    return `${getDisplayName(personaData.founderType)} - ${getStageName(personaData.stage)} - ${getIndustryName(personaData.industry)} - ${getLocationName(personaData.location)} - ${getDeliveryMediumName(personaData.deliveryMedium)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const isPersonaComplete = personaData.founderType && personaData.stage && personaData.industry && personaData.location && personaData.deliveryMedium;

  return (
    <>
      <Head>
        <title>{getPersonaTitle()} - Vision Infinity Ventures</title>
        <meta name="description" content={`Personalized venture studio program for ${getPersonaTitle()}. Get your customized 12-phase roadmap, AI tools, and funding guidance.`} />
        <meta name="keywords" content="venture studio, startup, entrepreneur, funding, AI tools" />
        <meta property="og:title" content={`${getPersonaTitle()} - Vision Infinity Ventures`} />
        <meta property="og:description" content={`Personalized venture studio program for ${getPersonaTitle()}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visioninfinityventures.studio/venture-studio" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">Vision Infinity Ventures</Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">Home</Link>
                <Link href="#how-it-works" className="text-gray-200 hover:text-white transition-colors">How It Works</Link>
                <Link href="#what-you-get" className="text-gray-200 hover:text-white transition-colors">What You Get</Link>
                <Link href="#pricing" className="text-gray-200 hover:text-white transition-colors">Pricing</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {isPersonaComplete && (
                <div className="mb-8">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-400/30">
                    ✅ Personalized for {getPersonaTitle()}
                  </span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {isPersonaComplete ? (
                  <>
                    Your {getIndustryName(personaData.industry)} Journey
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Starts Here</span>
                  </>
                ) : (
                  <>
                    Democratizing
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Startup Success</span>
                  </>
                )}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                {isPersonaComplete ? (
                  `Join our venture studio designed specifically for ${getDisplayName(personaData.founderType)}s at ${getStageName(personaData.stage)} building ${getIndustryName(personaData.industry)} products in ${getLocationName(personaData.location)}.`
                ) : (
                  "We believe every founder deserves success. Our venture studio provides personalized roadmaps, AI-powered tools, and democratized access to the knowledge and support you need to build sustainable, scalable businesses."
                )}
              </p>

              {isPersonaComplete && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <div className="flex items-center text-gray-300">
                    <span className="text-2xl mr-2">👤</span>
                    <span>{getDisplayName(personaData.founderType)}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-2xl mr-2">🎯</span>
                    <span>{getStageName(personaData.stage)}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-2xl mr-2">💼</span>
                    <span>{getIndustryName(personaData.industry)}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-2xl mr-2">📍</span>
                    <span>{getLocationName(personaData.location)}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-2xl mr-2">📱</span>
                    <span>{getDeliveryMediumName(personaData.deliveryMedium)}</span>
                  </div>
                </div>
              )}

              {/* CTA Form */}
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email to get started"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Getting Started...
                      </span>
                    ) : (
                      'Start Your Journey'
                    )}
                  </button>
                </form>
                
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                    <p className="text-green-400 text-center">Thank you! We'll be in touch soon with your personalized roadmap.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Our Mission</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                "To eliminate the barriers to startup success by providing every founder with 
                the tools, knowledge, and support they need to build sustainable, scalable businesses."
              </p>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Inclusive</h3>
                  <p className="text-sm text-gray-300">For every founder, regardless of background</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Transparent</h3>
                  <p className="text-sm text-gray-300">Clear, actionable guidance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Innovative</h3>
                  <p className="text-sm text-gray-300">AI-powered, personalized solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Democratize Success</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Our approach breaks down the traditional barriers that prevent founders from accessing the resources they need.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Personalized Roadmaps</h3>
                <p className="text-gray-300">
                  Every founder gets a customized 12-phase journey tailored to their specific stage, industry, and location. 
                  No more one-size-fits-all approaches.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Tools</h3>
                <p className="text-gray-300">
                  Access to cutting-edge AI tools and checklists that were previously only available to well-funded startups. 
                  Level the playing field with technology.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Democratized Funding</h3>
                <p className="text-gray-300">
                  Complete financial planning and funding guidance that demystifies the capital-raising process. 
                  Access the knowledge that was once gatekept by traditional networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section id="what-you-get" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What You Get</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive support designed to eliminate every barrier between you and startup success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-white mb-3">12-Phase Roadmap</h3>
                <p className="text-sm text-gray-300">Step-by-step execution plan tailored to your journey</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold text-white mb-3">AI Tools & Checklists</h3>
                <p className="text-sm text-gray-300">Industry-specific resources and automation</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-white mb-3">Funding Guidance</h3>
                <p className="text-sm text-gray-300">Complete financial planning and capital access</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-semibold text-white mb-3">Community Access</h3>
                <p className="text-sm text-gray-300">Inclusive network of founders and mentors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent, Accessible Pricing</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We believe in transparent pricing that makes startup success accessible to everyone, 
                not just those with deep pockets.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Complete Venture Studio Program</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">{getPricing()}</div>
                <p className="text-gray-300">One-time investment for lifetime access</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Personalized 12-phase roadmap
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AI-powered tools and checklists
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Complete funding guidance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Community access
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Why This Pricing:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Democratized access to success
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      No hidden fees or equity requirements
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Transparent value proposition
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Your success is our success
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Be part of the revolution that's democratizing startup success. 
              Every founder deserves the tools and support to build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#top" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                Start Your Journey
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/stages" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20">
                Explore All Content
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VentureStudioLanding; 