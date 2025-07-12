import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { marked } from 'marked';
import React from 'react';

interface ContentPageProps {
  content: string;
  title: string;
  slug: string;
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function ContentPage({ content, title, slug, headings }: ContentPageProps) {
  const [activeHeading, setActiveHeading] = React.useState<string>('');

  React.useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i] as HTMLElement;
        if (element.offsetTop <= scrollPosition) {
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
        name: parts[i].charAt(0).toUpperCase() + parts[i].slice(1).replace(/-/g, ' '),
        path: currentPath
      });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(slug);

  return (
    <>
      <Head>
        <title>{title} | Vision Infinity Ventures</title>
        <meta name="description" content={title} />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 py-4 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/stages" className="text-gray-500 hover:text-gray-700">
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
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors ${
                          activeHeading === heading.id
                            ? 'text-indigo-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-6">
                  <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
                  <p className="text-indigo-100">Vision Infinity Ventures Content Library</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div 
                    className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-h1:text-3xl prose-h1:font-bold prose-h1:text-gray-900 prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-gray-800 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-800 prose-h4:text-lg prose-h4:font-medium prose-h4:text-gray-700 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-em:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-indigo-200 prose-blockquote:bg-indigo-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:text-gray-600 prose-table:border-collapse prose-table:w-full prose-th:bg-gray-50 prose-th:border prose-th:border-gray-200 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2 prose-td:text-gray-600 prose-hr:border-gray-200"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </div>

              {/* Footer Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <Link 
                  href="/stages"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Content Library
                </Link>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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