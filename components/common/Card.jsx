import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

const Card = ({ icon1, icon2, heading, desc, badge, url, data }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-md shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-101 hover:bg-gray-100 p-4"
      onClick={() => router.push({
          pathname: `/${url}`,
          query: {
            heading: heading,
            data: JSON.stringify({
              favorites: data?.favorites,
              extrafields: data?.Extrafields,
            }),
          },
        })
      }
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image src={icon1} alt="icon" width={40} height={40} className="rounded-full" />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">
            {heading}
            <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">
              {badge}
            </span>
          </h3>
          <p className="text-gray-500 text-sm mt-1">{desc}</p>
        </div>
        <div className="flex-shrink-0 self-center">
          <span className="text-lg text-yellow-500">{icon2}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
