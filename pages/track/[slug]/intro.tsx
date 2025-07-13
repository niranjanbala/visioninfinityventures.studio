import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import PitchDeckLayout, { Slide } from '../../../components/PitchDeckLayout';
import { marked } from 'marked';
import React from 'react';

interface IntroPageProps {
  title: string;
  slug: string;
  content: string;
  trackTitle: string;
}

export default function IntroPage({ title, slug, content, trackTitle }: IntroPageProps) {
  const pageTitle = `${title} | ${trackTitle} | Vision Infinity Ventures`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={title} />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <PitchDeckLayout 
        title={title} 
        slug={`${slug}/intro`} 
        headings={[{ id: 'intro-content', text: title, level: 1 }]}
      >
        <Slide 
          key="intro-content" 
          title={title} 
          id="intro-content"
          background="white"
        >
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </Slide>
      </PitchDeckLayout>
      
      {/* Intro Navigation Footer */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href={`/track/${slug}`}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Track Overview
            </Link>
            
            <Link 
              href={`/track/${slug}/phase-1`}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Start Phase 1
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contentDir = path.join(process.cwd(), 'content');
  const paths: Array<{ params: { slug: string } }> = [];
  
  if (fs.existsSync(contentDir)) {
    const items = fs.readdirSync(contentDir);
    for (const item of items) {
      const itemPath = path.join(contentDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const phaseFilesPath = path.join(itemPath, 'phase-files');
        if (fs.existsSync(phaseFilesPath) && fs.statSync(phaseFilesPath).isDirectory()) {
          const introPath = path.join(phaseFilesPath, 'intro.md');
          if (fs.existsSync(introPath)) {
            paths.push({
              params: { slug: item }
            });
          }
        }
      }
    }
  }
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const contentDir = path.join(process.cwd(), 'content');
  const trackDir = path.join(contentDir, slug);
  const phaseFilesDir = path.join(trackDir, 'phase-files');
  const introPath = path.join(phaseFilesDir, 'intro.md');

  if (!fs.existsSync(introPath)) {
    return { notFound: true };
  }

  // Load the intro file
  const introContent = fs.readFileSync(introPath, 'utf-8');
  const { data, content } = matter(introContent);
  
  // Extract title from first heading or use default
  let title = 'Introduction';
  const lines = content.split('\n');
  for (const line of lines) {
    const headingMatch = line.match(/^#{1,6}\s+(.+)$/);
    if (headingMatch) {
      title = headingMatch[1].trim();
      break;
    }
  }

  // Get track title from frontmatter or slug
  let trackTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  if (data.title) {
    trackTitle = data.title;
  }

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
      title,
      slug,
      content: html,
      trackTitle,
    },
  };
}; 