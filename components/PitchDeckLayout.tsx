import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface PitchDeckLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  slug: string;
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function PitchDeckLayout({ title, subtitle, children, slug, headings }: PitchDeckLayoutProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string>('');

  // Convert children to array for easier manipulation
  const slidesArray = React.Children.toArray(children);

  const nextSlide = () => {
    if (activeSlide < slidesArray.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const generateBreadcrumbs = (slug: string) => {
    const parts = slug.split('-');
    const breadcrumbs = [];
    let currentPath = '';
    
    for (let i = 0; i < parts.length; i++) {
      currentPath += (i > 0 ? '-' : '') + parts[i];
      breadcrumbs.push({
        name: parts[i].replace(/\b\w/g, l => l.toUpperCase()),
        path: currentPath
      });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/content" className="text-gray-500 hover:text-gray-700 transition-colors">
                Content Library
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900 font-medium">{crumb.name}</span>
                </React.Fragment>
              ))}
            </div>
            
            {/* Slide Navigation Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  disabled={activeSlide === 0}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-medium text-gray-700">
                  {activeSlide + 1} / {slidesArray.length}
                </span>
                <button
                  onClick={nextSlide}
                  disabled={activeSlide === slidesArray.length - 1}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Slide Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Presentation Slides
                </h2>
                <nav className="space-y-2">
                  {headings.map((heading, index) => (
                    <button
                      key={heading.id}
                      onClick={() => goToSlide(index)}
                      className={`w-full text-left block text-sm transition-all duration-200 rounded-lg px-3 py-2 ${
                        activeSlide === index
                          ? 'text-indigo-600 font-semibold bg-indigo-50 border-l-4 border-indigo-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{ paddingLeft: `${(heading.level - 1) * 12 + 12}px` }}
                    >
                      <div className="flex items-center">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mr-2 ${
                          activeSlide === index ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {index + 1}
                        </span>
                        {heading.text}
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content - Pitch Deck Style */}
          <div className="lg:col-span-3">
            {/* Title Slide */}
            <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden mb-8">
              <div className="px-12 py-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
                      {subtitle}
                    </p>
                  )}
                  <div className="flex items-center justify-center space-x-4 text-indigo-200">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Vision Infinity Ventures</span>
                    </div>
                    <div className="w-1 h-1 bg-indigo-300 rounded-full"></div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Interactive Presentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Slides - Only show active slide */}
            <div className="relative">
              {slidesArray.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    activeSlide === index
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-full absolute top-0 left-0 w-full'
                  }`}
                >
                  {slide}
                </div>
              ))}
            </div>

            {/* Footer Navigation */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/content"
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Content Library
              </Link>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveSlide(0)}
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Back to Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide Component for individual content sections
export function Slide({ 
  title, 
  children, 
  className = "", 
  background = "white",
  id 
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient";
  id?: string;
}) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-indigo-50 to-blue-50"
  };

  return (
    <div 
      id={id}
      className={`${bgClasses[background]} rounded-3xl shadow-xl border border-gray-200 overflow-hidden ${className}`}
    >
      <div className="px-12 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="prose prose-lg max-w-none
          prose-headings:scroll-mt-24 
          prose-h1:text-2xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mb-4 prose-h1:mt-6
          prose-h2:text-xl prose-h2:font-semibold prose-h2:text-gray-800 prose-h2:mb-3 prose-h2:mt-5 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
          prose-h3:text-lg prose-h3:font-semibold prose-h3:text-gray-800 prose-h3:mb-2 prose-h3:mt-4
          prose-h4:text-base prose-h4:font-medium prose-h4:text-gray-700 prose-h4:mb-2 prose-h4:mt-3
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-em:text-gray-700 prose-em:italic
          prose-blockquote:border-l-4 prose-blockquote:border-indigo-300 prose-blockquote:bg-indigo-50 prose-blockquote:pl-4 prose-blockquote:py-3 prose-blockquote:rounded-r-lg prose-blockquote:my-6
          prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
          prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
          prose-li:text-gray-700 prose-li:mb-1
          prose-table:border-collapse prose-table:w-full prose-table:my-6 prose-table:rounded-lg prose-table:overflow-hidden
          prose-th:bg-gray-50 prose-th:border prose-th:border-gray-200 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
          prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700
          prose-hr:border-gray-300 prose-hr:my-8"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Feature Grid Component for highlighting key points
export function FeatureGrid({ 
  features, 
  columns = 3 
}: {
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    color?: string;
  }>;
  columns?: 2 | 3;
}) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-8 mt-8`}>
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200">
          <div className={`w-16 h-16 ${feature.color || 'bg-indigo-500'} rounded-2xl flex items-center justify-center mb-6`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

// Stats Component for highlighting numbers
export function Stats({ 
  stats 
}: {
  stats: Array<{
    number: string;
    label: string;
    color?: string;
  }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-4xl md:text-5xl font-bold ${stat.color || 'text-indigo-600'} mb-2`}>
            {stat.number}
          </div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
} 