'use client'
import React, { useState } from 'react';

const Update: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="max-w-4xl mx-auto mt-14 px-4 py-12">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-32">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-4">Join These Excited Applicants</h1>
          <p className="text-gray-600">
            With lots of unique blocks, you can easily build a page without <br/> coding. Build your next landing page.
          </p>
        </div>
        <button className="bg-secondary_color text-white px-6 py-3 rounded-full  transition-colors">
          Apply for Beta Access Now
        </button>
      </div>

      {/* Bottom Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Get latest updates</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-secondary_color text-white px-6 py-3 rounded-md  transition-colors"
          >
            Join Now
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          We'll never share your details with third parties.
          <br />
          View our Privacy Policy for more info.
        </p>
      </div>
    </div>
  );
};

export default Update;