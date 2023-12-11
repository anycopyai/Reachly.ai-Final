// components/FacebookCopyComponent.js
import React from 'react';
import Link from 'next/link';
import { FiFacebook } from 'react-icons/fi';

const FacebookCopyComponent = () => {
  return (
    <div className="relative">
      <Link href='/facebook-copy' passHref>
        <a className="bg-white p-6 rounded-lg shadow-sm transition-shadow duration-300 ease-in-out cursor-pointer h-40 flex flex-col justify-between border-2 border-transparent hover:border-blue-600">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
              <FiFacebook className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Facebook Copy</h3>
              <p className="text-sm text-gray-600 mt-1">Craft engaging content for Facebook Ads.</p>
            </div>
          </div>
        </a>
      </Link>
      {/* Favorite icon and logic here */}
    </div>
  );
};

export default FacebookCopyComponent;
