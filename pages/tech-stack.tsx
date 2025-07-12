import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function TechStack() {
  const techStacks = [
    {
      function: 'Product & Design',
      color: 'green',
      description: 'Rapid iteration and user experience design tools',
      categories: [
        {
          name: 'Frontend Development',
          tools: [
            { name: 'Next.js 14', description: 'React framework for production', status: 'Current' },
            { name: 'React 18', description: 'UI library with latest features', status: 'Current' },
            { name: 'TypeScript', description: 'Type-safe JavaScript development', status: 'Current' },
            { name: 'Tailwind CSS', description: 'Utility-first CSS framework', status: 'Current' }
          ]
        }
      ]
    },
    {
      function: 'Venture Building',
      color: 'blue',
      description: 'Systematic methodology and founder journey management',
      categories: [
        {
          name: 'Progress Tracking',
          tools: [
            { name: 'Custom Dashboard', description: '12-phase journey tracking system', status: 'Current' },
            { name: 'Prisma Database', description: 'Founder progress and milestone tracking', status: 'Current' }
          ]
        }
      ]
    },
    {
      function: 'Technology & AI',
      color: 'purple',
      description: 'Scalable platform architecture and AI implementation',
      categories: [
        {
          name: 'Backend Development',
          tools: [
            { name: 'Next.js API Routes', description: 'Serverless API endpoints', status: 'Current' },
            { name: 'Prisma ORM', description: 'Database toolkit and ORM', status: 'Current' },
            { name: 'SQLite', description: 'Lightweight database for development', status: 'Current' }
          ]
        },
        {
          name: 'Authentication & Security',
          tools: [
            { name: 'NextAuth.js', description: 'Authentication for Next.js', status: 'Current' },
            { name: 'bcryptjs', description: 'Password hashing', status: 'Current' },
            { name: 'JWT', description: 'JSON Web Tokens', status: 'Current' }
          ]
        },
        {
          name: 'Infrastructure & Hosting',
          tools: [
            { name: 'Netlify', description: 'Website hosting and deployment platform', status: 'Current' },
            { name: 'PorkBun', description: 'Domain registration and SSL certificates', status: 'Current' },
            { name: 'PorkBun Email', description: 'Professional email hosting service', status: 'Current' }
          ]
        }
      ]
    },
    {
      function: 'Growth & Customer Success',
      color: 'indigo',
      description: 'Regional expansion and founder support systems',
      categories: [
        {
          name: 'CRM & Marketing',
          tools: [
            { name: 'HubSpot', description: 'Marketing, Sales, and Customer Success CRM platform', status: 'Current' }
          ]
        }
      ]
    },

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Planned':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Future':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getFunctionColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-500';
      case 'blue':
        return 'bg-blue-500';
      case 'purple':
        return 'bg-purple-500';
      case 'indigo':
        return 'bg-indigo-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Calculate totals
  const totalTools = techStacks.reduce((sum, stack) => 
    sum + stack.categories.reduce((catSum, cat) => catSum + cat.tools.length, 0), 0
  );

  const functionsWithTools = techStacks.filter(stack => stack.categories.length > 0).length;

  return (
    <>
      <Head>
        <title>Tech Stack | Vision Infinity Ventures - Technology Architecture</title>
        <meta name="description" content="Explore our current technology stack organized by function. From frontend development to CRM, discover the tools powering Bangalore's first venture studio platform." />
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
            Current Technology Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Current
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Technology Stack
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Discover the technology stack currently powering Bangalore&apos;s first venture studio platform. 
            Organized by our 4 core functions to show what we&apos;re actively using today. Finance & Operations managed by fractional agency.
          </p>
          
          {/* Tech Stack Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-400 mb-2">4</div>
              <div className="text-sm text-gray-300">Core Functions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-2">{functionsWithTools}</div>
              <div className="text-sm text-gray-300">Functions with Tools</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-purple-400 mb-2">{totalTools}</div>
              <div className="text-sm text-gray-300">Current Tools</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-indigo-400 mb-2">5</div>
              <div className="text-sm text-gray-300">Tool Categories</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tech-stack" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              Explore Tech Stack
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link href="/careers" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Current Technology Stack by Function
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology architecture is organized around our 4 core functions, 
              showing only the tools we&apos;re actively using today. Finance & Operations managed by fractional agency.
            </p>
          </div>
          
          <div className="space-y-16">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${getFunctionColor(stack.color)} rounded-full flex items-center justify-center mr-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{stack.function}</h3>
                    <p className="text-gray-600">{stack.description}</p>
                  </div>
                </div>
                
                {stack.categories.length > 0 ? (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {stack.categories.map((category, catIndex) => (
                      <div key={catIndex} className="bg-white rounded-xl p-6 shadow-md">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h4>
                        <div className="space-y-3">
                          {category.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{tool.name}</div>
                                <div className="text-sm text-gray-600">{tool.description}</div>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(tool.status)}`}>
                                {tool.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No Tools Currently in Use</h4>
                    <p className="text-gray-600">This function will have tools added as we expand our capabilities.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Stack Summary Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Current Stack Summary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here&apos;s what we&apos;re actively using to build Bangalore&apos;s first venture studio platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Stack</h3>
              <p className="text-sm text-gray-600">Next.js 14, React 18, TypeScript, Tailwind CSS</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend Stack</h3>
              <p className="text-sm text-gray-600">Next.js API Routes, Prisma ORM, SQLite, NextAuth.js</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-sm text-gray-600">Custom dashboard with Prisma database</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Infrastructure</h3>
              <p className="text-sm text-gray-600">Netlify hosting, PorkBun domain & email</p>
            </div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build with Our Tech Stack?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our team and work with our current technology stack to build 
            the future of venture creation in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              View Open Positions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 