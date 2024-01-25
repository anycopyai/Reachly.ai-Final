// pages/Browse.js
import React from 'react';
import Sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent'; // Corrected import path
import Card from '../components/common/Card';
import {FaHashtag} from "react-icons/fa"
const Browse = () => {
  return (
    <div className="flex h-screen ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className=" flex w-[100%] flex-col border border-red-800">
        <TopBar />
         
      </div>
    </div>
  );
};

export default Browse;
