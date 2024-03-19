import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
const FreshTemplate = ({ search }) => {
  const FreshTemplate = [
    {
      icon1: "/images/icon-facebook.svg",
      icon2: <FaStar />,
      heading: `Facebook Ad (Short)`,
      desc: `Step into a world of diverse perspectives and foster inclusivity with our Inclusive Lens Generation Card.`,
      badge: (
        <span className="px-2 py-1.5 bg-[#47BF67] text-xs text-white rounded-sm ml-2">
          New
        </span>
      ),
      url: "facebook-ad-short",
      favorites: false,
      Extrafields: [
        {
          label: "Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-amazon.svg",
      icon2: <FaStar />,
      heading: `Amazon Ads`,
      desc: `Experience the ultimate convenience in crafting compelling paragraphs with our innovative Paragraph Generator.`,
      badge: (
        <span className="px-2 py-1.5 bg-[#47BF67] text-xs text-white rounded-sm ml-2">
          New
        </span>
      ),
      url: "amazon-ads",
      favorites: false,
      Extrafields: [
        {
          label: "Product",
          type: "textArea",
          placeholder: "product you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `URL to Ads`,
      desc: `Unleash the power of connectivity with the URL to Ads card designed for the tech-savvy and socially inclined`,
      badge: (
        <span className="px-2 py-1.5 bg-[#f0c103d9] text-xs text-white rounded-sm ml-2">
          Paid
        </span>
      ),
      url: "url-to-ads",
      favorites: false,
      Extrafields: [
        {
          label: "Website/Landing page URL",
          type: "textArea",
          placeholder: "Anycopy.com",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `AIDA Copywriting`,
      desc: `Unleash the power of connectivity with the AIDA Frameworks card designed for the tech-savvy and socially inclined`,
      url: "aida-copywriting",
      favorites: true,
      Extrafields: [
        {
          label: "Purpose",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Cold Emails`,
      desc: `Unleash the power of connectivity with the Cold Email Copy card designed for the tech-savvy and socially inclined`,
      url: "cold-emails",
      favorites: true,
      Extrafields: [
        {
          label: "Page Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `RACE Copywriting`,
      desc: `Unleash the power of connectivity with theRACE Copywriting card designed for the tech-savvy and socially inclined`,
      url: "race-copywriting",
      favorites: true,
      Extrafields: [
        {
          label: "Page Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: ` Header & Description`,
      desc: `Unleash the power of connectivity with theRACE Copywriting card designed for the tech-savvy and socially inclined`,
      url: "header-description",
      favorites: true,
      Extrafields: [
        {
          label: "Page Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Product Description`,
      desc: `Unleash the power of connectivity with the Product Description card designed for the tech-savvy and socially inclined`,
      url: "product-description",
      favorites: true,
      Extrafields: [
        {
          label: "Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Features`,
      desc: `Unleash the power of connectivity with the Features card designed for the tech-savvy and socially inclined`,
      url: "features",
      favorites: true,
      Extrafields: [
        {
          label: "Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Pitch an angel`,
      desc: `Unleash the power of connectivity with the Pitch an angel card designed for the tech-savvy and socially inclined`,
      url: "pitch-an-angel",
      favorites: true,
      Extrafields: [
        {
          label: "Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Sales outreach`,
      desc: `Unleash the power of connectivity with the Pitch an angel card designed for the tech-savvy and socially inclined`,
      url: "sales-outreach",
      favorites: true,
      Extrafields: [
        {
          label: "Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    {
      icon1: "/images/icon-social-media.svg",
      icon2: <FaStar />,
      heading: `Blog Ideas`,
      desc: `Unleash the power of connectivity with the Blog Ideas card designed for the tech-savvy and socially inclined`,
      url: "blog-ideas",
      favorites: true,
      Extrafields: [
        {
          label: "Topic",
          type: "textArea",
          placeholder: "Topic you provide",
          maxLength: 75,
          value: "",
        },
      ],
    },
    
    
    
    
  ];
  return (
    <div className="mt-5 p-0 md:p-8">
      {FreshTemplate?.filter((el) =>
        el.heading.toLowerCase().includes(search.toLowerCase())
      ).length > 0 && (
        <h1 className="section-title font-bold text-[#262626]">
          Fresh Template
        </h1>
      )}
      {/*card*/}
      <div className="mt-4 md:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {FreshTemplate?.filter((el) =>
            el.heading.toLowerCase().includes(search.toLowerCase())
          )?.map((data, index) => (
            <div key={index}>
              <Card
                icon1={data?.icon1}
                icon2={data?.icon2}
                heading={data?.heading}
                desc={data?.desc}
                badge={data?.badge}
                url={data?.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreshTemplate;
