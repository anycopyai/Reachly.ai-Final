import React from 'react'; // Make sure to import React
import { FaCode, FaServer } from 'react-icons/fa'; // Import the icons you want to use

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
      <div className="flex flex-col h-full p-6 shadow-lg rounded-lg bg-white hover:bg-blue-50 transition-colors duration-300">
        <div className="icon mb-4 text-blue-500 flex-grow-0">
          <Icon className="text-3xl" /> {/* Use text-3xl to set the icon size */}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4 text-center">
        <FeatureCard
          Icon={FaCode}
          title="Integrated programming model"
          description="With a variety of programming languages"
        />
        <FeatureCard
          Icon={FaServer}
          title="Built-in serverless elasticity"
          description="To build fast, secure, and reliable apps at scale"
        />
        {/* Add more FeatureCard components as needed */}
      </div>
    </div>
  );
};

export default FeaturesSection;
