import React from 'react'
import {IoMailSharp} from "react-icons/io"
import {FaStar} from "react-icons/fa"
import Card from '../common/Card';
const InvestorPitch = () => {

    const InvestorPitch = [
        {
          icon1: <IoMailSharp />,
          icon2: <FaStar />,
          heading: `Pitch a AV`,
          desc: `Ready to grab that a round? Try Out the Pitch a VC tenplate for some inspiration`,
        },
        {
            icon1: <IoMailSharp />,
            icon2: <FaStar />,
            heading: `Pitch a AV`,
            desc: `just starting out and could use a little kickstart to your seed round ? try Pitching Angel Investor with this template..`,
          },
        
      ];
  return (
    <div className=' ml-28 mt-14  mx-auto w-11/12'>
      <h1 className=' text-xl translate-x-6 ' >
      Investor Pitch
      </h1>
      {/*card*/}
    
        <div className=' flex  flex-wrap gap-4 mt-4  w-11/13 mx-auto'>
          {InvestorPitch?.map((data, index) => (
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

export default InvestorPitch