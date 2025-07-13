import React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'EdTech Founder',
    avatar: '👩‍💼',
    rating: 5,
    quote: 'The systematic approach and AI-powered tools helped me validate my idea in just 3 months. Now I have 10,000+ students!'
  },
  {
    name: 'Rajesh Kumar',
    role: 'SaaS Builder',
    avatar: '👨‍💻',
    rating: 5,
    quote: 'The fractional support model gave me access to senior expertise without the full-time cost. Game changer for bootstrapped founders.'
  },
  {
    name: 'Anjali Patel',
    role: 'AI Innovator',
    avatar: '👩‍🔬',
    rating: 5,
    quote: 'The HSR Layout focus and local network effects are real. I found my co-founder and first 100 users within weeks.'
  },
  {
    name: 'Vikram Singh',
    role: 'Product Leader',
    avatar: '👨‍🎯',
    rating: 5,
    quote: 'The 12-phase roadmap is gold. It kept me focused and prevented the common startup mistakes. Highly recommend!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Founders Say</h2>
          <p className="text-lg opacity-90">Real stories from legendary founders in our community</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-primary-foreground/80 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-background/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Join the legendary community</span>
            <span className="text-2xl">💎</span>
          </div>
        </div>
      </div>
    </section>
  );
} 