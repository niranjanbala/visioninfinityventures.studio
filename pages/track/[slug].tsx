import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import PitchDeckLayout, { Slide, FeatureGrid, Stats } from '../../components/PitchDeckLayout';
import { marked } from 'marked';
import React from 'react';

interface TrackPageProps {
  title: string;
  slug: string;
  description: string;
  phases: Array<{
    id: string;
    title: string;
    description: string;
    link: string;
  }>;
}

export default function TrackPage({ title, slug, description, phases }: TrackPageProps) {
  const pageTitle = `${title} | Vision Infinity Ventures`;

  const createSlides = () => {
    const slides = [];
    
    // Introduction slide
    slides.push(
      <Slide 
        key="introduction" 
        title="Introduction" 
        id="introduction"
        background="white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Track Overview</h3>
            <p className="text-blue-800">
              This track consists of an introduction and 10 phases that will guide you through your entrepreneurial journey. 
              Click on any phase below to get started.
            </p>
          </div>
          <Link 
            href={`/track/${slug}/intro`}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Read Introduction
            <span className="ml-2">→</span>
          </Link>
        </div>
      </Slide>
    );

    // Phases overview slide
    slides.push(
      <Slide 
        key="phases-overview" 
        title="All Phases" 
        id="phases-overview"
        background="gray"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <Link 
                key={phase.id} 
                href={phase.link}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      Phase {index + 1}
                    </span>
                    <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                      →
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {phase.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Slide>
    );

    // Individual phase slides
    phases.forEach((phase, index) => {
      slides.push(
        <Slide 
          key={phase.id} 
          title={phase.title} 
          id={phase.id}
          background={index % 2 === 0 ? "white" : "gray"}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Phase {index + 1}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{phase.description}</p>
            <Link 
              href={phase.link}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Phase {index + 1}
              <span className="ml-2">→</span>
            </Link>
          </div>
        </Slide>
      );
    });
    
    return slides;
  };

  const headings = [
    { id: 'introduction', text: 'Introduction', level: 1 },
    { id: 'phases-overview', text: 'All Phases', level: 1 },
    ...phases.map((phase, index) => ({
      id: phase.id,
      text: phase.title,
      level: 1
    }))
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <PitchDeckLayout title={title} slug={slug} headings={headings}>
        {createSlides()}
      </PitchDeckLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contentDir = path.join(process.cwd(), 'content');
  
  // Find all track directories that have phase-files
  const tracks: string[] = [];
  
  if (fs.existsSync(contentDir)) {
    const items = fs.readdirSync(contentDir);
    for (const item of items) {
      const itemPath = path.join(contentDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const phaseFilesPath = path.join(itemPath, 'phase-files');
        if (fs.existsSync(phaseFilesPath) && fs.statSync(phaseFilesPath).isDirectory()) {
          tracks.push(item);
        }
      }
    }
  }
  
  const paths = tracks.map((track) => ({
    params: { slug: track }
  }));
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const contentDir = path.join(process.cwd(), 'content');
  const trackDir = path.join(contentDir, slug);
  const phaseFilesDir = path.join(trackDir, 'phase-files');

  if (!fs.existsSync(phaseFilesDir)) {
    return { notFound: true };
  }

  // Load intro.md for track description
  const introPath = path.join(phaseFilesDir, 'intro.md');
  let description = '';
  let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  if (fs.existsSync(introPath)) {
    const introContent = fs.readFileSync(introPath, 'utf-8');
    const { data, content } = matter(introContent);
    
    if (data.title) {
      title = data.title;
    }
    
    // Extract first paragraph as description
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        description = trimmed;
        break;
      }
    }
  }

  // Generate phases array
  const phases = [];
  for (let i = 1; i <= 10; i++) {
    const phasePath = path.join(phaseFilesDir, `phase-${i}.md`);
    if (fs.existsSync(phasePath)) {
      const phaseContent = fs.readFileSync(phasePath, 'utf-8');
      const { data, content } = matter(phaseContent);
      
      // Extract title from first heading or use default
      let phaseTitle = `Phase ${i}`;
      const lines = content.split('\n');
      for (const line of lines) {
        const headingMatch = line.match(/^#{1,6}\s+(.+)$/);
        if (headingMatch) {
          phaseTitle = headingMatch[1].trim();
          break;
        }
      }
      
      // Extract description from first paragraph
      let phaseDescription = `Complete Phase ${i} of your journey`;
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          phaseDescription = trimmed;
          break;
        }
      }
      
      phases.push({
        id: `phase-${i}`,
        title: phaseTitle,
        description: phaseDescription,
        link: `/track/${slug}/phase-${i}`
      });
    }
  }

  return {
    props: {
      title,
      slug,
      description: description || `Complete guide for ${title}`,
      phases,
    },
  };
}; 