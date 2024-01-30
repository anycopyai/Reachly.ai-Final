import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { TbBrandApplePodcast } from "react-icons/tb";

const SocialMedia = () => {
  const SocialMedia = [
    {
      icon1: <FaLinkedin />,
      icon2: <FaStar />,
      heading: `Personal Linkedin Post`,
      desc: `Creating and sharing content on LinkedIn is essential to get the most out of the platform. Every piece of quality content you share makes you more visible to hiring managers, recruiters, and industry leaders.`,
    },
    {
      icon1: <FaLinkedin />,
      icon2: <FaStar />,
      heading: `Linkedin Bio`,
      desc: `Looking to update your LinkedIn bio? We can help. We make it easier to distill all of your accomplishments into a short, snappy bio.`,
    },
    {
      icon1: <FiHash />,
      icon2: <FaStar />,
      heading: `Social Media Post`,
      desc: `Need help coming up with a social media post that will grab attention and get engagement? Look no further! Write a thumb stopper in seconds`,
    },
    {
      icon1: <FiHash />,
      icon2: <FaStar />,
      heading: `Hashtags`,
      desc: `Hashtags are the perfect way to add some fun and excitement to your content marketing efforts. Use our hashtag generator to find the perfect ones for your next post.`,
    },
    {
      icon1: <FaTiktok />,
      icon2: <FaStar />,
      heading: `Tik Tok Video Ideas`,
      desc: `Looking to brainstorm video ideas to boost your followers? We've got you covered.`,
    },
    {
      icon1: <TbBrandApplePodcast />,
      icon2: <FaStar />,
      heading: `Prodcast Ideas`,
      desc: `Need some ideas on what to talk about on your next podcast? Use this template to create a list of ideas to kick off your next episode.`,
    },
    {
      icon1: <FaStar />,
      icon2: <FaStar />,
      heading: `Review Responder`,
      desc: `Responding to customer reviews is KEY! Showcase how committed your brand is to keeping communication channels open.`,
    },
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
        Social Media
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {SocialMedia?.map((data, index) => (
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

export default SocialMedia;
