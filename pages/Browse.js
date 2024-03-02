// pages/Browse.js
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent'; // Corrected import path
import Card from '../components/common/Card';
import { FaHashtag } from "react-icons/fa"
import Favorites from '../components/Template/Favorites';
import FreshTemplate from '../components/Template/FreshTemplate';
import EveryDayTools from '../components/Template/EveryDayTools';
import Blog from '../components/Template/Blog';
import AdCopy from '../components/Template/AdCopy';
import Ecommerce from '../components/Template/Ecommerce';
import Campaigns from '../components/Template/Campaigns';
import withAuth from '../hoc/withAuth';
const Browse = () => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('All');
  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setFilter("All")
  }

  return (
    <div className="flex h-fit ml-0 md:ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col h-fit p-4 md:p-6 bg-white w-full md:w-auto">
        <TopBar setFilter={setFilter} handleSearch={handleSearch} search={search}/>
       {(filter==='All' || filter==='Favorites') && <Favorites search={search} />}
       {(filter==='All' || filter==='Fresh Template') && <FreshTemplate search={search} />}
        {/* <EveryDayTools />
         <Blog />
         <AdCopy />
         <Ecommerce />
         <Campaigns /> */}
      </div>
    </div>
  );
};

export default withAuth(Browse);
