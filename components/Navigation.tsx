import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navigation() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-viv rounded-xl flex items-center justify-center shadow group-hover:shadow-lg transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold gradient-text-primary">VIV</div>
              <div className="text-xs text-muted-foreground -mt-1">Venture Studio</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/content" className="nav-link">
              Content Library
            </Link>
            <Link href="/track/diy-founder-track" className="nav-link">
              DIY Founder Track
            </Link>
            <Link href="/apply" className="nav-link">
              Apply
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </div>

          {/* Auth & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/signin" className="nav-link">
                  Sign In
                </Link>
                <Link href="/auth/register" className="btn-primary text-sm px-6 py-2">
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-muted hover:bg-muted-foreground/10 transition-colors"
          >
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-xl shadow border border-border mt-4 mb-4 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/content" 
                className="block nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Content Library
              </Link>
              <Link 
                href="/track/diy-founder-track" 
                className="block nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DIY Founder Track
              </Link>
              <Link 
                href="/apply" 
                className="block nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply
              </Link>
              <Link 
                href="/about" 
                className="block nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="border-t border-border pt-4">
                {session ? (
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      Welcome, {session.user?.name}
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full btn-secondary text-sm px-4 py-2"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link 
                      href="/auth/signin" 
                      className="block nav-link py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="/auth/register" 
                      className="block btn-primary text-sm px-6 py-2 text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 