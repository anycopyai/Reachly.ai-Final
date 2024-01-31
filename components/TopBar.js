import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiCreditCard, FiSearch } from 'react-icons/fi';

const categories = [
  'All',
  'Favorites',
  'Fresh Template',
  'EveryDay Tools',
  'Blog',
  'AdCopy',
  'E_commerce',
  'Campaigns',
  'Landing Pages',
  'Website Copy',
  'Salae Copy',
  'Social Media',
  'Emails',
  'Video',
  'Business',
  'Branding',
  'Education',
  'Pr_Media',
  'Reserach',
  'Human Resources',
  'Frame Works',
  'Brain storming',
  'Invistor Pitch',
];

const CreditBadge = ({ credits }) => {
  const [showCredits, setShowCredits] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCredits((prevState) => !prevState);
    }, 5000); // Change to the desired duration in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href="/upgrade">
      <a className="flex items-center text-white font-medium rounded-full text-sm px-5 py-2.5 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white" style={{ backgroundColor: '#C7DAFD', color: 'blue', cursor: 'pointer' }}>
        <FiCreditCard className="mr-2" />
        {showCredits ? (
          <>
            Credits Left: {credits}
          </>
        ) : (
          <>
            <span>Upgrade now for Unlimited</span>
          </>
        )}
      </a>
    </Link>
  );
};

const TopBar = () => {
  return (
    <div className="  bg-white  flex justify-between items-center">
      <div className=' mt-5 max-w-[89%] mx-auto'>
        <div className="flex  justify-between">
         <div className='flex items-center w-full max-w-xl relative border border-gray-300 rounded-full'>
         <input 
            type="search" 
            placeholder="I'm looking for..." 
            className="pl-4 pr-10 py-2 w-full border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out" 
          />
          <FiSearch className="absolute right-4 text-lg text-blue-600 cursor-pointer" />
          
         </div>
         <CreditBadge credits={100} className=' -translate-x-6' />
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              className="text-sm bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-800 px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition  duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default TopBar;
