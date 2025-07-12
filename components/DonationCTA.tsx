import React from 'react';

export default function DonationCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Join the <span className="text-yellow-300">Legendary</span> 100
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Each founder contributes ₹83,000 to bootstrap Vision Infinity Ventures and achieve our ₹8.3Cr first-year operations goal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">💎</div>
            <h3 className="font-bold text-lg mb-2">Founder Investment</h3>
            <p className="text-sm opacity-90">₹83,000 per founder to join the legendary 100</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-bold text-lg mb-2">Goal Achievement</h3>
            <p className="text-sm opacity-90">100 founders × ₹83,000 = ₹83,00,000 target</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2">Bootstrap Success</h3>
            <p className="text-sm opacity-90">Self-funded by founders, for founders</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <div className="text-6xl font-black text-yellow-300 mb-4">₹83,000</div>
          <p className="text-lg mb-6">Per Founder Contribution</p>
          <div className="w-full bg-white/20 rounded-full h-4 mb-4">
            <div className="bg-yellow-300 h-4 rounded-full" style={{ width: '25%' }}></div>
          </div>
          <p className="text-sm opacity-90">25% of goal reached • 75 founders needed</p>
        </div>

        <div className="space-y-4">
          <button className="w-full md:w-auto px-12 py-4 bg-yellow-400 text-emerald-900 font-bold rounded-full text-lg hover:bg-yellow-300 transition shadow-lg">
            Join as Founder
          </button>
          <p className="text-sm opacity-80">
            Your ₹83,000 investment directly supports the venture studio and gives you access to all resources
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="font-semibold mb-3">What Your ₹83,000 Supports:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Founder workspace and infrastructure</li>
              <li>• Mentorship and expert guidance</li>
              <li>• Technology and development resources</li>
              <li>• Marketing and go-to-market support</li>
              <li>• Community events and networking</li>
              <li>• Direct access to all studio resources</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="font-semibold mb-3">Founder Benefits:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Priority access to all programs</li>
              <li>• Exclusive founder community</li>
              <li>• Direct mentorship from studio team</li>
              <li>• Early access to new initiatives</li>
              <li>• Voting rights on studio decisions</li>
              <li>• Lifetime founder status</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white/5 rounded-xl p-6">
          <h4 className="font-semibold mb-3 text-center">Funding Breakdown</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">100</div>
              <div>Founders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">₹83,000</div>
              <div>Per Founder</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">₹8.3Cr</div>
              <div>Total Goal</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">12</div>
              <div>Months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 