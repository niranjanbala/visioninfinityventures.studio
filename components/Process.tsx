import React from 'react';

const steps = [
  {
    title: 'Ideation & Validation',
    icon: '💡',
    desc: 'Source and validate ideas through customer discovery and market research.'
  },
  {
    title: 'MVP Development',
    icon: '⚡',
    desc: 'Rapid prototyping and MVP development with cross-functional teams.'
  },
  {
    title: 'Customer Testing',
    icon: '🧪',
    desc: 'Deploy MVP to real users, collect feedback, and iterate quickly.'
  },
  {
    title: 'Company Formation',
    icon: '🏢',
    desc: 'Formally establish the company and recruit dedicated leadership.'
  },
  {
    title: 'Go-to-Market',
    icon: '🚀',
    desc: 'Launch with a strong GTM strategy and scale operations.'
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Legendary Process</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 