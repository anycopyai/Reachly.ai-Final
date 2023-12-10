// components/TopBar.js
import React from 'react';
import { FiSearch, FiCreditCard } from 'react-icons/fi';

const categories = [
  'All',
  'Category 1', // Replace with actual category names
  'Category 2',
  'Category 3',
  // ... Add more categories as needed
];

const TopBar = () => {
    return (
      <div className="px-10 py-6 bg-white shadow flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center w-full max-w-xl relative border border-gray-300 rounded-full">
              <input 
                type="search" 
                placeholder="I'm looking for..." 
                className="pl-4 pr-10 py-2 w-full border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out" 
              />
              <FiSearch className="absolute right-4 text-lg text-blue-600 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button key={category} className="text-sm bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-800 px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out">
                {category}
              </button>
            ))}
          </div>
        </div>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out">
          <FiCreditCard className="mr-2" />
          Credits Left: 100 {/* Placeholder number */}
        </button>
      </div>
    );
};

export default TopBar;
