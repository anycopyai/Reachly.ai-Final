import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Image from 'next/image';

const Card = ({
  icon1,
  icon2,
  heading,
  desc,
  badge,
  url,
  data,
  placeholder,
}) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Wait for the animation to finish before navigating
    setTimeout(() => {
      setIsClicked(false); // reset the clicked state
      router.push({
        pathname: `/${url}`,
        query: {
          heading: heading,
          data: JSON.stringify({
            favorites: data?.favorites,
            extrafields: data?.Extrafields,
          }),
        },
      });
    }, 200); // duration of the animation
  };

  return (
    <>
      <div
        className={`bg-white rounded-md shadow transition duration-200 ease-in-out cursor-pointer p-4 ${isClicked ? 'animate-clicked' : 'hover:shadow-lg'}`}
        onClick={handleClick}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Image src={icon1} alt="icon" width={40} height={40} className="rounded-full" />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">
              {heading}
              {badge && (
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">
                  {badge}
                </span>
              )}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{desc}</p>
          </div>
          {icon2 && (
            <div className="flex-shrink-0 self-center">
              <span className="text-lg text-yellow-500">{icon2}</span>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes clickEffect {
          0%, 100% {
            background-color: #fff;
            transform: scale(1);
          }
          50% {
            background-color: #f0f0f0;
            transform: scale(0.98);
          }
        }
        .animate-clicked {
          animation: clickEffect 200ms ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default Card;
