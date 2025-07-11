import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const VentureStudioLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <>
      <Head>
        <title>Vision Infinity Ventures - HSR SaaS B2B Venture Studio</title>
        <meta name="description" content="Join our exclusive venture studio for idea-stage DIY entrepreneurs building SaaS B2B products in HSR Layout. Get 12-phase roadmap, AI tools, funding guidance, and personal expense planning." />
        <meta name="keywords" content="venture studio, SaaS B2B, HSR Layout, startup, entrepreneur, funding, AI tools" />
        <meta property="og:title" content="Vision Infinity Ventures - HSR SaaS B2B Venture Studio" />
        <meta property="og:description" content="Exclusive venture studio for idea-stage DIY entrepreneurs in HSR Layout building SaaS B2B products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visioninfinityventures.studio/venture-studio" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-indigo-600">Vision Infinity Ventures</div>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
                <a href="#what-you-get" className="text-gray-600 hover:text-indigo-600 transition-colors">What You Get</a>
                <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  🚀 Limited to 10 Founders in HSR Layout
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Build Your SaaS B2B Product
                <span className="block text-indigo-600">in 12 Phases</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Join our exclusive venture studio for idea-stage DIY entrepreneurs in HSR Layout. 
                Get a complete roadmap, AI-powered tools, funding guidance, and personal expense planning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <div className="flex items-center text-gray-600">
                  <span className="text-2xl mr-2">📍</span>
                  <span>HSR Layout, Bangalore</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-2xl mr-2">💼</span>
                  <span>SaaS B2B Focus</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-2xl mr-2">🎯</span>
                  <span>Idea Stage Only</span>
                </div>
              </div>

              {/* CTA Form */}
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Joining...' : 'Join the Venture Studio'}
                  </button>
                </form>
                
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                    ✅ Welcome! Check your email for next steps.
                  </div>
                )}
                
                <p className="text-sm text-gray-500 mt-4">
                  Join 10 exclusive founders. No spam, just actionable insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why HSR Layout Founders Choose Us
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Hyper-Local Focus</h3>
                  <p className="text-gray-600">Tailored specifically for HSR Layout's unique startup ecosystem and market dynamics.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Tools</h3>
                  <p className="text-gray-600">Access to cutting-edge AI tools and checklists designed for SaaS B2B success.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-2">Complete Financial Planning</h3>
                  <p className="text-gray-600">Personal expense planning included - no hidden costs or surprises.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section id="what-you-get" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What You Get in Our Venture Studio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to go from idea to profitable SaaS B2B product in HSR Layout
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-4">12-Phase Journey Roadmap</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Step-by-step execution plan</li>
                  <li>• Phase-specific milestones</li>
                  <li>• Flexible timeline (founder-paced)</li>
                  <li>• HSR Layout market insights</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-4">AI-Focused People & Tools</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• AI tools and technology stack</li>
                  <li>• Team composition guidelines</li>
                  <li>• Skill requirements checklist</li>
                  <li>• Cost estimates and ROI</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-4">Complete Funding Guide</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Phase-by-phase budget breakdown</li>
                  <li>• Personal expense planning (6 months)</li>
                  <li>• Funding sources and strategies</li>
                  <li>• Risk mitigation approaches</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-4">Success Metrics & KPIs</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Measurable outcomes per phase</li>
                  <li>• Progress tracking tools</li>
                  <li>• Milestone validation</li>
                  <li>• Performance benchmarks</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-4">Risk Mitigation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Financial risk management</li>
                  <li>• Operational safeguards</li>
                  <li>• Market risk strategies</li>
                  <li>• Emergency planning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-4">HSR Layout Network</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Local startup community</li>
                  <li>• Co-working space connections</li>
                  <li>• Investor introductions</li>
                  <li>• Mentor network access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Our Venture Studio Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple 3-step process to get you started
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Join & Get Matched</h3>
                <p className="text-gray-600">
                  Sign up and get matched with your personalized 12-phase journey based on your SaaS B2B idea and HSR Layout context.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Access Your Resources</h3>
                <p className="text-gray-600">
                  Get instant access to your complete guide, AI tools checklist, funding requirements, and personal expense planning.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Execute & Scale</h3>
                <p className="text-gray-600">
                  Follow your roadmap, track progress, and scale your SaaS B2B product with confidence and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                One-time access to everything you need
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-8 md:p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Venture Studio Access
                  </h3>
                  <div className="text-5xl font-bold text-indigo-600 mb-2">
                    ₹25,000
                  </div>
                  <p className="text-gray-600 mb-8">One-time payment</p>
                  
                  <div className="text-left space-y-4 mb-8">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Complete 12-phase journey roadmap</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>AI-focused people & tools checklist</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Detailed funding requirements & budget</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Personal expense planning (6 months)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Success metrics & progress tracking</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Risk mitigation strategies</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>HSR Layout network access</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Lifetime updates & support</span>
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-indigo-700 transition-colors">
                    Get Started Now
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Limited to 10 founders. Join before spots fill up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Why only 10 founders?</h3>
                <p className="text-gray-600">
                  We believe in quality over quantity. By limiting to 10 founders, we can provide personalized attention and ensure each founder gets the maximum value from our venture studio program.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Is this only for HSR Layout?</h3>
                <p className="text-gray-600">
                  Yes, this specific program is tailored for founders in HSR Layout, Bangalore. Our resources, network, and market insights are specifically designed for this ecosystem.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What if I'm not at idea stage?</h3>
                <p className="text-gray-600">
                  This program is specifically designed for idea-stage founders. If you're already at MVP stage or beyond, we have different programs that might be more suitable for your needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Do you provide funding?</h3>
                <p className="text-gray-600">
                  We provide comprehensive funding guidance, including where to find funding, how to prepare, and what investors look for. However, we don't directly invest in companies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Can I get a refund?</h3>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee. If you're not satisfied with the program within 30 days, we'll provide a full refund.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your SaaS B2B Product?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join 10 exclusive founders in HSR Layout and get everything you need to succeed.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 text-lg border-2 border-transparent rounded-lg focus:outline-none focus:border-indigo-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-indigo-600 py-4 px-8 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Joining...' : 'Join Now'}
                </button>
              </div>
            </form>
            
            <p className="text-indigo-200 mt-4">
              Only 10 spots available. Don't miss out.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Vision Infinity Ventures</h3>
                <p className="text-gray-400">
                  Empowering founders to build successful SaaS B2B products in HSR Layout.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Program</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#what-you-get" className="hover:text-white transition-colors">What You Get</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Location</h4>
                <p className="text-gray-400">
                  HSR Layout<br />
                  Bangalore, Karnataka<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Vision Infinity Ventures. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default VentureStudioLanding; 