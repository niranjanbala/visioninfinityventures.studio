import React from 'react';

const studios = [
  { name: 'Nobody Studios', icon: '🧑‍🚀', desc: 'Rapid ideation, validation, inclusive entrepreneurship.' },
  { name: 'Atomic', icon: '⚛️', desc: 'Partners with founders, provides capital and operational support.' },
  { name: 'High Alpha', icon: '🦾', desc: 'SaaS specialists, compressing time to product-market fit.' },
  { name: 'Idealab', icon: '💡', desc: 'Pioneers of the studio model, over 150 companies created.' },
];

export default function Studios() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Notable Venture Studios</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {studios.map((studio, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">{studio.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">{studio.name}</h3>
              <p className="text-gray-600 text-sm">{studio.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 