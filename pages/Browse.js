// pages/Browse.js
import React, { useEffect } from 'react';
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
import LandingPage from '../components/Template/LandingPage';
import WebsiteCopy from '../components/Template/WebsiteCopy';
import SalesCopy from '../components/Template/SalesCopy';
import SocialMedia from '../components/Template/SocialMedia';
import apiService from '../services/base';


const Browse = () => {
  const postData = {
  "newsStory":"covid",
  "KeyFacts":"covid 2020",
  "Theme":"for covid",
  "name":"amit",
  "position":"developer"}
  useEffect(()=>{
    console.log('bhjbjhbh');
    apiService.post('/press-release', postData)
    .then(response => {
      console.log('POST Request Successful:', response.data);
      // Handle the response data here
    })
    .catch(error => {
      console.error('Error in POST Request:', error);
      // Handle the error here
    });
  },[])
  return (
    <div className="flex  h-fit ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className=" flex   flex-col h-fit ">
        <TopBar />
         {/*templates*/}
         <Favorites/>
         <FreshTemplate/>
         <EveryDayTools />
         <Blog />
         <AdCopy />
         <Ecommerce />
         <Campaigns />
         <LandingPage />
         <WebsiteCopy />
         <SalesCopy />
         <SocialMedia />
      </div>
    </div>
  );
};

export default Browse;
