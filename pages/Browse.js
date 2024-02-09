// pages/Browse.js
import React from 'react';
import Sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent'; // Corrected import path
import Card from '../components/common/Card';
import {FaHashtag} from "react-icons/fa"
import Favorites from '../components/Template/Favorites';
import FreshTemplate from '../components/Template/FreshTemplate';
import EveryDayTools from '../components/Template/EveryDayTools';
import Blog from '../components/Template/Blog';
import AdCopy from '../components/Template/AdCopy';
import Ecommerce from '../components/Template/Ecommerce';
import Campaigns from '../components/Template/Campaigns';
import withAuth from '../hoc/withAuth';
const Browse = () => {
  
  return (
    <div className="flex  h-fit ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className=" flex   flex-col h-fit " style={{backgroundColor:'#ffffff'}}>
        <TopBar />
     
         {/* <Favorites/>
         <FreshTemplate/> */}
         <EveryDayTools />
         <Blog />
         <AdCopy />
         <Ecommerce />
         <Campaigns />
      </div>
    </div>
  );
};

export default withAuth(Browse);
