import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { marked } from 'marked';
import React, { useState, useEffect } from 'react';

interface ContentPageProps {
  content: string;
  title: string;
  slug: string;
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function ContentPage({ content, title, slug, headings }: ContentPageProps) {
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHeading(element.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

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
  const pageTitle = `${title} | Vision Infinity Ventures`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={title} />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 py-4 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/stages" className="text-gray-500 hover:text-gray-700 transition-colors">
                Content
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900 font-medium">{crumb.name}</span>
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                  <nav className="space-y-1">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-all duration-200 rounded-md px-2 py-1 ${
                          activeHeading === heading.id
                            ? 'text-indigo-600 font-medium bg-indigo-50 border-l-2 border-indigo-600'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        style={{ paddingLeft: `${(heading.level - 1) * 16 + 8}px` }}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 px-8 py-8">
                  <h1 className="text-4xl font-bold text-white mb-3 leading-tight">{title}</h1>
                  <p className="text-indigo-100 text-lg">Vision Infinity Ventures Content Library</p>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div 
                    className="prose prose-xl max-w-none
                      prose-headings:scroll-mt-24 
                      prose-h1:text-4xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mb-8 prose-h1:mt-12
                      prose-h2:text-3xl prose-h2:font-semibold prose-h2:text-gray-800 prose-h2:mb-6 prose-h2:mt-10 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
                      prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-gray-800 prose-h3:mb-4 prose-h3:mt-8
                      prose-h4:text-xl prose-h4:font-medium prose-h4:text-gray-700 prose-h4:mb-3 prose-h4:mt-6
                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
                      prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                      prose-strong:text-gray-900 prose-strong:font-semibold
                      prose-em:text-gray-700 prose-em:italic
                      prose-blockquote:border-l-4 prose-blockquote:border-indigo-300 prose-blockquote:bg-indigo-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:my-8
                      prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
                      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:shadow-lg
                      prose-ul:list-disc prose-ul:pl-8 prose-ul:my-6
                      prose-ol:list-decimal prose-ol:pl-8 prose-ol:my-6
                      prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed
                      prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
                      prose-th:bg-gray-50 prose-th:border prose-th:border-gray-200 prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
                      prose-td:border prose-td:border-gray-200 prose-td:px-6 prose-td:py-4 prose-td:text-gray-700
                      prose-hr:border-gray-300 prose-hr:my-12
                      prose-img:rounded-lg prose-img:shadow-md prose-img:my-8"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </div>

              {/* Footer Navigation */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link 
                  href="/stages"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Content Library
                </Link>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    Back to Top
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  function getAllMarkdownFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getAllMarkdownFiles(filePath));
      } else if (file.endsWith('.md')) {
        results.push(filePath);
      }
    });
    return results;
  }
  
  const baseDir = path.join(process.cwd(), 'india');
  const files = getAllMarkdownFiles(baseDir);
  const paths = files.map((file) => {
    const slug = file
      .replace(baseDir + path.sep, '')
      .replace(/\.[^/.]+$/, '')
      .replace(/[\/]/g, '-');
    return { params: { slug } };
  });
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const baseDir = path.join(process.cwd(), 'india');

  // Find the actual file by matching the slug to the generated slugs
  function findFileBySlug(dir: string, targetSlug: string): string | null {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        const found = findFileBySlug(filePath, targetSlug);
        if (found) return found;
      } else if (file.endsWith('.md')) {
        const relPath = filePath.replace(baseDir + path.sep, '');
        const generatedSlug = relPath.replace(/\.[^/.]+$/, '').replace(/[\/]/g, '-');
        if (generatedSlug === targetSlug) {
          return filePath;
        }
      }
    }
    return null;
  }

  const filePath = findFileBySlug(baseDir, slug);

  if (!filePath || !fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  // Extract headings for table of contents
  const headings: Array<{ id: string; text: string; level: number }> = [];
  const lines = content.split('\n');

  lines.forEach((line) => {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      headings.push({ id, text, level });
    }
  });

  // Configure marked for better rendering
  marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
    mangle: false,
  });

  const html = marked(content);

  return {
    props: {
      content: html,
      title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      slug,
      headings,
    },
  };
}; 