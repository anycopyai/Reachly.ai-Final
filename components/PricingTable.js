import React from 'react';

const PricingTable = ({ billingCycle, toggleBillingCycle, plans }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Plan Features</h3>
        <BillingCycleToggle billingCycle={billingCycle} toggleBillingCycle={toggleBillingCycle} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} billingCycle={billingCycle} />
        ))}
      </div>
    </div>
  );
};

const BillingCycleToggle = ({ billingCycle, toggleBillingCycle }) => {
  return (
    <div className="flex items-center">
      <span className="text-sm font-medium text-gray-700">Monthly</span>
      <label htmlFor="billingCycleToggle" className="ml-3 relative">
        <input
          id="billingCycleToggle"
          type="checkbox"
          className="sr-only"
          checked={billingCycle === 'yearly'}
          onChange={toggleBillingCycle}
        />
        <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
            billingCycle === 'yearly' ? 'translate-x-6' : ''
          }`}
        ></div>
      </label>
      <span className="text-sm font-medium text-gray-700 ml-3">Yearly</span>
    </div>
  );
};

const PlanCard = ({ plan, billingCycle }) => {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  return (
    <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
      <h4 className="text-md font-bold text-gray-900">{plan.name}</h4>
      <p className="text-5xl font-extrabold text-gray-900 my-4">{price}</p>
      <p className="text-sm text-gray-500 mb-6">{billingCycle === 'monthly' ? 'per month' : 'per year'}</p>
      <ul className="flex-1 space-y-2 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-700 text-sm">
            <span className="before:content-['✔︎'] before:mr-2 before:text-green-500">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition-colors w-full">
        Choose {plan.name}
      </button>
    </div>
  );
};

export default PricingTable;
