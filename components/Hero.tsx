import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-black text-white py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-white/10 p-4 shadow-lg">
            <span className="text-4xl font-black tracking-tight text-indigo-300">VIV</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Building <span className="text-indigo-300">Legendary</span> Ventures
        </h1>
        <p className="text-lg md:text-2xl mb-8 opacity-90">
          The future of startups, built in Bangalore. Product-market fit in record time.
        </p>
        <a href="#apply" className="inline-block px-8 py-4 bg-indigo-400 hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg transition text-lg">
          Apply Now
        </a>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute left-0 top-0 w-80 opacity-30" viewBox="0 0 400 400"><circle cx="200" cy="200" r="200" fill="#a5b4fc"/></svg>
        <svg className="absolute right-0 bottom-0 w-96 opacity-20" viewBox="0 0 400 400"><circle cx="200" cy="200" r="200" fill="#c4b5fd"/></svg>
      </div>
    </section>
  );
} 