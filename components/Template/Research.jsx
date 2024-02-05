import React from 'react'
import {HiOutlineDocumentChartBar} from "react-icons/hi2"
import{FaStar} from "react-icons/fa"
import Card from '../common/Card'

const Research = () => {

    const Research = [
        {
          icon1: <HiOutlineDocumentChartBar />,
          icon2: <FaStar />,
          heading: `Market Research Survey`,
          desc: `Looking for a way to improve your business?Check out our market reerach survey!We'll Help you understand your target market and how to reach them..`,
        },
      
      ];

  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
      <h1 className=' text-xl translate-x-6 ' >
        Research
      </h1>
      {/*card*/}
    
        <div className=' flex  flex-wrap gap-4 mt-4  w-11/13 mx-auto'>
          {Research?.map((data, index) => (
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

export default Research