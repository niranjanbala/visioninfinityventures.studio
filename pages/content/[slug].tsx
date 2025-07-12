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

  // Create slides from headings
  const createSlides = () => {
    return headings.map((heading, index) => {
      // Extract content for this heading
      let slideContent = '';
      const headingRegex = new RegExp(`<h${heading.level}[^>]*id="${heading.id}"[^>]*>.*?</h${heading.level}>`, 's');
      const match = content.match(headingRegex);
      
      if (match) {
        // Get content after this heading until the next heading of same or higher level
        const afterHeading = content.substring(content.indexOf(match[0]) + match[0].length);
        const nextHeadingRegex = new RegExp(`<h[1-${heading.level}][^>]*>`, 'i');
        const nextMatch = afterHeading.match(nextHeadingRegex);
        
        if (nextMatch) {
          slideContent = afterHeading.substring(0, nextMatch.index);
        } else {
          slideContent = afterHeading;
        }
      }

      return (
        <Slide 
          key={heading.id} 
          title={heading.text} 
          id={heading.id}
          background={index % 2 === 0 ? "white" : "gray"}
        >
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: slideContent }} 
          />
        </Slide>
      );
    });
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={title} />
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
          // For content directory, just use the filename without extension
          generatedSlug = file.replace(/\.[^/.]+$/, '');
        } else {
          // For india directory, use the old logic
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
  
  // If not found, try india directory (old structure)
  if (!filePath) {
    filePath = findFileBySlug(indiaDir, slug, false);
  }

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