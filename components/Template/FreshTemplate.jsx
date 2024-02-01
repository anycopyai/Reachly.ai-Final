import React from 'react'
import Card from '../common/Card'
import {FaSearchPlus,FaStar,FaFacebook} from "react-icons/fa"
import{TbWorld} from "react-icons/tb"
import {MdOutlineDehaze,MdOutlineTextsms} from "react-icons/md"
import {IoKeyOutline} from "react-icons/io5"
const FreshTemplate = () => {

  const FreshTemplate = [
    {
      icon1: <FaSearchPlus />,
      icon2: <FaStar />,
      heading: `Inclusive Lens`,
      desc: `Obtain critique and suggested alternatives for user-written text, from an inclusive , anti-bias and anti-sterotype lens..`,
    },
    {
        icon1: <FaSearchPlus />
        ,
        icon2: <FaStar />,
        heading: `Paragraph Genrator`,
        desc: `With our paragraph genrator,you can easily create well-written and informative paragraphs,With just a few clicks, you can genrate a custom paragraph that cover all the key points you need to communicate.`,
      },
      {
        icon1: <MdOutlineDehaze />,
        icon2: <FaStar />,
        heading: `Lead Nurture Email`,
        desc: `Get the most out of your leads with our lead nurturning emails . Our emails are designed to keep your leads engaged and informed , so you can close more deals and boost your bottom line.`,
      },
      {
        icon1: <TbWorld />        ,
        icon2: <FaStar />,
        heading: `Social Media Post`,
        desc: `Need help coming up with a social media post that will grab attention and get engagement? look No Further!Write a thumb stopper in second.`,
      },
      {
        icon1: <MdOutlineTextsms />,
        icon2: <FaStar />,
        heading: `Keyword Genrator`,
        desc: `Looking for keywords for your posts? we can find them for you we'll suggest related keywords so you can be optimizing in a fraction of the time.`,
      },
      {
        icon1: <IoKeyOutline />,
        icon2: <FaStar />,
        heading: `Positive Feedback`,
        desc: `Recognizing employees means acknowledging and appreciating thier efforts in the workplace, both professionally and personally.`,
      },
    
  ];
  return (
 
    <div className=" mt-8  mx-auto w-11/12">
    <h1 className=" text-xl" style={{ marginBottom: 30 }}>
          Fresh Template
    </h1>
    {/*card*/}
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
        {FreshTemplate?.map((data, index) => (
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
  </div>
  )
}

export default FreshTemplate