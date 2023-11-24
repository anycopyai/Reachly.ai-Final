// pages/Pricing.js
import React from 'react';
import PricingPlan from '../components/web/PricingPlan';
import HeroSection from '../components/web/HeroSection';


const Pricing = () => {
  return (
    <div className="bg-lightgray"> {/* Using the custom color */}
    <HeroSection />
      <PricingPlan />
      {/* ... other components */}
    </div>
  );
};

export default Pricing;
