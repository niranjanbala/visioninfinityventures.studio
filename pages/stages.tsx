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
  const [selectedDeliveryMedium, setSelectedDeliveryMedium] = useState<string>('offline');

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
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/education/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/education/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/education/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-idea-stage-education-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            },
            {
              name: 'Others',
              description: 'Other industries and sectors',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/others/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/others/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/others/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-idea-stage-others-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/others/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/others/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/idea-stage/industry/others/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-idea-stage-others-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            }
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
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/education/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/education/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/education/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-mvp-stage-education-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            },
            {
              name: 'Others',
              description: 'Other industries and sectors',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/others/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/others/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/others/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-mvp-stage-others-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/others/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/others/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/diy-founder/stage/mvp-stage/industry/others/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/diy-founder-mvp-stage-others-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            }
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
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/education/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/education/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/education/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-idea-stage-education-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            },
            {
              name: 'Others',
              description: 'Other industries and sectors',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/others/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/others/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/others/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-idea-stage-others-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/others/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/others/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/idea-stage/industry/others/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-idea-stage-others-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            }
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
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/education/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/education/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/education/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-mvp-stage-education-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            },
            {
              name: 'Others',
              description: 'Other industries and sectors',
              geographies: [
                {
                  name: 'HSR Layout, Bangalore',
                  description: 'Hyperlocal focus on HSR Layout',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/others/geography/hsr-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/others/geography/hsr-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/others/geography/hsr-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-mvp-stage-others-hsr-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                },
                {
                  name: 'Other parts of Bangalore',
                  description: 'Focus on other parts of Bangalore',
                  content: [
                    {
                      title: '12-Phase Journey',
                      description: 'Complete roadmap for your startup journey',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/others/geography/bangalore-only/12-phase-journey.md',
                      type: 'journey',
                      completed: true
                    },
                    {
                      title: 'AI People & Tools Checklist',
                      description: 'Comprehensive AI-focused requirements',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/others/geography/bangalore-only/ai-people-tools-checklist.md',
                      type: 'checklist',
                      completed: true
                    },
                    {
                      title: 'Funding Checklist',
                      description: 'Complete financial planning guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/fractional-support/stage/mvp-stage/industry/others/geography/bangalore-only/funding-checklist.md',
                      type: 'funding',
                      completed: true
                    },
                    {
                      title: 'Complete Guide',
                      description: 'All-in-one comprehensive guide',
                      path: '/india/karnataka/bangalore/hsr/founder-persona/documents/fractional-support-mvp-stage-others-bangalore-only-complete-guide.md',
                      type: 'guide',
                      completed: true
                    }
                  ]
                }
              ]
            }
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
        return 'bg-blue-500/20 border-blue-400/30 text-blue-400';
      case 'checklist':
        return 'bg-green-500/20 border-green-400/30 text-green-400';
      case 'funding':
        return 'bg-yellow-500/20 border-yellow-400/30 text-yellow-400';
      case 'guide':
        return 'bg-purple-500/20 border-purple-400/30 text-purple-400';
      default:
        return 'bg-gray-500/20 border-gray-400/30 text-gray-400';
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
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        {/* Header */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Democratizing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Startup Knowledge
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Explore our comprehensive library of startup resources organized by founder persona, stage, industry, and geography. 
                Every piece of content is designed to eliminate barriers and democratize access to startup success.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Filters */}
        <section className="py-8 bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-4">
              {/* Persona Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Founder Type
                </label>
                <select
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
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
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Stage
                </label>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
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
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
                >
                  {selectedStageData?.industries.map((industry) => (
                    <option key={industry.name} value={industry.name.toLowerCase().replace(' ', '-')}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Medium Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Delivery Medium
                </label>
                <select
                  value={selectedDeliveryMedium}
                  onChange={(e) => setSelectedDeliveryMedium(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
                >
                  <option value="offline">Offline (In-person)</option>
                  <option value="online">Online (Virtual)</option>
                </select>
              </div>

              {/* Summary */}
              <div className="flex items-end">
                <div className="w-full p-3 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-400/30">
                  <p className="text-sm text-green-400 font-medium">
                    {selectedPersonaData?.name} • {selectedStageData?.name} • {selectedIndustryData?.name} • {selectedDeliveryMedium === 'offline' ? 'Offline' : 'Online'}
                  </p>
                  <p className="text-xs text-green-300">
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
                  <div key={geography.name} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/20">
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 px-6 py-4 border-b border-white/20">
                      <h2 className="text-xl font-bold text-white">{geography.name}</h2>
                      <p className="text-gray-300">{geography.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {geography.content.map((item) => (
                          <div
                            key={item.title}
                            className={`p-4 rounded-lg border-2 ${getContentColor(item.type)} hover:shadow-lg transition-all duration-200 backdrop-blur-sm`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <span className="text-2xl">{getContentIcon(item.type)}</span>
                              {item.completed && (
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-400/30">
                                  Complete
                                </span>
                              )}
                            </div>
                            <h3 className="font-semibold text-sm mb-2 text-white">{item.title}</h3>
                            <p className="text-xs opacity-75 mb-3 text-gray-300">{item.description}</p>
                            <Link
                              href={
                                '/content/' + item.path
                                  .replace('india/', '')
                                  .replace(/\.md$/, '')
                                  .replace(/[\/]/g, '-')
                              }
                              className="inline-flex items-center text-xs font-medium hover:underline text-green-400"
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
                <h3 className="text-xl font-semibold text-white mb-2">No Content Available</h3>
                <p className="text-gray-300">Please select different filters to view available content.</p>
              </div>
            )}
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-8">Content Library Summary</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">2</div>
                  <div className="text-sm text-gray-300">Founder Personas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                  <div className="text-sm text-gray-300">Stages</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                  <div className="text-sm text-gray-300">Industries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">16</div>
                  <div className="text-sm text-gray-300">Complete Guides</div>
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