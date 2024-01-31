// pages/Browse.js
import React from 'react';
import Sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent'; // Corrected import path
import Card from '../components/common/Card';
import {FaHashtag} from "react-icons/fa"
import Favorites from '../components/Template/Favorites';
import FreshTemplate from '../components/Template/FreshTemplate';
import Emails from '../components/Template/Emails';
import Bussiness from '../components/Template/Bussiness';
import Branding from '../components/Template/Branding';
import Videos from '../components/Template/Videos';
import Education from '../components/Template/Education';
import Research from '../components/Template/Research';
import HumanResources from '../components/Template/HumanResources';
import Brainstroming from '../components/Template/Brainstroming';
import Framework from '../components/Template/Framework';
const Browse = () => {
  return (
    <div className="flex  h-fit ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className=" flex   flex-col h-fit ">
        <TopBar />
         {/*templates*/}
         <Favorites/>
         <FreshTemplate/>
         <Emails/>
         <Videos/>
         <Bussiness/>
         <Branding/>
         <Education/>
         <Research/>
         <HumanResources/>
         <Brainstroming/>
         <Framework/>
      </div>
    </div>
  );
};

export default Browse;
