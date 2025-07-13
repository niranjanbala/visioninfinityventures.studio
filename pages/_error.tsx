import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <>
      <Head>
        <title>Error {statusCode} - Vision Infinity Ventures</title>
        <meta name="description" content="An error occurred while loading the page." />
      </Head>
      
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {statusCode ? `${statusCode}` : 'Error'}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {statusCode
                ? `A ${statusCode} error occurred on the server.`
                : 'An error occurred on the client.'}
            </p>
            
            <p className="text-muted-foreground mb-8">
              Don&apos;t worry, this is just a temporary issue. Let&apos;s get you back on track.
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
          </div>
        </div>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 