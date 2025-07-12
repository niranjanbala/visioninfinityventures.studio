import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
              Vision Infinity Ventures
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Home
            </Link>
            <Link href="/venture-studio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Venture Studio
            </Link>
            <Link href="/stages" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              All Content
            </Link>
            <Link href="/pitch-deck" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Pitch Deck
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Careers
            </Link>
            <Link href="/tech-stack" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Tech Stack
            </Link>
            <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Process
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Contact
            </a>
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Sign In
                </Link>
                <Link 
                  href="/auth/register" 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Home
              </Link>
              <Link href="/venture-studio" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Venture Studio
              </Link>
              <Link href="/stages" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                All Content
              </Link>
              <Link href="/pitch-deck" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Pitch Deck
              </Link>
              <Link href="/careers" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Careers
              </Link>
              <Link href="/tech-stack" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Tech Stack
              </Link>
              <a href="#process" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Process
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Contact
              </a>
              
              {session ? (
                <>
                  <Link href="/dashboard" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/signin" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                    Sign In
                  </Link>
                  <Link 
                    href="/auth/register" 
                    className="block px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium mx-3 mt-2"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 