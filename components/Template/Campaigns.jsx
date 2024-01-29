import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineDehaze } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdOutlineTextsms } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";

const Campaigns = () => {
  const Campaigns = [
    {
      icon1: <GoTag />,
      icon2: <FaStar />,
      heading: `Taglines`,
      desc: `What's better than a catchy brand slogan? Not much. Create a new one in seconds.`,
    },
    {
        icon1: <FaUserCheck />
        ,
        icon2: <FaStar />,
        heading: `Lead Nurture Email`,
        desc: `Get the most out of your leads with our lead nurturing emails. Our emails are designed to keep your leads engaged and informed, so you can close more deals and boost your bottom line.`,
      },
      {
        icon1: <MdOutlineDehaze />,
        icon2: <FaStar />,
        heading: `Persuasive Bullet Points`,
        desc: `Turn a long text into an easy-to-digest list of bullet points. Just like that, you'll improve the likelihood of your readers getting the point.`,
      },
      {
        icon1: <TbWorld />        ,
        icon2: <FaStar />,
        heading: `Landing Page Copy`,
        desc: `Reimagine your landing page with limitless variations of new or existing copy.`,
      },
      {
        icon1: <MdOutlineTextsms />,
        icon2: <FaStar />,
        heading: `App/SMS Notifications`,
        desc: `Want to make sure your customers don't miss a beat? Send them notifications for your upcoming sales, updates and more.`,
      },
      {
        icon1: <IoKeyOutline />,
        icon2: <FaStar />,
        heading: `Catchy Hook`,
        desc: `Everyone needs a great catchy hook for their brand. This is a step between a tagline and a pitch.`,
      },
    
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
       Campaigns
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {Campaigns?.map((data, index) => (
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
  );
};

export default Campaigns;
