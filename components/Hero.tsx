import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
  <div
    className={`absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-float`}
  />
</div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-slide-down">
            <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></div>
            <span className="text-white/90 font-medium">Open Source & AI Native Venture Studio</span>
          </div>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight text-shadow-lg animate-slide-up">
            Vision Infinity
            <span className="block gradient-text-accent">Ventures</span>
          </h1>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Building Bangalores first systematic venture studio platform with
            <span className="font-semibold text-white"> AI-powered personalization</span> and
            <span className="font-semibold text-white"> proven methodologies</span>
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link href="/content" className="btn-gradient group text-lg px-8 py-4">
              <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Explore Our Platform
            </Link>
            <Link href="/apply" className="btn-secondary group text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Join Our Studio
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">₹9.1L Cr</div>
              <div className="text-white/80 text-sm md:text-base">Bangalore Ecosystem</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">8,000+</div>
              <div className="text-white/80 text-sm md:text-base">Startups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">40+</div>
              <div className="text-white/80 text-sm md:text-base">Unicorns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10</div>
              <div className="text-white/80 text-sm md:text-base">Phase System</div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
} 