// components/PricingPlan.js
import { useState } from 'react';

const PricingPlan = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: 'Starter',
      monthlyPrice: 199,
      annualPrice: 1908,
      features: isAnnual ? ['Annual Feature A', 'Annual Feature B'] : ['Feature A', 'Feature B'],
      credits: isAnnual ? '1000 credits' : '200 credits',
    },
    {
      title: 'Pro',
      monthlyPrice: 199,
      annualPrice: 1908,
      features: isAnnual ? ['Annual Feature A', 'Annual Feature B', 'Annual Feature C'] : ['Feature A', 'Feature B', 'Feature C'],
      credits: isAnnual ? '3000 credits' : '480 credits',
    },
    {
      title: 'Enterprise',
      monthlyPrice: 199,
      annualPrice: 1908,
      features: isAnnual ? ['Annual Feature A', 'Annual Feature B', 'Annual Feature C', 'Annual Feature E'] : ['Feature A', 'Feature B', 'Feature C', 'Feature E'],
      credits: isAnnual ? 'Unlimited credits' : 'Up to 1000000 credits',
    },
    {
      title: 'Scale',
      monthlyPrice: 199,
      annualPrice: 1908,
      features: ['Feature A', 'Feature B', 'Feature C', 'Feature E'],
      credits: 'Up to 1000000 credits',
    },
  ];

  return (
    // Apply Inter font directly to this div
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        {/* Toggle Switch for Billing Period */}
        <div className="flex justify-center py-4">
          <label htmlFor="toggle-switch" className="flex items-center cursor-pointer">
            {/* Switch Container */}
            <div className="relative">
              {/* Actual switch */}
              <input id="toggle-switch" type="checkbox" className="sr-only" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isAnnual ? 'transform translate-x-6' : ''}`}></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">{isAnnual ? 'Annual' : 'Monthly'}</div>
          </label>
        </div>
{/* Pricing Cards */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
          {plans.map((plan) => (
            <div key={plan.title} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title} Plan</h3>
              <p className="text-4xl font-extrabold text-gray-800 mb-2">
                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                <span className="text-md font-medium text-gray-500">
                  / {isAnnual ? 'yr' : 'mo'}
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-4">{plan.credits}</p>
              <ul className="mb-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-1">
                    <svg className="h-5 w-5 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md text-md font-medium hover:bg-blue-600 transition duration-300 ease-in-out">
                Choose {plan.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;