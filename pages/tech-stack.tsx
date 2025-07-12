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
        },
        {
          name: 'Design & Prototyping',
          tools: [
            { name: 'Figma', description: 'Design and prototyping platform', status: 'Planned' },
            { name: 'Adobe Creative Suite', description: 'Professional design tools', status: 'Planned' },
            { name: 'Framer', description: 'Interactive prototyping', status: 'Planned' },
            { name: 'Storybook', description: 'Component development environment', status: 'Planned' }
          ]
        },
        {
          name: 'User Research',
          tools: [
            { name: 'Hotjar', description: 'User behavior analytics', status: 'Planned' },
            { name: 'Google Analytics', description: 'Website analytics', status: 'Planned' },
            { name: 'Mixpanel', description: 'Product analytics', status: 'Planned' },
            { name: 'UserTesting', description: 'User research platform', status: 'Planned' }
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
          name: 'Project Management',
          tools: [
            { name: 'Linear', description: 'Issue tracking and project management', status: 'Planned' },
            { name: 'Notion', description: 'Documentation and knowledge base', status: 'Planned' },
            { name: 'Asana', description: 'Team collaboration and task management', status: 'Planned' },
            { name: 'Trello', description: 'Visual project management', status: 'Planned' }
          ]
        },
        {
          name: 'Communication',
          tools: [
            { name: 'Slack', description: 'Team communication platform', status: 'Planned' },
            { name: 'Discord', description: 'Community building and communication', status: 'Planned' },
            { name: 'Zoom', description: 'Video conferencing', status: 'Planned' },
            { name: 'Loom', description: 'Video messaging and screen recording', status: 'Planned' }
          ]
        },
        {
          name: 'Progress Tracking',
          tools: [
            { name: 'Custom Dashboard', description: '12-phase journey tracking system', status: 'Current' },
            { name: 'Prisma Database', description: 'Founder progress and milestone tracking', status: 'Current' },
            { name: 'Jira', description: 'Advanced project management', status: 'Planned' },
            { name: 'Monday.com', description: 'Workflow automation', status: 'Planned' }
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
            { name: 'SQLite', description: 'Lightweight database for development', status: 'Current' },
            { name: 'PostgreSQL', description: 'Production database', status: 'Planned' }
          ]
        },
        {
          name: 'Authentication & Security',
          tools: [
            { name: 'NextAuth.js', description: 'Authentication for Next.js', status: 'Current' },
            { name: 'bcryptjs', description: 'Password hashing', status: 'Current' },
            { name: 'JWT', description: 'JSON Web Tokens', status: 'Current' },
            { name: 'OAuth Providers', description: 'Social login integration', status: 'Planned' }
          ]
        },
        {
          name: 'AI/ML Integration',
          tools: [
            { name: 'OpenAI API', description: 'GPT models for content generation', status: 'Planned' },
            { name: 'Hugging Face', description: 'AI model hosting and inference', status: 'Planned' },
            { name: 'TensorFlow.js', description: 'Client-side machine learning', status: 'Planned' },
            { name: 'Custom AI Models', description: 'Domain-specific AI solutions', status: 'Planned' }
          ]
        },
        {
          name: 'Infrastructure',
          tools: [
            { name: 'Vercel', description: 'Deployment and hosting platform', status: 'Planned' },
            { name: 'AWS/Azure/GCP', description: 'Cloud infrastructure', status: 'Planned' },
            { name: 'Docker', description: 'Containerization', status: 'Planned' },
            { name: 'CI/CD Pipelines', description: 'Automated deployment', status: 'Planned' }
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
          name: 'Customer Relationship Management',
          tools: [
            { name: 'HubSpot', description: 'CRM and marketing automation', status: 'Planned' },
            { name: 'Intercom', description: 'Customer messaging and support', status: 'Planned' },
            { name: 'Zendesk', description: 'Customer support platform', status: 'Planned' },
            { name: 'Freshdesk', description: 'Help desk software', status: 'Planned' }
          ]
        },
        {
          name: 'Marketing & Analytics',
          tools: [
            { name: 'Google Analytics 4', description: 'Website and app analytics', status: 'Planned' },
            { name: 'Google Tag Manager', description: 'Tag management system', status: 'Planned' },
            { name: 'Facebook Pixel', description: 'Social media tracking', status: 'Planned' },
            { name: 'LinkedIn Insight Tag', description: 'B2B marketing analytics', status: 'Planned' }
          ]
        },
        {
          name: 'Email Marketing',
          tools: [
            { name: 'Mailchimp', description: 'Email marketing automation', status: 'Planned' },
            { name: 'ConvertKit', description: 'Creator-focused email marketing', status: 'Planned' },
            { name: 'ActiveCampaign', description: 'Marketing automation', status: 'Planned' },
            { name: 'SendGrid', description: 'Transactional email service', status: 'Planned' }
          ]
        },
        {
          name: 'Social Media Management',
          tools: [
            { name: 'Buffer', description: 'Social media scheduling', status: 'Planned' },
            { name: 'Hootsuite', description: 'Social media management', status: 'Planned' },
            { name: 'Later', description: 'Visual social media planning', status: 'Planned' },
            { name: 'Canva', description: 'Graphic design for social media', status: 'Planned' }
          ]
        }
      ]
    },
    {
      function: 'Finance & Operations',
      color: 'red',
      description: 'Sustainable growth and operational excellence',
      categories: [
        {
          name: 'Financial Management',
          tools: [
            { name: 'QuickBooks', description: 'Accounting and bookkeeping', status: 'Planned' },
            { name: 'Stripe', description: 'Payment processing', status: 'Planned' },
            { name: 'Razorpay', description: 'Indian payment gateway', status: 'Planned' },
            { name: 'Paddle', description: 'SaaS payment processing', status: 'Planned' }
          ]
        },
        {
          name: 'Legal & Compliance',
          tools: [
            { name: 'LegalZoom', description: 'Legal document creation', status: 'Planned' },
            { name: 'Rocket Lawyer', description: 'Legal services platform', status: 'Planned' },
            { name: 'Compliance Tools', description: 'Regulatory compliance management', status: 'Planned' },
            { name: 'Contract Management', description: 'Digital contract lifecycle', status: 'Planned' }
          ]
        },
        {
          name: 'HR & Recruitment',
          tools: [
            { name: 'BambooHR', description: 'HR management system', status: 'Planned' },
            { name: 'Workday', description: 'Enterprise HR platform', status: 'Planned' },
            { name: 'Greenhouse', description: 'Applicant tracking system', status: 'Planned' },
            { name: 'Lever', description: 'Recruitment software', status: 'Planned' }
          ]
        },
        {
          name: 'Operations & Productivity',
          tools: [
            { name: 'Zapier', description: 'Workflow automation', status: 'Planned' },
            { name: 'Airtable', description: 'Database and project management', status: 'Planned' },
            { name: 'Google Workspace', description: 'Productivity suite', status: 'Planned' },
            { name: 'Microsoft 365', description: 'Enterprise productivity tools', status: 'Planned' }
          ]
        }
      ]
    }
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

  return (
    <>
      <Head>
        <title>Tech Stack | Vision Infinity Ventures - Technology Architecture</title>
        <meta name="description" content="Explore our comprehensive technology stack organized by function. From frontend development to AI integration, discover the tools powering Bangalore's first venture studio platform." />
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
            Technology Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Technology
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Stack by Function
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Discover the comprehensive technology stack powering Bangalore&apos;s first venture studio platform. 
            Organized by our 5 core functions to ensure rapid product-market fit and scalable growth.
          </p>
          
          {/* Tech Stack Overview */}
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-400 mb-2">5</div>
              <div className="text-sm text-gray-300">Core Functions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-sm text-gray-300">Tool Categories</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-purple-400 mb-2">80+</div>
              <div className="text-sm text-gray-300">Technology Tools</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-indigo-400 mb-2">4</div>
              <div className="text-sm text-gray-300">Current Tools</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-red-400 mb-2">76+</div>
              <div className="text-sm text-gray-300">Planned Tools</div>
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
              Technology Stack by Function
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology architecture is organized around our 5 core functions, 
              ensuring each team has the right tools to deliver exceptional results.
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology stack implementation follows a phased approach to ensure 
              rapid deployment and continuous improvement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Foundation</h3>
              <p className="text-sm text-gray-600">Core platform with Next.js, Prisma, and authentication</p>
              <div className="mt-4 text-xs text-green-600 font-medium">✅ Complete</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Growth Tools</h3>
              <p className="text-sm text-gray-600">CRM, analytics, and marketing automation</p>
              <div className="mt-4 text-xs text-blue-600 font-medium">🔄 In Progress</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: AI Integration</h3>
              <p className="text-sm text-gray-600">AI/ML models and intelligent automation</p>
              <div className="mt-4 text-xs text-purple-600 font-medium">📅 Planned</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 4: Scale</h3>
              <p className="text-sm text-gray-600">Enterprise features and advanced analytics</p>
              <div className="mt-4 text-xs text-indigo-600 font-medium">📅 Future</div>
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
            Join our team and work with cutting-edge technologies to build 
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