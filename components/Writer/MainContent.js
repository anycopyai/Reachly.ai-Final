// components/MainContent.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiFileText, FiFacebook, FiGlobe, FiStar } from 'react-icons/fi';
import { db } from '../../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

const initialCardData = [
  { id: 'writer', title: 'Writer', description: 'Compose blog posts, emails, and poems effortlessly.', Icon: FiFileText, link: '/writer' },
  { id: 'googleCopy', title: 'Google Copy', description: 'Create compelling ad copy for Google Ads.', Icon: FiGlobe, link: '/google-copy' },
  { id: 'facebookCopy', title: 'Facebook Copy', description: 'Craft engaging content for Facebook Ads.', Icon: FiFacebook, link: '/facebook-copy' },
  // Add more cards as needed
];

const MainContent = () => {
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
      // Fetch favorites from Firestore
      const fetchFavorites = async () => {
          const querySnapshot = await getDocs(collection(db, "favorites"));
          const favs = new Set();
          querySnapshot.forEach((doc) => {
              favs.add(doc.id);
          });
          setFavorites(favs);
      };

      fetchFavorites();
  }, []);

  const toggleFavorite = (id) => {
      setFavorites(prevFavorites => {
          const updatedFavorites = new Set(prevFavorites);
          if (updatedFavorites.has(id)) {
              updatedFavorites.delete(id);
              deleteDoc(doc(db, "favorites", id)); // Perform Firestore update in the background
          } else {
              updatedFavorites.add(id);
              setDoc(doc(db, "favorites", id), {}); // Perform Firestore update in the background
          }
          return updatedFavorites;
      });
  };

    return (
        <main className="flex-1 overflow-y-auto p-10 bg-[#F3F6FC]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {initialCardData.map(({ id, title, description, Icon, link }) => (
                    <div key={id} className="relative">
                        <Link href={link} passHref>
                            <a className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out cursor-pointer h-40 flex flex-col justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                                        <Icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{description}</p>
                                    </div>
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
        </main>
    );
};

export default MainContent;
