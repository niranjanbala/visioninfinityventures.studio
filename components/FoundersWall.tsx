import React from 'react';

const founders = [
  { name: 'Priya Sharma', role: 'AI/ML Startup', location: 'Bangalore', avatar: '👩‍💻' },
  { name: 'Rahul Kumar', role: 'FinTech Innovation', location: 'Bangalore', avatar: '👨‍💼' },
  { name: 'Anjali Patel', role: 'HealthTech Pioneer', location: 'Bangalore', avatar: '👩‍⚕️' },
  { name: 'Vikram Singh', role: 'EdTech Visionary', location: 'Bangalore', avatar: '👨‍🎓' },
  { name: 'Meera Reddy', role: 'E-commerce Disruptor', location: 'Bangalore', avatar: '👩‍🛒' },
  { name: 'Arjun Menon', role: 'EdTech Builder', location: 'Bangalore', avatar: '👨‍💻' },
  { name: 'Kavya Iyer', role: 'CleanTech Innovator', location: 'Bangalore', avatar: '👩‍🌱' },
  { name: 'Aditya Rao', role: 'Logistics Tech', location: 'Bangalore', avatar: '👨‍🚚' },
  { name: 'Zara Khan', role: 'Social Impact', location: 'Bangalore', avatar: '👩‍❤️' },
  { name: 'Rohan Gupta', role: 'Gaming & Entertainment', location: 'Bangalore', avatar: '👨‍🎮' },
  { name: 'Nisha Verma', role: 'Real Estate Tech', location: 'Bangalore', avatar: '👩‍🏠' },
  { name: 'Karthik Nair', role: 'Cybersecurity Expert', location: 'Bangalore', avatar: '👨‍🔒' },
];

export default function FoundersWall() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Legendary Founders</h2>
          <p className="text-lg text-gray-600">The first 100 visionaries building the future from Bangalore</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {founder.avatar}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{founder.name}</h3>
              <p className="text-sm text-indigo-600 mb-1">{founder.role}</p>
              <p className="text-xs text-gray-500">{founder.location}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">More legendary founders joining every week...</p>
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">100 spots available</span>
            <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">Limited</span>
          </div>
        </div>
      </div>
    </section>
  );
} 