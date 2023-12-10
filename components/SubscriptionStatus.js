import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'; // Ensure you have react-icons installed

const SubscriptionStatus = ({ isActive, activePlanName }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8 transition duration-300 ease-in-out transform hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Subscription Status</h3>
          <p className={`mt-2 text-lg ${isActive ? 'text-green-500' : 'text-red-500'}`}>
            {isActive ? `Active - ${activePlanName}` : 'Inactive'}
          </p>
        </div>
        <div className="flex items-center">
          {isActive ? (
            <AiFillCheckCircle className="text-green-500 text-3xl" />
          ) : (
            <AiFillCloseCircle className="text-red-500 text-3xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionStatus;
