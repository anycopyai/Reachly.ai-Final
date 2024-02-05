import React from 'react'
import {HiOutlineDocumentChartBar} from "react-icons/hi2"
import{FaStar} from "react-icons/fa"
import Card from '../common/Card'

const Framework = () => {

    const Framework = [
        {
          icon1: <HiOutlineDocumentChartBar />,
          icon2: <FaStar />,
          heading: `AIDA Copywriting`,
          desc: `AIDA stands for attention, interest,desire, and action.Aida is a copywriting formula that's been around for more than a century.Learn how to use it effectively`,
        },
        {
            icon1: <HiOutlineDocumentChartBar />,
            icon2: <FaStar />,
            heading: `Pain Benefit Solution`,
            desc: `Pain Benefit Solution is classic copywriting formula to help you write better by identifying the pain, highlighting the benefit then offering a solution.`,
          },
      ];

  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
      <h1 className=' text-xl translate-x-6 ' >
      Framework
      </h1>
      {/*card*/}
    
        <div className=' flex  flex-wrap gap-4 mt-4  w-11/13 mx-auto'>
          {Framework?.map((data, index) => (
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

export default Framework