import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { LuCircle } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineDehaze } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const LandingPage = () => {
  const LandingPage = [
 
      {
        icon1: <LuCircle />,
        icon2: <FaStar />,
        heading: `Call to Action (CTA)`,
        desc: `A CTA is an essential part of any online campaign. Use a catchy CTA to encourage your audience to take specific actions.`,
      },
     
      {
        icon1: <TbWorld />,
        icon2: <FaStar />,
        heading: `Landing Page Copy`,
        desc: `Reimagine your landing page with limitless variations of new or existing copy.`,
      },
      {
        icon1: <TbWorld />,
        icon2: <FaStar />,
        heading: `Header + Description`,
        desc: `Quickly create dozens of new headlines and descriptions for your website.`,
      },
      {
        icon1: <TbWorld />,
        icon2: <FaStar />,
        heading: `Features`,
        desc: `What features should you highlight? Always a tricky decision. This template helps your pick from the best of the bunch.`,
      },
      {
        icon1: <TbWorld />,
        icon2: <FaStar />,
        heading: `Benfits`,
        desc: `Why is your company important to your customers? Tell them with the Benefits template.`,
      },
      {
        icon1: <MdOutlineDehaze />,
        icon2: <FaStar />,
        heading: `Meta Descriptions`,
        desc: `A great meta description is the first step in SEO greatness - plus it helps your links look polished in Slack!`,
      },
      {
        icon1: <FaUserCheck />,
        icon2: <FaStar />,
        heading: `Lead Nurture Email`,
        desc: `Get the most out of your leads with our lead nurturing emails. Our emails are designed to keep your leads engaged and informed, so you can close more deals and boost your bottom line.`,
      },
     
    
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
      Landing Pages
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {LandingPage?.map((data, index) => (
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

export default LandingPage;
