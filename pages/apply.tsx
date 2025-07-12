import { useState } from 'react';
import Head from 'next/head';

export default function Apply() {
  const [form, setForm] = useState({ name: '', email: '', city: '', commitment: false });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    setError('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.city.trim().toLowerCase() !== 'bangalore') {
      setError('Sorry, we&apos;re only accepting applications from Bangalore.');
      return;
    }
    if (!form.commitment) {
      setError('You must commit to the &apos;1,000&apos; founder contribution to join.');
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Join as Founder | Vision Infinity Ventures</title>
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2 text-indigo-700">Join the Legendary 100</h1>
            <p className="text-sm text-gray-600">Founder Application & Investment</p>
          </div>

          {submitted ? (
            <div className="text-center">
              <div className="text-green-600 font-semibold text-lg mb-4">
                🎉 Welcome to the Legendary 100!
              </div>
              <p className="text-gray-700 mb-4">
                Thank you for your application and commitment to the &apos;1,000&apos; founder contribution.
              </p>
              <p className="text-sm text-gray-600">
                We&apos;ll be in touch within 24 hours with next steps for your investment and onboarding.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  City <span className="text-xs text-gray-500">(Only Bangalore accepted)</span>
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Founder Investment</h3>
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold text-indigo-600">$1,000</div>
                  <div className="text-sm text-gray-600">One-time founder contribution</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  <li>• Access to all venture studio resources</li>
                  <li>• Priority mentorship and guidance</li>
                  <li>• Exclusive founder community</li>
                  <li>• Lifetime founder status</li>
                </ul>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="commitment"
                    id="commitment"
                    checked={form.commitment}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="commitment" className="text-sm text-gray-700">
                    I commit to the &apos;1,000&apos; founder contribution and understand this is an investment in the venture studio
                  </label>
                </div>
              </div>

              {error && <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</div>}
              
              <button 
                type="submit" 
                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
              >
                Join as Founder
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to the founder contribution and terms of participation.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
} 