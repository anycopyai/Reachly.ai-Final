import React from 'react'
import {HiOutlineDocumentChartBar} from "react-icons/hi2"
import {IoSunnyOutline} from "react-icons/io5"
import{FaStar,FaTiktok,FaHeadphonesAlt} from "react-icons/fa"
import {FiBox} from "react-icons/fi"
import Card from '../common/Card'

const Brainstroming = () => {

    const Brainstroming = [
        {
          icon1: <HiOutlineDocumentChartBar />,
          icon2: <FaStar />,
          heading: `Viral Growth Ideas`,
          desc: `Your growth with dozens of original ideas just for your brand.`,
        },
        {
            icon1: <FaTiktok />,
            icon2: <FaStar />,
            heading: `TikTok Videos Ideas`,
            desc: `Looking a brainstrom video ideas to boost your followers? We've got you covered.`,
          },
          {
            icon1: <IoSunnyOutline />,
            icon2: <FaStar />,
            heading: `Blog Ideas`,
            desc: `You know you should write something. This template helps you take the first step towards an article.`,
          },
          {
            icon1: <IoSunnyOutline />,
            icon2: <FaStar />,
            heading: `Ad Ideas`,
            desc:`Need an ad idea? We've got your back.whether it's a specific product, a competitor,or a key demographic,we can help you spread the word about your brand with these ideas.`
          },
          {
            icon1: <FaHeadphonesAlt />,
            icon2: <FaStar />,
            heading: `Podcast Ideas`,
            desc:`Need some ideas on what to talk about on your next podcast? use this template to create a list of ideas to kick off your next epiosde.`
          },
          {
            icon1: <FiBox />,
            icon2: <FaStar />,
            heading: `New Product Ideas`,
            desc: `What's next for your company? Time to brainstorm some new product ideas.`,
          },
      ];

  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
      <h1 className=' text-xl translate-x-6 ' >
      Brain stroming
      </h1>
      {/*card*/}
    
        <div className=' flex  flex-wrap gap-4 mt-4  w-11/13 mx-auto'>
          {Brainstroming?.map((data, index) => (
            <div key={index}>
              <Card
                icon1={data?.icon1}
                icon2={data?.icon2}
                heading={data?.heading}
                desc={data?.desc}
              />
            </div>
          ))}
        </div>
      </div>
   
  )
}

export default Brainstroming