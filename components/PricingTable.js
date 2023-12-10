import React from 'react';

const PricingTable = ({ billingCycle, toggleBillingCycle, plans }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 mb-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900">Plan Features</h3>
        <BillingCycleToggle billingCycle={billingCycle} toggleBillingCycle={toggleBillingCycle} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={plan.name} plan={plan} billingCycle={billingCycle} isPopular={index === 1} />
        ))}
      </div>
    </div>
  );
};

const BillingCycleToggle = ({ billingCycle, toggleBillingCycle }) => {
  return (
    <div className="flex items-center">
      <span className="text-sm font-medium text-gray-700">Monthly</span>
      <div className="form-control w-16 ml-3 mr-3">
        <label className="cursor-pointer label">
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={billingCycle === 'yearly'}
            onChange={toggleBillingCycle}
          />
        </label>
      </div>
      <span className="text-sm font-medium text-gray-700">Yearly</span>
      {billingCycle === 'yearly' && (
        <span className="ml-2 bg-blue-600 text-white py-1 px-3 text-xs rounded-full">25% Off</span>
      )}
    </div>
  );
};

const PlanCard = ({ plan, billingCycle, isPopular }) => {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  return (
    <div className={`border ${isPopular ? 'border-blue-600' : 'border-gray-200'} rounded-lg p-6 flex flex-col items-center text-center relative`}>
      {isPopular && (
        <span className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-3 text-xs font-bold rounded-bl-lg rounded-tr-lg">Most Popular</span>
      )}
      <h4 className="text-lg font-bold text-gray-900 mb-4">{plan.name}</h4>
      <p className="text-4xl font-extrabold text-gray-900">{price}</p>
      <p className="text-sm text-gray-500 mb-6">{billingCycle === 'monthly' ? 'per month' : 'per year'}</p>
      <ul className="space-y-3 mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-700 text-sm">
            <span className="before:content-['✔︎'] before:mr-2 before:text-green-500">{feature}</span>
          </li>
        ))}
        <li className="text-gray-700 text-sm font-semibold">
          <span className="before:content-['🎁'] before:mr-2">{plan.credits}</span>
        </li>
      </ul>
      <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors">
        Choose {plan.name}
      </button>
    </div>
  );
};

export default PricingTable;
