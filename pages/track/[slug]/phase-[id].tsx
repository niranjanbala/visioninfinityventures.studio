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

interface PhasePageProps {
  title: string;
  slug: string;
  phaseId: string;
  content: string;
  trackTitle: string;
}

export default function PhasePage({ title, slug, phaseId, content, trackTitle }: PhasePageProps) {
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
        slug={`${slug}/phase-${phaseId}`} 
        headings={[{ id: 'phase-content', text: title, level: 1 }]}
      >
        <Slide 
          key="phase-content" 
          title={title} 
          id="phase-content"
          background="white"
        >
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </Slide>
      </PitchDeckLayout>
      
      {/* Phase Navigation Footer */}
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
            
            <div className="flex items-center space-x-4">
              {parseInt(phaseId) > 1 && (
                <Link 
                  href={`/track/${slug}/phase-${parseInt(phaseId) - 1}`}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous Phase
                </Link>
              )}
              
              {parseInt(phaseId) < 10 && (
                <Link 
                  href={`/track/${slug}/phase-${parseInt(phaseId) + 1}`}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Next Phase
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contentDir = path.join(process.cwd(), 'content');
  const paths: Array<{ params: { slug: string; id: string } }> = [];
  
  if (fs.existsSync(contentDir)) {
    const items = fs.readdirSync(contentDir);
    for (const item of items) {
      const itemPath = path.join(contentDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const phaseFilesPath = path.join(itemPath, 'phase-files');
        if (fs.existsSync(phaseFilesPath) && fs.statSync(phaseFilesPath).isDirectory()) {
          // Generate paths for phases 1-10
          for (let i = 1; i <= 10; i++) {
            const phasePath = path.join(phaseFilesPath, `phase-${i}.md`);
            if (fs.existsSync(phasePath)) {
              paths.push({
                params: { 
                  slug: item,
                  id: i.toString()
                }
              });
            }
          }
        }
      }
    }
  }
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const phaseId = params?.id as string;
  const contentDir = path.join(process.cwd(), 'content');
  const trackDir = path.join(contentDir, slug);
  const phaseFilesDir = path.join(trackDir, 'phase-files');
  const phasePath = path.join(phaseFilesDir, `phase-${phaseId}.md`);

  if (!fs.existsSync(phasePath)) {
    return { notFound: true };
  }

  // Load the specific phase file
  const phaseContent = fs.readFileSync(phasePath, 'utf-8');
  const { data, content } = matter(phaseContent);
  
  // Extract title from first heading or use default
  let title = `Phase ${phaseId}`;
  const lines = content.split('\n');
  for (const line of lines) {
    const headingMatch = line.match(/^#{1,6}\s+(.+)$/);
    if (headingMatch) {
      title = headingMatch[1].trim();
      break;
    }
  }

  // Get track title from intro.md
  let trackTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const introPath = path.join(phaseFilesDir, 'intro.md');
  if (fs.existsSync(introPath)) {
    const introContent = fs.readFileSync(introPath, 'utf-8');
    const { data: introData } = matter(introContent);
    if (introData.title) {
      trackTitle = introData.title;
    }
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
      phaseId,
      content: html,
      trackTitle,
    },
  };
}; 