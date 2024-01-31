import React from 'react'
import { FaBook ,FaStar} from "react-icons/fa";
import Card from '../common/Card';

const Education = () => {
    const Education = [
        {
          icon1: <FaBook />,
          icon2: <FaStar />,
          heading: `E-book Title`,
          desc: `E-books are a greate way to read and learn nowadays Know what you want to say, but need a catchy title? Look no more.`,
        },
        {
            icon1: <FaBook />
            ,
            icon2: <FaStar />,
            heading: `Online Course Title`,
            desc: `What you name your course could be the key to your success.Differentiate yourself with this course title genrator.`,
          },
          {
            icon1: <FaBook />,
            icon2: <FaStar />,
            heading: `Online Course Outline`,
            desc: `Designing your course can be a tedious process,so let's start with the syllabus.`,
          },
          {
            icon1: <FaBook />        ,
            icon2: <FaStar />,
            heading: `Essay Outline`,
            desc: `When researching a new topic.it's important you start with a solid outline that you can then develop.`,
          },
        
      ];
  return (
    <div  className=' ml-28 mt-14  mx-auto w-11/12'>
    <h1 className=' text-xl translate-x-6 ' >
     Educations
    </h1>
    {/*card*/}
  
      <div className=' flex  flex-wrap  gap-4 mt-4 w-11/13 mx-auto'>
        {Education?.map((data, index) => (
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

export default Education