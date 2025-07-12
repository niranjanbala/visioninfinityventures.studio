import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import fs from 'fs';
import path from 'path';

interface ContentPage {
  title: string;
  slug: string;
  description: string;
  category: string;
}

interface ContentIndexProps {
  newContent: ContentPage[];
  originalContent: ContentPage[];
}

export default function ContentIndex({ newContent, originalContent }: ContentIndexProps) {
  return (
    <>
      <Head>
        <title>Content Library | Vision Infinity Ventures</title>
        <meta name="description" content="Complete resource library for startup founders" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Content Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources for startup founders in Bangalore. Choose from our consolidated guides or explore detailed content by category.
            </p>
          </div>

          {/* New Consolidated Content */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🚀 Consolidated Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newContent.map((page) => (
                <Link 
                  key={page.slug} 
                  href={`/content/${page.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-200 hover:border-blue-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl">
                          {page.category === 'track' && '🛤️'}
                          {page.category === 'industry' && '🏭'}
                          {page.category === 'location' && '📍'}
                          {page.category === 'resources' && '🛠️'}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {page.title}
                        </h3>
                        <span className="text-sm text-gray-500 capitalize">
                          {page.category} guide
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                      Read Guide
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Original Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📚 Detailed Content Library
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-600 mb-6 text-center">
                Explore our comprehensive collection of detailed guides, templates, and resources organized by founder persona, stage, industry, and location.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {originalContent.slice(0, 12).map((page) => (
                  <Link 
                    key={page.slug} 
                    href={`/content/${page.slug}`}
                    className="group block"
                  >
                    <div className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                        {page.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {page.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              {originalContent.length > 12 && (
                <div className="text-center mt-6">
                  <p className="text-gray-500 text-sm">
                    And {originalContent.length - 12} more detailed guides...
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Start Section */}
          <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Choose your path and begin building your startup today
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/content/diy-founder-track"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start with DIY Guide
                </Link>
                <Link 
                  href="/content/resources"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Download Templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // New consolidated content
  const newContent: ContentPage[] = [
    {
      title: "DIY Founder Track",
      slug: "diy-founder-track",
      description: "Complete guide for entrepreneurs building independently with minimal external support.",
      category: "track"
    },
    {
      title: "Fractional Support Track",
      slug: "fractional-support-track",
      description: "Guide for accessing senior-level expertise on a part-time basis.",
      category: "track"
    },
    {
      title: "Education Industry Guide",
      slug: "education-industry-guide",
      description: "Comprehensive strategies for EdTech startups and educational services.",
      category: "industry"
    },
    {
      title: "SaaS B2B Guide",
      slug: "saas-b2b-guide",
      description: "Complete guide for Software-as-a-Service companies targeting businesses.",
      category: "industry"
    },
    {
      title: "HSR Layout Guide",
      slug: "hsr-layout-guide",
      description: "Everything you need to know about setting up in HSR Layout startup hub.",
      category: "location"
    },
    {
      title: "Whitefield Guide",
      slug: "whitefield-guide",
      description: "Complete resource for establishing in Bangalore's premier IT corridor.",
      category: "location"
    },
    {
      title: "Resources & Templates",
      slug: "resources",
      description: "Complete collection of templates, tools, and practical resources.",
      category: "resources"
    }
  ];

  // Original content from india directory
  const originalContent: ContentPage[] = [];
  const indiaDir = path.join(process.cwd(), 'india');
  
  function scanDirectory(dir: string, basePath: string = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      const relativePath = path.join(basePath, item);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, relativePath);
      } else if (item.endsWith('.md')) {
        const slug = relativePath
          .replace(/\.[^/.]+$/, '')
          .replace(/[\/]/g, '-');
        
        // Read the file to get title and description
        try {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const lines = content.split('\n');
          let title = item.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          let description = 'Detailed guide and resources';
          
          // Try to extract title from frontmatter or first heading
          for (const line of lines) {
            if (line.startsWith('title:')) {
              title = line.replace('title:', '').trim().replace(/"/g, '');
              break;
            } else if (line.startsWith('# ')) {
              title = line.replace('# ', '').trim();
              break;
            }
          }
          
          originalContent.push({
            title,
            slug,
            description,
            category: 'detailed'
          });
        } catch (error) {
          console.error(`Error reading ${fullPath}:`, error);
        }
      }
    });
  }
  
  scanDirectory(indiaDir);

  return {
    props: {
      newContent,
      originalContent: originalContent.slice(0, 20) // Limit to first 20 for performance
    }
  };
}; 