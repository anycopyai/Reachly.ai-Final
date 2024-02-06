import React, { useState } from 'react'
import Favorites from './Favorites';
import FreshTemplate from './FreshTemplate';
import Education from './Education';
import EveryDayTools from './EveryDayTools';
import Ecommerce from './Ecommerce';
import Campaigns from './Campaigns';
import HumanResources from "./HumanResources"
import Research from "./Research"
import LandingPage from "./LandingPage"
import Bussiness from "./Bussiness"
import Blog from './Blog';
const Index = ({clicke}) => {
    const clicked=clicke?.category
    console.log("click",clicke)
  return (
    <div>
           {
             clicked==='favourites' || clicked==="ALL" && (
                <Favorites/>
             )
           }
           {
             clicked==='fresh' || clicked==="all" && (
                <FreshTemplate/>
             )
           }
           {
             clicked==='business' || clicked==="all" && (
                <Bussiness/>
             )
           }
           {
             clicked==='education' || clicked==="all" && (
                <Education/>
             )
           }
           {
             clicked==='everydayTool' || clicked==="all" && (
                <EveryDayTools/>
             )
           }
           {
             clicked==='Ecommerce' || clicked==="all" && (
                <Ecommerce/>
             )
           }
           {
             clicked==='blog' || clicked==="all" && (
                <Blog/>
             )
           }
           {
             clicked==='campaign' || clicked==="all" && (
                <Campaigns/>
             )
           }
           {
             clicked==='human' || clicked==="all" && (
                <HumanResources/>
             )
           }
           {
             clicked==='research' || clicked==="all" && (
                <Research/>
             )
           }
           {
             clicked==='video' || clicked==="all" && (
                <video/>
             )
           }
           {
             clicked==='landing' || clicked==="all" && (
                <LandingPage/>
             )
           }
    </div>
  )
}

export default Index