import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const PitchDeckPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Vision Infinity Ventures",
      subtitle: "Democratizing Startup Success",
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-600 mb-4">Vision Infinity Ventures</h1>
          <p className="text-2xl text-gray-600 mb-8">Open Source & AI Native Venture Studio Platform</p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
                          <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-2">🏙️</div>
                <h3 className="text-lg font-semibold mb-2">Bangalore-First</h3>
                <p className="text-sm text-gray-600">Every Bangalore founder has access to systematic success</p>
              </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI-Native</h3>
              <p className="text-sm text-gray-600">Built from the ground up with AI architecture</p>
            </div>
                          <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-2">🔓</div>
                <h3 className="text-lg font-semibold mb-2">Open Source</h3>
                <p className="text-sm text-gray-600">Transparent, collaborative, and scalable platform</p>
              </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "The Problem",
      subtitle: "Why This Market is Broken",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">The Startup Failure Crisis</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-4xl mr-4">❌</div>
                  <div>
                    <h4 className="font-semibold">90% Failure Rate</h4>
                    <p className="text-sm text-gray-600">9 out of 10 startups fail within 5 years</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl mr-4">💰</div>
                  <div>
                    <h4 className="font-semibold">₹2.4Q Lost Value</h4>
                    <p className="text-sm text-gray-600">Annual economic loss from failed startups</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl mr-4">🏙️</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Ecosystem Gap</h4>
                    <p className="text-sm text-gray-600">8,000+ startups but no systematic venture studio platform</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl mr-4">🎓</div>
                  <div>
                    <h4 className="font-semibold">Knowledge Access</h4>
                    <p className="text-sm text-gray-600">Only connected founders get quality guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Current Solutions Fail</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800">Traditional Accelerators</h4>
                  <p className="text-sm text-red-600">₹41L+, 2% acceptance, location-bound</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800">Online Courses</h4>
                  <p className="text-sm text-red-600">Generic content, no personalization</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800">Consulting Services</h4>
                  <p className="text-sm text-red-600">₹41K+/hour, inconsistent quality</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800">Bangalore Incubators</h4>
                  <p className="text-sm text-red-600">Limited resources, narrow focus, no systematic approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "The Solution",
      subtitle: "Vision Infinity Ventures Platform",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Our Platform</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-4xl mr-4">🗺️</div>
                  <div>
                    <h4 className="font-semibold">12-Phase Journey</h4>
                    <p className="text-sm text-gray-600">Complete roadmap from idea to success</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl mr-4">🤖</div>
                  <div>
                    <h4 className="font-semibold">AI-Native Personalization</h4>
                    <p className="text-sm text-gray-600">16 different personas, tailored guidance</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl mr-4">📍</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Intelligence</h4>
                    <p className="text-sm text-gray-600">HSR Layout & Whitefield expertise</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-4xl mr-4">✅</div>
                  <div>
                    <h4 className="font-semibold">Complete Ecosystem</h4>
                    <p className="text-sm text-gray-600">Tools, resources, networks, guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Differentiators</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Affordable Access</h4>
                  <p className="text-sm text-green-600">₹5,000-15,000/month vs ₹41L+ accelerators</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Bangalore Market Focus</h4>
                  <p className="text-sm text-green-600">Deep understanding of Bangalore ecosystem</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Proven Methodology</h4>
                  <p className="text-sm text-green-600">Data-driven, tested across markets</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Scalable Platform</h4>
                  <p className="text-sm text-green-600">Can serve thousands simultaneously</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Open Source Platform</h4>
                  <p className="text-sm text-green-600">Transparent, collaborative, and scalable architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Market Opportunity",
      subtitle: "Massive Market, Perfect Timing",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Market Size</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Bangalore Startup Ecosystem</h4>
                  <p className="text-2xl font-bold text-blue-600">₹9.1L Cr</p>
                  <p className="text-sm text-blue-600">8,000+ startups, 40+ unicorns</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Bangalore Tech Hub</h4>
                  <p className="text-2xl font-bold text-blue-600">₹9.1L Cr</p>
                  <p className="text-sm text-blue-600">8,000+ startups, 40+ unicorns</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Bangalore Venture Studio Market</h4>
                  <p className="text-2xl font-bold text-blue-600">₹16.6K Cr</p>
                  <p className="text-sm text-blue-600">Untapped market for systematic venture studio</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Now?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🤖</div>
                  <div>
                    <h4 className="font-semibold">AI Revolution</h4>
                    <p className="text-sm text-gray-600">Technology enables personalization</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🏠</div>
                  <div>
                    <h4 className="font-semibold">Remote Work</h4>
                    <p className="text-sm text-gray-600">Location-independent startup creation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🏙️</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Ecosystem Maturity</h4>
                    <p className="text-sm text-gray-600">40+ unicorns, strong tech community</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">💰</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Investor Interest</h4>
                    <p className="text-sm text-gray-600">₹12.4L Cr+ in Bangalore startup funding annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Business Model",
      subtitle: "Multiple Revenue Streams, High Margins",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Base Subscriptions</h4>
                  <p className="text-lg font-bold text-purple-600">₹5,000-15,000/month</p>
                  <p className="text-sm text-purple-600">Core guidance platform</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Premium Services</h4>
                  <p className="text-lg font-bold text-purple-600">₹25,000-50,000/month</p>
                  <p className="text-sm text-purple-600">Fractional support teams</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Marketplace Commission</h4>
                  <p className="text-lg font-bold text-purple-600">10-20%</p>
                  <p className="text-sm text-purple-600">Service provider bookings</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Data Insights</h4>
                  <p className="text-lg font-bold text-purple-600">₹10,000-25,000/month</p>
                  <p className="text-sm text-purple-600">Advanced analytics</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Unit Economics</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Customer Acquisition Cost</h4>
                  <p className="text-2xl font-bold text-gray-600">₹5,000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Lifetime Value</h4>
                  <p className="text-2xl font-bold text-gray-600">₹2,00,000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">LTV/CAC Ratio</h4>
                  <p className="text-2xl font-bold text-green-600">40:1</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Gross Margin</h4>
                  <p className="text-2xl font-bold text-green-600">80%+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Growth Strategy",
      subtitle: "Scalable, Defensible Growth",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Growth Phases</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800">Phase 1: Foundation (Months 1-6)</h4>
                  <p className="text-sm text-indigo-600">Bangalore validation, 100+ founders, ₹15L ARR</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800">Phase 2: Scale (Months 7-18)</h4>
                  <p className="text-sm text-indigo-600">Bangalore dominance, 1,000+ founders, ₹6Cr ARR</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800">Phase 3: Bangalore Dominance (Months 19-36)</h4>
                  <p className="text-sm text-indigo-600">Bangalore market leadership, 5,000+ founders, ₹30Cr ARR</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800">Phase 4: Regional Expansion (Months 37-60)</h4>
                  <p className="text-sm text-indigo-600">5 major Indian cities, 20,000+ founders, ₹150Cr+ ARR</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Growth Levers</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">📈</div>
                  <div>
                    <h4 className="font-semibold">Network Effects</h4>
                    <p className="text-sm text-gray-600">More founders = better platform</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🏙️</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Market Expansion</h4>
                    <p className="text-sm text-gray-600">Proven model replicates to other Indian cities</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🔄</div>
                  <div>
                    <h4 className="font-semibold">Product Expansion</h4>
                    <p className="text-sm text-gray-600">Multiple revenue streams</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🤝</div>
                  <div>
                    <h4 className="font-semibold">Partnerships</h4>
                    <p className="text-sm text-gray-600">Co-working spaces, universities, accelerators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Competitive Advantage",
      subtitle: "Sustainable Moat",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Our Advantages</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Bangalore Intelligence</h4>
                  <p className="text-sm text-green-600">Deep HSR & Whitefield expertise</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">AI-Powered Personalization</h4>
                  <p className="text-sm text-green-600">16 different personas, dynamic content</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Complete Ecosystem</h4>
                  <p className="text-sm text-green-600">12-phase journey, tools, networks</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Proven Methodology</h4>
                  <p className="text-sm text-green-600">Data-driven, tested across markets</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Competitive Moat</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">📊</div>
                  <div>
                    <h4 className="font-semibold">Data Network Effects</h4>
                    <p className="text-sm text-gray-600">More founders = better AI recommendations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">📍</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Market Knowledge</h4>
                    <p className="text-sm text-gray-600">Years to build, hard to replicate</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🤖</div>
                  <div>
                    <h4 className="font-semibold">AI Personalization Engine</h4>
                    <p className="text-sm text-gray-600">Proprietary algorithms, continuous learning</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🤝</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Community Network Effects</h4>
                    <p className="text-sm text-gray-600">Bangalore founder communities, switching costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Team & Execution",
      subtitle: "Why We Can Execute",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Execution Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🎯</div>
                  <div>
                    <h4 className="font-semibold">Deep Market Understanding</h4>
                    <p className="text-sm text-gray-600">Years of experience in Indian startup ecosystem</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🤖</div>
                  <div>
                    <h4 className="font-semibold">AI/ML Expertise</h4>
                    <p className="text-sm text-gray-600">Technical capabilities for personalization</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">📍</div>
                  <div>
                    <h4 className="font-semibold">Bangalore Networks</h4>
                    <p className="text-sm text-gray-600">Strong relationships in HSR and Whitefield</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">📈</div>
                  <div>
                    <h4 className="font-semibold">Proven Track Record</h4>
                    <p className="text-sm text-gray-600">Successfully built and scaled platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Accel?</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Track Record</h4>
                  <p className="text-sm text-blue-600">Flipkart, Freshworks, Swiggy success stories</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Bangalore Market Expertise</h4>
                  <p className="text-sm text-blue-600">Deep understanding of Bangalore ecosystem</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Regional Network</h4>
                  <p className="text-sm text-blue-600">Access to Indian markets and partners</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Strategic Value</h4>
                  <p className="text-sm text-blue-600">Help us scale and expand regionally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Financial Projections",
      subtitle: "Path to ₹1,000 Crore ARR",
      content: (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Revenue Growth</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Year 1</h4>
                  <p className="text-2xl font-bold text-green-600">₹6 Crores ARR</p>
                  <p className="text-sm text-green-600">1,000+ founders, Bangalore focus</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Year 2</h4>
                  <p className="text-2xl font-bold text-green-600">₹30 Crores ARR</p>
                  <p className="text-sm text-green-600">5,000+ founders, 5 cities</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Year 3</h4>
                  <p className="text-2xl font-bold text-green-600">₹100 Crores ARR</p>
                  <p className="text-sm text-green-600">15,000+ founders, 10 cities</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Year 5</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,000 Crores ARR</p>
                  <p className="text-sm text-green-600">50,000+ founders, regional presence</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Customer Acquisition Cost</h4>
                  <p className="text-2xl font-bold text-gray-600">₹5,000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Lifetime Value</h4>
                  <p className="text-2xl font-bold text-gray-600">₹2,00,000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Monthly Churn</h4>
                  <p className="text-2xl font-bold text-green-600">&lt;5%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Gross Margin</h4>
                  <p className="text-2xl font-bold text-green-600">80%+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Strategic Investment Opportunity",
              subtitle: "Seeking ₹10Cr for 10% Equity",
      content: (
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-indigo-600 mb-6">Strategic Investment Opportunity</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-800 mb-2">Investment Ask</h4>
                <p className="text-3xl font-bold text-indigo-600 mb-2">₹10Cr</p>
                                  <p className="text-sm text-indigo-600">For 10% equity</p>
                <p className="text-sm text-indigo-600">₹33.2Cr pre-money valuation</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-indigo-800 mb-2">Use of Funds</h4>
                <p className="text-sm text-indigo-600 mb-2">• Team expansion (40%)</p>
                <p className="text-sm text-indigo-600 mb-2">• Marketing & growth (35%)</p>
                <p className="text-sm text-indigo-600 mb-2">• Technology development (20%)</p>
                <p className="text-sm text-indigo-600">• Operations (5%)</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold text-green-800 mb-4">Equity Structure</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="text-2xl font-bold text-green-600">70%</p>
                  <p className="text-sm text-green-600">Founder Team</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">15%</p>
                  <p className="text-sm text-green-600">Strategic Investor</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">10%</p>
                  <p className="text-sm text-green-600">Team Pool</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">5%</p>
                  <p className="text-sm text-green-600">Advisory</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">Why Strategic Investors Should Back Us?</h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-blue-600">• Category-defining venture studio platform</p>
                  <p className="text-sm text-blue-600">• Aligns with proven investment thesis</p>
                  <p className="text-sm text-blue-600">• Rapid product-market fit methodology</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600">• Massive market opportunity (₹9.1L Cr Bangalore ecosystem)</p>
                  <p className="text-sm text-blue-600">• Systematic execution approach</p>
                  <p className="text-sm text-blue-600">• Network effects and regional scalability</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-800 mb-4">Strategic Alignment</h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-purple-600">• Product-market fit focus</p>
                  <p className="text-sm text-purple-600">• Category-defining companies</p>
                  <p className="text-sm text-purple-600">• Systematic execution</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600">• Network effects</p>
                  <p className="text-sm text-purple-600">• Regional scale potential</p>
                  <p className="text-sm text-purple-600">• Proven methodology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <>
      <Head>
        <title>Pitch Deck | Vision Infinity Ventures</title>
        <meta name="description" content="Vision Infinity Ventures - Bangalore's First Venture Studio Platform. Comprehensive pitch deck for investors." />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        {/* Slide Navigation */}
        <div className="sticky top-16 z-40 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm text-gray-600">
                  {activeSlide + 1} of {slides.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeSlide ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {slides[activeSlide].title}
                </h1>
                <p className="text-indigo-100 text-lg">
                  {slides[activeSlide].subtitle}
                </p>
              </div>
              
              <div className="p-8 md:p-12">
                {slides[activeSlide].content}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/docs/strategy/vision-and-mission.md" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">🌍</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vision & Mission</h3>
                  <p className="text-sm text-gray-600">Our world-changing vision and mission</p>
                </Link>
                <Link href="/docs/strategy/market-opportunity.md" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Market Analysis</h3>
                  <p className="text-sm text-gray-600">Detailed market opportunity analysis</p>
                </Link>
                <Link href="/docs/strategy/growth-equation.md" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Growth Strategy</h3>
                  <p className="text-sm text-gray-600">Our growth equation and metrics</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PitchDeckPage; 