import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
              Vision Infinity Ventures
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/venture-studio" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Venture Studio
            </Link>
            <a href="#process" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Process
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </a>
            {session ? (
              <>
                <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Sign In
                </Link>
                <Link href="/auth/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <Link href="/venture-studio" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
                Venture Studio
              </Link>
              <a href="#process" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
                Process
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
                Contact
              </a>
              {session ? (
                <>
                  <Link href="/dashboard" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/signin" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
                    Sign In
                  </Link>
                  <Link href="/auth/register" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
                    Register
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