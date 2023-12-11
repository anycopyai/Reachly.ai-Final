import React from 'react';
import Link from 'next/link';
import { FiGlobe, FiStar } from 'react-icons/fi';

const GoogleCopyComponent = ({ favorites, toggleFavorite }) => {
  const googleCopyCards = [
    { id: '1', title: 'Google Copy', description: 'Create compelling ad copy for Google Ads.', link: '/google-copy' },
    { id: '2', title: 'Ad Analytics', description: 'Analyze ad performance.', link: '/ad-analytics' },
    { id: '3', title: 'Keyword Research', description: 'Find the right keywords for your ads.', link: '/keyword-research' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {googleCopyCards.map(({ id, title, description, link }) => (
        <div key={id} className="relative bg-white p-6 rounded-lg shadow-sm transition-shadow duration-300 ease-in-out cursor-pointer h-40 flex flex-col justify-between border-2 border-transparent hover:border-blue-600">
          <Link href={link} passHref>
            <a className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                <FiGlobe className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              </div>
            </a>
          </Link>
          <FiStar 
            className={`absolute top-2 right-2 cursor-pointer ${favorites.has(id) ? 'text-yellow-500' : 'text-gray-400'}`} 
            onClick={(e) => { e.stopPropagation(); toggleFavorite(id); }} 
          />
        </div>
      ))}
    </div>
  );
};

export default GoogleCopyComponent;
