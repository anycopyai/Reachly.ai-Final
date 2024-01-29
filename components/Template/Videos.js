import React from 'react'
import { FaVideo,FaTiktok,FaYoutube,FaStar } from "react-icons/fa";
import Card from '../common/Card'

const Videos = () => {
  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
        <h1 className=' text-xl translate-x-6 '>Videos</h1>
        {/*card*/}
        <div className=' flex  flex-wrap gap-4 mt-4 w-11/13 mx-auto '>
            <Card  icon1={<FaVideo />} icon2={<FaStar />} heading={"Video Script"}  desc={"Create a video script in minutesjust enter some basic information about your video and the template does the rest."}/>
            <Card  icon1={<FaYoutube />} icon2={<FaStar />} heading={"Youtube Description Intro"} desc={"Helps brainstorm ideas for your Youtube channel's intro."}/>
            <Card  icon1={<FaTiktok />} icon2={<FaStar />} heading={"TikTok Videos Ideas"} desc={"Looking a brainstrom video ideas to boost your followers? We've got you covered."}/>
            
        </div>
    </div>
  )
}

export default Videos