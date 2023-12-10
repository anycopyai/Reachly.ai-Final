import React, { useState } from 'react';
import SubscriptionStatus from '../../components/Writer/SubscriptionStatus';
import CreditsPurchase from '../../components/Writer/CreditsPurchase';
import PricingTable from '../../components/Writer/PricingTable';


const SubscriptionInfo = () => {
  const [isActive, setIsActive] = useState(true); // Placeholder for subscription status
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  // Define your plans with features, monthly and yearly prices
  const [plans] = useState([
    {
      name: "Basic",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Pro",
      monthlyPrice: "$15",
      yearlyPrice: "$150",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Enterprise",
      monthlyPrice: "$45",
      yearlyPrice: "$450",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
  ]);

  const handlePurchaseCredits = (amount) => {
    console.log(`Purchase ${amount} credits`);
    // Implement purchase credits logic
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <div className="space-y-8">
      <SubscriptionStatus isActive={isActive} />
      <CreditsPurchase handlePurchaseCredits={handlePurchaseCredits} />
      <PricingTable 
        billingCycle={billingCycle}
        toggleBillingCycle={toggleBillingCycle}
        plans={plans}
      />
    </div>
  );
};

export default SubscriptionInfo;
