import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import WriterComponent from './WriterComponent';
import GoogleCopyComponent from './GoogleCopyComponent';
import FacebookCopyComponent from './FacebookCopyComponent';

const categories = {
  writer: WriterComponent,
  googleCopy: GoogleCopyComponent,
  facebookCopy: FacebookCopyComponent,
  // add more categories as needed
};

const MainContent = () => {
  const [currentCategory, setCurrentCategory] = useState('writer');
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
        deleteDoc(doc(db, "favorites", id));
      } else {
        updatedFavorites.add(id);
        setDoc(doc(db, "favorites", id), {});
      }
      return updatedFavorites;
    });
  };

  const CategoryComponent = categories[currentCategory];

  return (
    <main className="flex-1 overflow-y-auto p-10 bg-[#F3F6FC]">
      <div className="flex space-x-4 mb-6">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`px-4 py-2 rounded-md ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      {/* Render the selected category component */}
      <CategoryComponent favorites={favorites} toggleFavorite={toggleFavorite} />
    </main>
  );
};

export default MainContent;
