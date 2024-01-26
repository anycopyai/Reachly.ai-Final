import React, { useState } from 'react';

// Import other category components as needed

const categories = {
  All: null,
  Favorites: null,
  FreshTemplate:null,
  EveryDayTools: null,
  Blog: null,
  AdCopy: null,
  E_commerce: null,
  Campaigns: null,
  LandingPages: null,
  WebsiteCopy: null,
  SalaeCopy: null,
  SocialMedia: null,
  Emails: null,
  Video: null,
  Business: null,
  Branding: null,
  Education: null,
  Pr_Media: null,
  Reserach: null,
  HumanResources: null,
  FrameWorks: null,
  Brainstorming: null,
  InvistorPitch: null,
  // Add more categories and associate them with their respective components
};

const MainContent = () => {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [favorites, setFavorites] = useState(new Set());

  const CategoryComponent = categories[currentCategory];

  return (
    <main className="flex-1 overflow-hidden p-10 bg-white">
      <div className="flex mb-6 mx-auto border border-red-300">
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
      {CategoryComponent && <CategoryComponent favorites={favorites} />}
    </main>
  );
};

export default MainContent;
