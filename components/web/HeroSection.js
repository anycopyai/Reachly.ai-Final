import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react'; // Import Button from NextUI
import { FaStar } from 'react-icons/fa'; // Using FaStar as a placeholder if FaTrustpilot is not available

const HeroSection = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text and Call-to-Action Column */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6">10X Your Email Replies with Elixcent AI </h1>
          <p className="text-xl text-gray-600 mb-8">Skyrocket Your Sales with Elixcent! Our platform is your secret weapon to hitting quotas and boosting revenue. Expect up to 10X more replies from your email campaigns. Simple, effective, and designed for results.</p>
          <div>
            <Link href="/SignUp" passHref>
              <Button color="primary" variant="shadow" size="lg"> {/* Adjust size as needed */}
                Start Your 7 Days Trial
              </Button>
            </Link>
            <p className="text-gray-500 text-sm mt-4">No credit card required</p>
          </div>
          <div className="flex justify-center md:justify-start items-center mt-8">
            <FaStar className="text-yellow-400 text-2xl"/> {/* Placeholder icon */}
            <p className="text-gray-600 text-sm ml-2">Rated 5 stars on Trustpilot</p>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="/images/heroimg.png" alt="SaaS Preview" className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"/>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
