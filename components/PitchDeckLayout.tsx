import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface PitchDeckLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  slug: string;
  headings: Array<{ id: string; text: string; level: number }>;
  initialSlide?: string;
}

export default function PitchDeckLayout({ title, subtitle, children, slug, headings, initialSlide }: PitchDeckLayoutProps) {
  // Convert children to array for easier manipulation
  const slidesArray = React.Children.toArray(children);

  // Determine initial slide index
  const getInitialSlideIndex = () => {
    if (initialSlide) {
      // Find the slide with matching id
      const slideIndex = slidesArray.findIndex((slide: any) => 
        slide.props.id === initialSlide
      );
      if (slideIndex !== -1) {
        return slideIndex;
      }
      
      // If not found by id, try to find by heading text
      const headingIndex = headings.findIndex(h => 
        h.id === initialSlide || h.text.toLowerCase().includes(initialSlide.toLowerCase())
      );
      if (headingIndex !== -1) {
        return headingIndex;
      }
    }
    return 0;
  };

  const [activeSlide, setActiveSlide] = useState(getInitialSlideIndex());
  const [activeHeading, setActiveHeading] = useState<string>('');

  // Update active heading when slide changes
  useEffect(() => {
    if (headings[activeSlide]) {
      setActiveHeading(headings[activeSlide].id);
    }
  }, [activeSlide, headings]);

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
    <div className="min-h-screen bg-gradient-to-br from-viv-gray-50 via-white to-viv-gray-50">
      {/* Enhanced Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-viv-gray-200 sticky top-0 z-50 shadow-viv-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="nav-link flex items-center">
                <svg className="w-5 h-5 mr-2 text-viv-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <span className="text-viv-gray-400">/</span>
              <Link href="/content" className="nav-link">
                Content Library
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span className="text-viv-gray-400">/</span>
                  <span className="text-viv-gray-900 font-medium">{crumb.name}</span>
                </React.Fragment>
              ))}
            </div>
            {/* Enhanced Slide Navigation Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-white rounded-xl p-2 shadow-viv border border-viv-gray-200">
                <button
                  onClick={prevSlide}
                  disabled={activeSlide === 0}
                  className="p-2 rounded-lg bg-viv-gray-100 hover:bg-viv-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-semibold text-viv-gray-700 px-3 py-1 bg-viv-primary-lighter rounded-lg">
                  {activeSlide + 1} / {slidesArray.length}
                </span>
                <button
                  onClick={nextSlide}
                  disabled={activeSlide === slidesArray.length - 1}
                  className="p-2 rounded-lg bg-viv-gray-100 hover:bg-viv-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content - Full Width Slides */}
        <div>
          {/* Enhanced Title Slide */}
          <div className="bg-gradient-viv-hero rounded-3xl shadow-viv-2xl overflow-hidden mb-12 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="px-12 py-20 text-center relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="animate-fade-in">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight text-shadow-lg">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
                      {subtitle}
                    </p>
                  )}
                  <div className="flex items-center justify-center space-x-8 text-white/80">
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Vision Infinity Ventures</span>
                    </div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="font-medium">Interactive Presentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Slides - Only show active slide */}
          <div className="relative w-full">
            {slidesArray.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out w-full ${
                  activeSlide === index
                    ? 'opacity-100 transform translate-x-0 animate-fade-in'
                    : 'opacity-0 transform translate-x-full absolute top-0 left-0 w-full'
                }`}
              >
                {slide}
              </div>
            ))}
          </div>

          {/* Enhanced Footer Navigation */}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link 
              href="/content"
              className="btn-secondary group"
            >
              <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Content Library
            </Link>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveSlide(0)}
                className="btn-gradient group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Back to Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Slide Component for individual content sections
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
  background?: "white" | "gray" | "gradient" | "glass";
  id?: string;
}) {
  const bgClasses = {
    white: "bg-white shadow-viv-lg border border-viv-gray-200",
    gray: "bg-viv-gray-50 shadow-viv-lg border border-viv-gray-200",
    gradient: "bg-gradient-viv-card shadow-viv-xl border border-viv-gray-200",
    glass: "bg-white/80 backdrop-blur-md shadow-viv-xl border border-white/20"
  };

  return (
    <div 
      id={id}
      className={`${bgClasses[background]} rounded-3xl overflow-hidden ${className} animate-scale-in`}
    >
      <div className="px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-primary mb-6 leading-tight">
            {title}
          </h2>
          <div className="w-32 h-1 bg-gradient-viv mx-auto rounded-full shadow-viv-sm"></div>
        </div>
        <div className="prose prose-lg max-w-none
          prose-headings:scroll-mt-24 
          prose-h1:text-3xl prose-h1:font-bold prose-h1:text-viv-gray-900 prose-h1:mb-6 prose-h1:mt-8
          prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-viv-gray-800 prose-h2:mb-4 prose-h2:mt-6 prose-h2:border-b prose-h2:border-viv-gray-200 prose-h2:pb-3
          prose-h3:text-xl prose-h3:font-semibold prose-h3:text-viv-gray-800 prose-h3:mb-3 prose-h3:mt-5
          prose-h4:text-lg prose-h4:font-medium prose-h4:text-viv-gray-700 prose-h4:mb-3 prose-h4:mt-4
          prose-p:text-viv-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:text-viv-gray-700 prose-ul:leading-relaxed
          prose-ol:text-viv-gray-700 prose-ol:leading-relaxed
          prose-li:text-viv-gray-700 prose-li:leading-relaxed
          prose-strong:text-viv-gray-900 prose-strong:font-semibold
          prose-code:text-viv-primary prose-code:bg-viv-primary-lighter prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-viv-gray-900 prose-pre:text-viv-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:shadow-viv-lg
          prose-blockquote:border-l-4 prose-blockquote:border-viv-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-viv-gray-700
          prose-a:text-viv-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-table:border-collapse prose-table:w-full
          prose-th:bg-viv-gray-100 prose-th:text-viv-gray-900 prose-th:font-semibold prose-th:p-3 prose-th:border prose-th:border-viv-gray-300
          prose-td:p-3 prose-td:border prose-td:border-viv-gray-300 prose-td:text-viv-gray-700"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Enhanced Feature Grid Component
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
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
      {features.map((feature, index) => (
        <div 
          key={index}
          className="card-hover bg-white rounded-2xl p-8 border border-viv-gray-200 shadow-viv-md hover:shadow-viv-xl transition-all duration-300 animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-viv rounded-2xl mb-6 mx-auto">
            <div className="text-white text-2xl">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-viv-gray-900 mb-4 text-center">
            {feature.title}
          </h3>
          <p className="text-viv-gray-600 leading-relaxed text-center">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

// Enhanced Stats Component
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center animate-bounce-in"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">
            {stat.number}
          </div>
          <div className="text-viv-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
} 