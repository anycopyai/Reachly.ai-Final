import React from 'react'
import {HiOutlineDocumentChartBar} from "react-icons/hi2"
import{FaStar} from "react-icons/fa"
import Card from '../common/Card'

const HumanResources = () => {

    const HumanResources = [
        {
          icon1: <HiOutlineDocumentChartBar />,
          icon2: <FaStar />,
          heading: `Recruitment Interview Questions`,
          desc: `Not sure what to ask you candidates? Or need help preparing for an interview? prepare a set of questions that recruiters might ask.`,
        },
        {
            icon1: <HiOutlineDocumentChartBar />,
            icon2: <FaStar />,
            heading: `Positive Feedback`,
            desc: `Recognizing employees mean acknowledging and apprecating thire efforts in the workplace,both professionally and personally.`,
          },
      ];

  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
      <h1 className=' text-xl translate-x-6 ' >
        Human Resources
      </h1>
      {/*card*/}
    
        <div className=' flex  flex-wrap gap-4 mt-4  w-11/13 mx-auto'>
          {HumanResources?.map((data, index) => (
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

export default HumanResources