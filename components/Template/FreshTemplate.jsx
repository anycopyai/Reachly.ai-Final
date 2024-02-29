import React from 'react'
import Card from '../common/Card'
import { FaStar } from "react-icons/fa"
const FreshTemplate = () => {

  const FreshTemplate = [
    {
      icon1: "/images/icon-facebook.svg",
      icon2: <FaStar />,
      heading: `Facebook Ad (Short)`,
      desc: `Step into a world of diverse perspectives and foster inclusivity with our Inclusive Lens Generation Card.`,
      badge:<span className="px-2 py-1.5 bg-[#47BF67] text-xs text-white rounded-sm ml-2">New</span>
    },
    {
      icon1: "/images/icon-amazon.svg"
      ,
      icon2: <FaStar />,
      heading: `Amazon Ads`,
      desc: `Experience the ultimate convenience in crafting compelling paragraphs with our innovative Paragraph Generator.`,
      badge:<span className="px-2 py-1.5 bg-[#47BF67] text-xs text-white rounded-sm ml-2">New</span>
    },
    {
      icon1: "/images/icon-meta.svg",
      icon2: <FaStar />,
      heading: `Meta Description`,
      desc: `Short description about the title contents can be displayed here to give a glimpse for selection`,
      badge:<span className="px-2 py-1.5 bg-[#f0c103d9] text-xs text-white rounded-sm ml-2">Paid</span>
    }

  ];
  return (

    <div className="mt-5 p-8">
      <h1 className="section-title font-bold text-[#262626]">
        Fresh Template
      </h1>
      {/*card*/}
      <div className="container mx-auto mt-4 md:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {FreshTemplate?.map((data, index) => (
            <div key={index}>
              <Card
                icon1={data?.icon1}
                icon2={data?.icon2}
                heading={data?.heading}
                desc={data?.desc}
                badge={data?.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FreshTemplate