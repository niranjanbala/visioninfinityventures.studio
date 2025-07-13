import React from 'react';

const features = [
  { name: 'HSR Layout Focus', icon: '📍', desc: 'Hyper-local focus on Bangalore\'s tech hub ecosystem.' },
  { name: 'Education Specialists', icon: '🎓', desc: 'Deep expertise in educational technology and learning solutions.' },
  { name: 'AI-Powered Tools', icon: '🤖', desc: 'Cutting-edge AI tools and technology stack integration.' },
  { name: '12-Phase Roadmap', icon: '📋', desc: 'Proven step-by-step execution methodology.' },
];

export default function Studios() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose Our Venture Studio?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-2xl shadow hover:shadow-xl transition border border-border">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-primary">{feature.name}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 