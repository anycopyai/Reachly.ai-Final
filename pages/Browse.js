// If you're using React hooks or other features, you should uncomment the import below
import React from 'react';
import ReactTooltip from 'react-tooltip';

import sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent';

const Browse = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <MainContent />
      </div>
    </div>
  );
};

export default Browse;
