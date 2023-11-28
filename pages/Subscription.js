import React, { useState } from 'react';
import { Switch, Button } from "@nextui-org/react";

const UpgradePage = () => {
  const [isAnnualPlan, setIsAnnualPlan] = useState(false);

  const togglePlan = () => {
    setIsAnnualPlan(!isAnnualPlan);
  };

  // Define pricing details for each plan
  const pricingDetails = {
    basic: {
      monthly: 29,
      yearly: 29 * 12 * 0.8,
      features: ['50 credits per month', 'Basic analytics', 'Email support'],
      users: 1,
    },
    professional: {
      monthly: 59,
      yearly: 59 * 12 * 0.8,
      features: ['120 credits per month', 'Advanced analytics', 'Priority support'],
      users: 3,
    },
    enterprise: {
      monthly: 99,
      yearly: 99 * 12 * 0.8,
      features: ['Unlimited credits', 'Custom integrations', 'Dedicated account manager'],
      users: 5,
    },
  };

  return (
    <>
      {/* Pricing Header */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Pricing
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center items-center mb-8">
        <label className="min-w-[3.5rem] text-sm text-gray-500 me-3 dark:text-gray-400">
          Monthly
        </label>
        <Switch checked={isAnnualPlan} onChange={togglePlan} aria-label="Toggle between monthly and yearly plans" />
        <label className="min-w-[3.5rem] text-sm text-gray-500 ms-3 dark:text-gray-400">
          Annual
          <span className="absolute -top-10 start-auto -end-28">
            <span className="flex items-center">
              <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">
                20% Off
              </span>
            </span>
          </span>
        </label>
      </div>

      {/* Subscription Plans Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Plan Card */}
        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 shadow-lg dark:border-gray-700">
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Basic
          </h4>
          <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
            {/* ... */}
            {/* Price based on isAnnualPlan */}
            ${isAnnualPlan ? pricingDetails.basic.yearly : pricingDetails.basic.monthly}
          </span>
          <p className="mt-2 text-sm text-gray-500">
            Perfect for individuals and small teams
          </p>
          <ul className="mt-7 space-y-2.5 text-sm">
            {pricingDetails.basic.features.map((feature, index) => (
              <li key={index} className="flex space-x-2">
                {/* Feature Icon */}
                <span className="text-gray-800 dark:text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
          <Button color="primary" variant="bordered" className="mt-5">
            Purchase
          </Button>
        </div>
        {/* End of Basic Plan Card */}

        {/* Professional Plan Card */}
        {/* ... similar structure for Professional Plan ... */}

        {/* Enterprise Plan Card */}
        {/* ... similar structure for Enterprise Plan ... */}

      </div>
      {/* End of Subscription Plans Grid */}
    </>
  );
};

export default UpgradePage;
