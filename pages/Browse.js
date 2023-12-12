// pages/Browse.js
import React from 'react';
import Sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent'; // Corrected import path

const Browse = () => {
  return (
    <div className="flex h-screen ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <MainContent />
      </div>
    </div>
  );
};

export default Browse;
