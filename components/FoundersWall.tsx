import React from 'react';

const founders = [
  { name: 'Priya Sharma', role: 'EdTech Founder', location: 'HSR Layout', avatar: '👩‍💼' },
  { name: 'Rajesh Kumar', role: 'SaaS Builder', location: 'Whitefield', avatar: '👨‍💻' },
  { name: 'Anjali Patel', role: 'AI Innovator', location: 'HSR Layout', avatar: '👩‍🔬' },
  { name: 'Vikram Singh', role: 'Product Leader', location: 'Whitefield', avatar: '👨‍🎯' },
  { name: 'Meera Reddy', role: 'Growth Hacker', location: 'HSR Layout', avatar: '👩‍🚀' },
  { name: 'Arjun Malhotra', role: 'Tech Architect', location: 'Whitefield', avatar: '👨‍🏗️' },
  { name: 'Kavya Iyer', role: 'UX Designer', location: 'HSR Layout', avatar: '👩‍🎨' },
  { name: 'Rahul Verma', role: 'Data Scientist', location: 'Whitefield', avatar: '👨‍📊' },
];

export default function FoundersWall() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Legendary Founders</h2>
          <p className="text-lg text-muted-foreground">The first 100 visionaries building the future from Bangalore</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {founders.map((founder, index) => (
            <div key={index} className="bg-background rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group border border-border">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {founder.avatar}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{founder.name}</h3>
              <p className="text-sm text-primary mb-1">{founder.role}</p>
              <p className="text-xs text-muted-foreground">{founder.location}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More legendary founders joining every week...</p>
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <span className="text-sm font-medium">100 spots available</span>
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">Limited</span>
          </div>
        </div>
      </div>
    </section>
  );
} 