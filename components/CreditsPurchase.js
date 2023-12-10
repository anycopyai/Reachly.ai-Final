import React from 'react';

const CreditsPurchase = ({ handlePurchaseCredits }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Purchase Credits</h3>
      <div className="flex justify-center space-x-4">
        <CreditOption amount={100} cost="$20" onPurchase={() => handlePurchaseCredits(100)} />
        <CreditOption amount={300} cost="$50" onPurchase={() => handlePurchaseCredits(300)} />
        {/* Add more options as needed */}
      </div>
    </div>
  );
};

const CreditOption = ({ amount, cost, onPurchase }) => (
  <div className="flex-1 max-w-xs bg-white border-2 border-blue-600 rounded-xl shadow-sm overflow-hidden transition-transform duration-300">
    <div className="px-4 py-5">
      <div className="flex justify-center">
        <span className="inline-flex px-3 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
          {amount} Credits
        </span>
      </div>
      <div className="mt-3 flex justify-center text-3xl leading-none font-extrabold text-gray-900">
        {cost}
      </div>
    </div>
    <div className="px-4 pt-4 pb-5">
      <button
        onClick={onPurchase}
        className="w-full bg-blue-600 text-white justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Purchase
      </button>
    </div>
  </div>
);

export default CreditsPurchase;
