// components/PricingPlan.js
import React from 'react';

const PricingPlan = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Offer */}
      <div className="bg-purple-700 text-white text-center py-2">
        <span className="font-semibold">Get 25% off</span>
      </div>

      {/* Pricing Plan */}
      <div className="pt-8 pb-6 px-8 bg-gray-50">
        <h2 className="font-semibold text-4xl text-gray-800 mb-4">Pro Plan</h2>
        <p className="text-md text-gray-600 mb-8">Essential for finding your prospects</p>
        <div className="flex justify-center items-baseline">
          <span className="text-gray-500 mr-2 line-through">$733</span>
          <span className="text-5xl font-extrabold text-gray-800">$348</span>
          <span className="text-md font-medium text-gray-500 ml-2">/user/year</span>
        </div>
        <div className="my-6">
          <label htmlFor="credits" className="block mb-2 text-sm font-medium text-gray-700">Credits</label>
          <select id="credits" className="block w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>480 credits - 1 user</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">
          Choose Plan
        </button>
      </div>

      {/* Benefits */}
      <div className="px-8 py-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Benefit Items */}
        {/* Repeat this div for each benefit item */}
        <div className="flex items-center">
          <div className="shrink-0">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-gray-700 font-medium">List management</p>
          </div>
        </div>
        {/* ... other benefit items */}
      </div>
    </div>
  );
};

export default PricingPlan;
