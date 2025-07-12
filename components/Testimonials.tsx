import React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'AI/ML Startup Founder',
    quote: 'Vision Infinity Ventures transformed my idea into a viable product in just 3 months. The support and resources are legendary!',
    avatar: '👩‍💻',
    rating: 5
  },
  {
    name: 'Rahul Kumar',
    role: 'FinTech Innovation',
    quote: 'The structured approach and hands-on guidance helped me achieve product-market fit faster than I ever imagined possible.',
    avatar: '👨‍💼',
    rating: 5
  },
  {
    name: 'Anjali Patel',
    role: 'HealthTech Pioneer',
    quote: 'Being part of the first 100 founders is incredible. The community and mentorship here are unmatched in Bangalore.',
    avatar: '👩‍⚕️',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    role: 'EdTech Visionary',
    quote: 'From ideation to launch in 6 months. Vision Infinity Ventures is truly building legendary companies.',
    avatar: '👨‍🎓',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Founders Say</h2>
          <p className="text-lg opacity-90">Real stories from legendary founders in our community</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-indigo-200 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
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
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Join the legendary community</span>
            <span className="text-2xl">💎</span>
          </div>
        </div>
      </div>
    </section>
  );
} 