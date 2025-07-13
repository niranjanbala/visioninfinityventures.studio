import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import PitchDeckLayout, { Slide, FeatureGrid, Stats } from '../../components/PitchDeckLayout';
import { marked } from 'marked';
import React, { useState, useEffect } from 'react';

interface ContentPageProps {
  content: string;
  title: string;
  slug: string;
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function ContentPage({ content, title, slug, headings }: ContentPageProps) {
  const pageTitle = `${title} | Vision Infinity Ventures`;

  // Check if there's an introduction section
  const firstHeadingStart = content.search(/<h[1-6][^>]*>/);
  const hasIntroduction = firstHeadingStart > 0 && content.substring(0, firstHeadingStart).trim();
  
  // Create enhanced headings array with introduction if needed
  const enhancedHeadings = hasIntroduction 
    ? [{ id: 'introduction', text: 'Introduction', level: 1 }, ...headings]
    : headings;

  // Create slides from headings
  const createSlides = () => {
    const slides = [];
    
    // Add introduction slide if there's content before the first heading
    const firstHeadingStart = content.search(/<h[1-6][^>]*>/);
    if (firstHeadingStart > 0) {
      const introContent = content.substring(0, firstHeadingStart);
      if (introContent.trim()) {
        slides.push(
          <Slide 
            key="introduction" 
            title="Introduction" 
            id="introduction"
            background="white"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: introContent }} 
            />
          </Slide>
        );
      }
    }
    
    // Create slides from headings
    headings.forEach((heading, index) => {
      // Extract content for this heading
      let slideContent = '';
      
      // Find the position of this heading in the HTML content
      const headingStart = content.indexOf(`<h${heading.level}[^>]*id="${heading.id}"`);
      if (headingStart !== -1) {
        // Find the end of this heading tag
        const headingEnd = content.indexOf('>', headingStart) + 1;
        
        // Get content after this heading until the next heading of same or higher level
        const afterHeading = content.substring(headingEnd);
        
        // Find the next heading of same or higher level
        let nextHeadingStart = -1;
        for (let level = 1; level <= heading.level; level++) {
          const nextMatch = afterHeading.search(new RegExp(`<h${level}[^>]*>`, 'i'));
          if (nextMatch !== -1 && (nextHeadingStart === -1 || nextMatch < nextHeadingStart)) {
            nextHeadingStart = nextMatch;
          }
        }
        
        if (nextHeadingStart !== -1) {
          slideContent = afterHeading.substring(0, nextHeadingStart);
        } else {
          slideContent = afterHeading;
        }
      }

      slides.push(
        <Slide 
          key={heading.id} 
          title={heading.text} 
          id={heading.id}
          background={(slides.length + index) % 2 === 0 ? "white" : "gray"}
        >
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: slideContent }} 
          />
        </Slide>
      );
    });
    
    return slides;
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={title} />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Navigation />
      
      <PitchDeckLayout title={title} slug={slug} headings={enhancedHeadings}>
        {createSlides()}
      </PitchDeckLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  function getAllMarkdownFiles(dir: string): string[] {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    
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
  
  // Get files from both india and content directories
  const indiaDir = path.join(process.cwd(), 'india');
  const contentDir = path.join(process.cwd(), 'content');
  
  const indiaFiles = getAllMarkdownFiles(indiaDir);
  const contentFiles = getAllMarkdownFiles(contentDir);
  
  const allFiles = [...indiaFiles, ...contentFiles];
  
  const paths = allFiles.map((file) => {
    let slug: string;
    
    if (file.startsWith(indiaDir)) {
      // Original india directory structure
      slug = file
        .replace(indiaDir + path.sep, '')
        .replace(/\.[^/.]+$/, '')
        .replace(/[\/]/g, '-');
    } else {
      // New content directory structure
      slug = file
        .replace(contentDir + path.sep, '')
        .replace(/\.[^/.]+$/, '');
    }
    
    return { params: { slug } };
  });
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const indiaDir = path.join(process.cwd(), 'india');
  const contentDir = path.join(process.cwd(), 'content');

  // Find the actual file by matching the slug to the generated slugs
  function findFileBySlug(dir: string, targetSlug: string, isContentDir: boolean = false): string | null {
    if (!fs.existsSync(dir)) return null;
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        const found = findFileBySlug(filePath, targetSlug, isContentDir);
        if (found) return found;
      } else if (file.endsWith('.md')) {
        let generatedSlug: string;
        if (isContentDir) {
          generatedSlug = file.replace(/\.[^/.]+$/, '');
        } else {
          const relPath = filePath.replace(indiaDir + path.sep, '');
          generatedSlug = relPath.replace(/\.[^/.]+$/, '').replace(/[\/]/g, '-');
        }
        if (generatedSlug === targetSlug) {
          return filePath;
        }
      }
    }
    return null;
  }

  // First try to find in content directory (new structure)
  let filePath = findFileBySlug(contentDir, slug, true);
  let usePhaseFiles = false;
  let phaseFilesDir = '';
  let combinedContent = '';
  let data: { title?: string } = {};

  if (filePath) {
    // Check for phase-files subdirectory
    const baseDir = filePath.replace(/\.md$/, '');
    const phaseDir = path.join(baseDir, 'phase-files');
    if (fs.existsSync(phaseDir) && fs.statSync(phaseDir).isDirectory()) {
      usePhaseFiles = true;
      phaseFilesDir = phaseDir;
    }
  }

  if (usePhaseFiles) {
    // Load intro.md and phase-1.md to phase-10.md
    const filesToLoad = ['intro.md'];
    for (let i = 1; i <= 10; i++) {
      filesToLoad.push(`phase-${i}.md`);
    }
    let allContent = '';
    for (const fname of filesToLoad) {
      const fpath = path.join(phaseFilesDir, fname);
      if (fs.existsSync(fpath)) {
        const fileContent = fs.readFileSync(fpath, 'utf-8');
        allContent += fileContent + '\n';
      }
    }
    // Use gray-matter on intro only for frontmatter
    const introPath = path.join(phaseFilesDir, 'intro.md');
    if (fs.existsSync(introPath)) {
      const introMatter = matter(fs.readFileSync(introPath, 'utf-8'));
      data = introMatter.data || {};
    }
    combinedContent = allContent;
  } else {
    // If not found, try india directory (old structure)
    if (!filePath) {
      filePath = findFileBySlug(indiaDir, slug, false);
    }
    if (!filePath || !fs.existsSync(filePath)) {
      return { notFound: true };
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(fileContent);
    combinedContent = matterResult.content;
    data = matterResult.data;
  }

  // Extract headings for table of contents
  const headings: Array<{ id: string; text: string; level: number }> = [];
  const lines = combinedContent.split('\n');
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

  const html = marked(combinedContent);

  return {
    props: {
      content: html,
      title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      slug,
      headings,
    },
  };
}; 