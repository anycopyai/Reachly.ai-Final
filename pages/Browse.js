// pages/Browse.js
import React from 'react';
import Sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent'; // Corrected import path
import Card from '../components/common/Card';
import {FaHashtag} from "react-icons/fa"
import Favorites from '../components/Template/Favorites';
import FreshTemplate from '../components/Template/FreshTemplate';
const Browse = () => {
  return (
    <div className="flex  h-fit ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className=" flex   flex-col h-fit ">
        <TopBar />
         {/*templates*/}
         <Favorites/>
         <FreshTemplate/>
      </div>
    </div>
  );
};

export default Browse;
