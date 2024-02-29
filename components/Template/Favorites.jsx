import React from 'react'
import Card from '../common/Card'
import {FaStar} from "react-icons/fa"

const Favorites = () => {
  return (
    <div className='mt-5 p-8'>
        <h1 className='section-title font-bold text-[#262626]'>Favorites</h1>
        {/*card*/}
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-10 w-11/13 mx-auto'>
        <Card icon1={"/images/icon-google-ads.svg"} icon2={<FaStar />} heading={"Google ads"} desc={"Create an effective Google Ads with a compelling and concise description that grabs the attention of your target audience"} />
        <Card icon1={"/images/icon-landing-page.svg"} icon2={<FaStar />} heading={"Landing Page"} desc={"Create To convey a compelling message that captures the visitor's attention and encourages them to take a desired action. "} />
        <Card icon1={"/images/icon-facebook.svg"} icon2={<FaStar />} heading={"Facebook Ads"} desc={"Crafting a concise and engaging description for a Facebook ad for target user."} />
        <Card icon1={"/images/icon-linkedin.svg"} icon2={<FaStar />} heading={"LinkedIn Ads Copy"} desc={"Create catchy headlines for cards with a balance of creativity, clarity, and relevance to grab the reader's attention."} />
        <Card icon1={"/images/icon-paragraph.svg"} icon2={<FaStar />} heading={"Paragraph Generator"} desc={"Experience the ultimate convenience in crafting compelling paragraphs with our innovative Paragraph Generator."} />
        <Card icon1={"/images/icon-keyword.svg"} icon2={<FaStar />} heading={"Keyword Generator"} desc={"Short description about the title contents can be displayed here to give a glimpse for selection"} />
        <Card icon1={"/images/icon-social-media.svg"} icon2={<FaStar />} heading={"Social Media Post"} desc={"Unleash the power of connectivity with the Social media card designed for the tech-savvy and socially inclined"} />
      </div>
    </div>
  )
}

export default Favorites