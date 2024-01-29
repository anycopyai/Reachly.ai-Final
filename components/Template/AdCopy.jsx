import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { HiMiniSignal } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";

const AdCopy = () => {
  const AdCopy = [
    {
      icon1: <SiGoogleads />,
      icon2: <FaStar />,
      heading: `Google Ads`,
      desc: `Create Google Ads from scratch with exact requirements and layout required for use.`,
    },
    {
      icon1: <FaFacebook />,
      icon2: <FaStar />,
      heading: `Facebook Ads`,
      desc: `A limitless supply of original Facebook Ad copy.`,
    },
    {
      icon1: <FaFacebook />,
      icon2: <FaStar />,
      heading: `Facebook Ad Headlines`,
      desc: `Capture more with compelling Facebook Headlines, capped at 40 characters per Facebook Ad guidelines.`,
    },
    {
      icon1: <FaFacebook />,
      icon2: <FaStar />,
      heading: `Facebook Ad (short)`,
      desc: `Looking for a new way to connect with your customers? These snappy Facebook ads are the perfect way to reach out to your target audience.`,
    },
    {
      icon1: <FaFacebook />,
      icon2: <FaStar />,
      heading: `Facebook Ad (medium)`,
      desc: `Looking for a new way to connect with your customers? These Facebook ads give a bit more context and are the perfect way to reach out to your target audience.`,
    },
    {
      icon1: <FaFacebook />,
      icon2: <FaStar />,
      heading: `Facebook Ad Primary Text`,
      desc: `Write evoking and inspiring text with with the Facebook Primary Text template, capped at 125 characters per Facebook Ad guidelines.`,
    },
    {
      icon1: <FaLinkedin />,
      icon2: <FaStar />,
      heading: `Linkedin Text Ads`,
      desc: `Start building out that B2B marketing campaign with these LinkedIn Text Ads.`,
    },
    {
      icon1: <FaAmazon />,
      icon2: <FaStar />,
      heading: `Amazon Ads`,
      desc: `When that organic placement isn't cutting it on Amazon, it's time to boost those sales with our Amazon Ads template.`,
    },
    {
      icon1: <HiMiniSignal />,
      icon2: <FaStar />,
      heading: `Ad Ideas`,
      desc: `Need an ad idea? We've got your back. Whether it's a specific product, a competitor, or a key demographic, we can help you spread the word about your brand with these ideas.`,
    },
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
        Ad Copy
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {AdCopy?.map((data, index) => (
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

export default AdCopy;
