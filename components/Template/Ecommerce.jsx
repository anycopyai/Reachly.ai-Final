import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { FaAmazon } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { SiGoogleads } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";

const Ecommerce = () => {
  const AdCopy = [
    {
      icon1: <FiBox />,
      icon2: <FaStar />,
      heading: `Product Description`,
      desc: `Launching a new product? Let's couple it with a catchy product description.`,
    },
    {
        icon1: <IoKeyOutline />,
        icon2: <FaStar />,
        heading: `Catchy Descriptions`,
        desc: `If you're looking for a quick and easy way to improve your writing, then look no further than this attention-grabbing description of whatever you're writing about.`,
      },
      {
        icon1:    <LuShoppingBag />     ,
        icon2: <FaStar />,
        heading: `Product Name Generator`,
        desc: `Finding the perfect product name can feel like a tedious task, and a catchy product name is not easy to come by, until now.`,
      },
      {
        icon1: <SiGoogleads />,
        icon2: <FaStar />,
        heading: `Amazon Listings`,
        desc: `Quickly generate a dozen new titles for your latest product - ready to post on Amazon.`,
      },
      {
        icon1: <FaAmazon />,
        icon2: <FaStar />,
        heading: `Amazon Ads`,
        desc: `When that organic placement isn't cutting it on Amazon, it's time to boost those sales with our Amazon Ads template.`,
      },
      {
        icon1: <FiBox />,
        icon2: <FaStar />,
        heading: `New Product Ideas`,
        desc: `What's next for your company? Time to brainstorm some new product ideas.`,
      },
    
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
        E-commerce
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

export default Ecommerce;
