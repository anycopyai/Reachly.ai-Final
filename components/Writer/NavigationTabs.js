import React from 'react';

const NavigationTabs = ({ activeTab, handleTabClick }) => {
  return (
    <nav className="flex space-x-4" aria-label="Tabs">
      <TabButton
        label="Personal"
        isActive={activeTab === 'personal'}
        onClick={() => handleTabClick('personal')}
      />
      <TabButton
        label="Subscription"
        isActive={activeTab === 'subscription'}
        onClick={() => handleTabClick('subscription')}
      />
      <TabButton
        label="Projects"
        isActive={activeTab === 'projects'}
        onClick={() => handleTabClick('projects')}
      />
    </nav>
  );
};

const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 font-medium text-sm rounded-t-lg border-b-2 ${
      isActive ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`}
  >
    {label}
  </button>
);

export default NavigationTabs;
