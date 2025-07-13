import React from 'react';

const months = [
  { period: '1-2', title: 'Foundation', desc: 'Idea sourcing, market research, problem validation' },
  { period: '3-4', title: 'Build', desc: 'MVP development, team assembly' },
  { period: '5-6', title: 'Launch', desc: 'MVP launch, early user feedback, iteration' },
  { period: '7-9', title: 'Refine', desc: 'Product refinement, initial GTM experiments' },
  { period: '10-11', title: 'Scale', desc: 'Scaling GTM, tracking PMF metrics, founder onboarding' },
  { period: '12', title: 'Legendary', desc: 'Product-market fit assessment, scale-up planning' },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">12-Month Legendary Journey</h2>
        <ol className="relative border-l-4 border-primary/30">
          {months.map((m, i) => (
            <li key={i} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5 ring-4 ring-background text-primary-foreground font-bold text-lg">{m.period}</span>
              <div className="bg-background p-6 rounded-xl shadow-md border border-border">
                <h3 className="font-semibold text-primary text-xl mb-1">{m.title}</h3>
                <p className="text-muted-foreground">{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
} 