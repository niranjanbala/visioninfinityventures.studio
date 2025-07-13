import Head from 'next/head';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Vision Infinity Ventures</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              404
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Page Not Found
            </p>
            
            <p className="text-muted-foreground mb-8">
              The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to where you need to be.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/">
                ← Back to Home
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link href="/content">
                Browse Content
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link href="/apply">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
} 