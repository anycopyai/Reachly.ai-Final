import React from 'react'
import {MdWork} from "react-icons/md"
import { FaLinkedin ,FaHeart,FaPenNib,FaStar} from "react-icons/fa";
import { GiHook } from "react-icons/gi";
import { IoKeySharp } from "react-icons/io5";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import Card from '../common/Card'

const Bussiness = () => {
  return (
    <div className='ml-28 mt-14  mx-auto w-11/12'>
    <h1 className=' text-xl translate-x-6 '>Business</h1>
    {/*card*/}
    <div className=' flex  flex-wrap  gap-4 mt-4  w-11/13 mx-auto'>
        <Card  icon1={<MdWork />} icon2={<FaStar />} heading={"Comapny Bio"}  desc={"We bileve that every business has a story. We want to help businesses tell thier story, sl let's help you find the right words."}/>
        <Card  icon1={<FaLinkedin />} icon2={<FaStar />} heading={"Linkedin Bio"} desc={"looking a update your Linkeldn Bio ? We can help we make it easier to distill all of your accomplinshments into a short, snappy bio."}/>
        <Card  icon1={<GiHook />} icon2={<FaStar />} heading={"Taglines"} desc={"What's better than a catchy brand slogan ? Not much . Create a new one in seconds."}/>
        <Card  icon1={<IoKeySharp />} icon2={<FaStar />} heading={"Catchy Hook"} desc={"Everyone need a great catchy hook for thier brands This is a between a tagline and a pitch."}/>
        <Card  icon1={<FaHeart />} icon2={<FaStar />} heading={"Misson Statment"} desc={"What's the true goal of your brand ? Help Brainstorm for answers with the mission statment template."}/>
        <Card  icon1={<FaPenNib />} icon2={<FaStar />} heading={"Brand Statment"} desc={"Distill your brand's essence down to a single simple brand statment in seconds."}/>
        <Card  icon1={<FaHeart />} icon2={<FaStar />} heading={"Company Value"} desc={"Core values are what guide people and reflect how they should behave They help your company value with right decisions."}/>
        <Card  icon1={<HiOutlineDocumentChartBar />} icon2={<FaStar />} heading={"Market Research Survey"} desc={"Looking for a way to improve your business?Check out our market reerach survey!We'll Help you understand your target market and how to reach them."}/>
    </div>
</div>
  )
}

export default Bussiness