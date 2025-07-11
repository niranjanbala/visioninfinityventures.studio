import React from 'react';

const features = [
  { name: 'HSR Layout Focus', icon: '📍', desc: 'Hyper-local focus on Bangalore\'s tech hub ecosystem.' },
  { name: 'SaaS B2B Specialists', icon: '💼', desc: 'Deep expertise in B2B software and enterprise solutions.' },
  { name: 'AI-Powered Tools', icon: '🤖', desc: 'Cutting-edge AI tools and technology stack integration.' },
  { name: '12-Phase Roadmap', icon: '📋', desc: 'Proven step-by-step execution methodology.' },
];

export default function Studios() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Our Venture Studio?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">{feature.name}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 