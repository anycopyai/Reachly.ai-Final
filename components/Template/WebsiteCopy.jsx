import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { LuCircle } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineDehaze } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FiCloudSnow } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";

const WebsiteCopy = () => {
  const WebsiteCopy = [
    {
      icon1: <LuCircle />,
      icon2: <FaStar />,
      heading: `Call to Action (CTA)`,
      desc: `A CTA is an essential part of any online campaign. Use a catchy CTA to encourage your audience to take specific actions.`,
    },
    {
      icon1: <TbWorld />,
      icon2: <FaStar />,
      heading: `Header + Description`,
      desc: `Quickly create dozens of new headlines and descriptions for your website.`,
    },
    {
      icon1: <IoKeyOutline />,
      icon2: <FaStar />,
      heading: `Catchy Descriptions`,
      desc: `If you're looking for a quick and easy way to improve your writing, then look no further than this attention-grabbing description of whatever you're writing about.`,
    },
    {
      icon1: <TbWorld />,
      icon2: <FaStar />,
      heading: `Features`,
      desc: `What features should you highlight? Always a tricky decision. This template helps your pick from the best of the bunch.`,
    },
    {
      icon1: <FiCloudSnow />,
      icon2: <FaStar />,
      heading: `Describe The Problem`,
      desc: ` Need help describing some of the pain points your customers are facing? Tell us what they are and we'll help you describe the problem`,
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
      icon1: <TbWorld />,
      icon2: <FaStar />,
      heading: `Funny 404 Pages`,
      desc: `Instead of another boring 404 page, how about a fun way to let visitors know that their link didn't work?`,
    },

    {
      icon1: <FaUserCheck />,
      icon2: <FaStar />,
      heading: `Review Responder`,
      desc: `Responding to customer reviews is KEY! Showcase how committed your brand is to keeping communication channels open.`,
    },
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
        Website Copy
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {WebsiteCopy?.map((data, index) => (
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

export default WebsiteCopy;
