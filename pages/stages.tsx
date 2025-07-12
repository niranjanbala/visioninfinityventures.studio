import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';

interface ContentItem {
  title: string;
  description: string;
  path: string;
  type: 'journey' | 'checklist' | 'funding' | 'guide';
  completed?: boolean;
}

interface StageContent {
  name: string;
  description: string;
  industries: {
    name: string;
    description: string;
    geographies: {
      name: string;
      description: string;
      content: ContentItem[];
    }[];
  }[];
}

interface PersonaContent {
  name: string;
  description: string;
  stages: StageContent[];
}

const StagesPage = () => {
  const [selectedPersona, setSelectedPersona] = useState<string>('diy-founder');
  const [selectedStage, setSelectedStage] = useState<string>('idea-stage');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('education');

  const contentData: PersonaContent[] = [
    {
      name: 'DIY Founder',
      description: 'Solo founders who want to do everything themselves, maximize learning, and minimize cash burn.',
      stages: [
        {
          name: 'Idea Stage',
          description: 'For founders validating their idea and preparing for MVP.',
          industries: [
            {
              name: 'Education',
              description: 'Educational products and services',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/education/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/education/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/education/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-idea-stage-education-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },

              ]
            },

          ]
        },
        {
          name: 'MVP Stage',
          description: 'For founders building and launching their MVP.',
          industries: [
            {
              name: 'Education',
              description: 'Educational products and services',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/education/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/education/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/education/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-mvp-stage-education-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },

              ]
            },

          ]
        }
      ]
    },
    {
      name: 'Fractional Support',
      description: 'For founders who want to leverage a fractional team for professional expertise while maintaining cost control.',
      stages: [
        {
          name: 'Idea Stage',
          description: 'For founders validating their idea and preparing for MVP.',
          industries: [
            {
              name: 'Education',
              description: 'Educational products and services',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/education/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/education/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/education/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-idea-stage-education-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },

              ]
            },

          ]
        },
        {
          name: 'MVP Stage',
          description: 'For founders building and launching their MVP.',
          industries: [
            {
              name: 'Education',
              description: 'Educational products and services',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/education/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/education/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/education/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-mvp-stage-education-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },

              ]
            },

          ]
        }
      ]
    }
  ];

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'journey':
        return '🗺️';
      case 'checklist':
        return '✅';
      case 'funding':
        return '💰';
      case 'guide':
        return '📚';
      default:
        return '📄';
    }
  };

  const getContentColor = (type: string) => {
    switch (type) {
      case 'journey':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'checklist':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'funding':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'guide':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const selectedPersonaData = contentData.find(p => p.name.toLowerCase().replace(' ', '-') === selectedPersona);
  const selectedStageData = selectedPersonaData?.stages.find(s => s.name.toLowerCase().replace(' ', '-') === selectedStage);
  const selectedIndustryData = selectedStageData?.industries.find(i => i.name.toLowerCase().replace(' ', '-') === selectedIndustry);

  return (
    <>
      <Head>
        <title>All Content by Stage | Vision Infinity Ventures</title>
        <meta name="description" content="Explore all startup content organized by stage, industry, and geography. Find your perfect path with comprehensive guides and resources." />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        {/* Header */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                All Content by Stage
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive library of startup resources organized by founder persona, stage, industry, and geography. 
                Find the perfect content for your startup journey.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Filters */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Persona Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Founder Type
                </label>
                <select
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {contentData.map((persona) => (
                    <option key={persona.name} value={persona.name.toLowerCase().replace(' ', '-')}>
                      {persona.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stage Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stage
                </label>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {selectedPersonaData?.stages.map((stage) => (
                    <option key={stage.name} value={stage.name.toLowerCase().replace(' ', '-')}>
                      {stage.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {selectedStageData?.industries.map((industry) => (
                    <option key={industry.name} value={industry.name.toLowerCase().replace(' ', '-')}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Summary */}
              <div className="flex items-end">
                <div className="w-full p-3 bg-indigo-50 rounded-lg">
                  <p className="text-sm text-indigo-800 font-medium">
                    {selectedPersonaData?.name} • {selectedStageData?.name} • {selectedIndustryData?.name}
                  </p>
                  <p className="text-xs text-indigo-600">
                    {selectedIndustryData?.geographies.length} locations available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Display */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedIndustryData ? (
              <div className="space-y-8">
                {selectedIndustryData.geographies.map((geography) => (
                  <div key={geography.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
                      <h2 className="text-xl font-bold text-white">{geography.name}</h2>
                      <p className="text-indigo-100">{geography.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {geography.content.map((item) => (
                          <div
                            key={item.title}
                            className={`p-4 rounded-lg border-2 ${getContentColor(item.type)} hover:shadow-md transition-all duration-200`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <span className="text-2xl">{getContentIcon(item.type)}</span>
                              {item.completed && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                  Complete
                                </span>
                              )}
                            </div>
                            <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                            <p className="text-xs opacity-75 mb-3">{item.description}</p>
                            <Link
                              href={item.path}
                              className="inline-flex items-center text-xs font-medium hover:underline"
                            >
                              View Content
                              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Content Available</h3>
                <p className="text-gray-600">Please select different filters to view available content.</p>
              </div>
            )}
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Content Library Summary</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">2</div>
                  <div className="text-sm text-gray-600">Founder Personas</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-sm text-gray-600">Stages</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Industries</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                  <div className="text-sm text-gray-600">Complete Guides</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StagesPage; 