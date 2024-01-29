import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { FiCloudSnow } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDehaze } from "react-icons/md";
import { RxBoxModel } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";

const Blog = () => {
  const Blogs = [
    {
      icon1: <FaEdit />,
      icon2: <FaStar />,
      heading: `Writer`,
      desc: `Write blog posts, emails and even poems. With minimal inputs you can develop long-form content in minutes. Write, edit and publish.`,
    },
    {
      icon1: <FiSave />,
      icon2: <FaStar />,
      heading: `Essay Outline`,
      desc: `When researching a new topic, it's important you start with a solid outline that you can then develop.`,
    },
    {
      icon1: <MdOutlineDehaze />,
      icon2: <FaStar />,
      heading: `Paragraph Generator`,
      desc: `With our paragraph generator, you can easily create well-written and informative paragraphs. With just a few clicks, you can generate a custom paragraph that covers all the key points you need to communicate.`,
    },
    {
      icon1: <FiSave />,
      icon2: <FaStar />,
      heading: `Keyword Generator`,
      desc: `Looking for keywords for your posts? We can find them for you. We'll suggest related keywords so you can be optimizing in a fraction of the time.`,
    },
    {
      icon1: <IoSunnyOutline />,
      icon2: <FaStar />,
      heading: `Blog Ideas`,
      desc: `You know you should write something. This template helps you take the first step towards an article.`,
    },
    {
      icon1: <MdOutlineDehaze />,
      icon2: <FaStar />,
      heading: `Listicle Ideas`,
      desc: `This will give you fresh ideas for your next listicle. Use these to create content your readers just cannot resist. `,
    },
    {
      icon1: <MdOutlineDehaze />,
      icon2: <FaStar />,
      heading: `Listicle + Description`,
      desc: `The quickest way to jump-start your next listicle. We'll list your items and even describe them so that really, all you need to do is publish it. `,
    },
    {
      icon1: <RxBoxModel />,
      icon2: <FaStar />,
      heading: `Meta Descriptions`,
      desc: `A great meta description is the first step in SEO greatness - plus it helps your links look polished in Slack! `,
    },
    {
      icon1: <IoSunnyOutline />,
      icon2: <MdOutlineAnalytics />,
      heading: `Pain Benfit Solution`,
      desc: ` Pain Benefit Solution is classic copywriting formula to help you write better by identifying the pain, highlighting the benefit then offering a solution.`,
    },
    {
      icon1: <BsArrowsAngleExpand />,
      icon2: <FaStar />,
      heading: `Context Expander`,
      desc: `When the sentence must go on, input your pre-written text and we’ll expand it into a paragraph. `,
    },
    {
      icon1: <FiCloudSnow />,
      icon2: <FaStar />,
      heading: `Describe The Problem`,
      desc: ` Need help describing some of the pain points your customers are facing? Tell us what they are and we'll help you describe the problem`,
    },
    {
      icon1: <FaPenNib />,
      icon2: <FaStar />,
      heading: `AIDA Copywriting`,
      desc: ` AIDA stands for attention, interest, desire, and action. AIDA is a copywriting formula that's been around for more than a century. Learn how to use it effectively.`,
    },
    {
      icon1: <IoAnalytics />,
      icon2: <FaStar />,
      heading: `Catchy Headlines`,
      desc: `When a reader sees a headline, they only have a few short seconds to decide whether they want to read the content. Take some time to brainstorm some headlines for your next article. `,
    },
    {
      icon1: <FiSave />,
      icon2: <FaStar />,
      heading: `E-book Title`,
      desc: ` E-books are a great way to read and learn nowadays. Know what you want to say, but need a catchy title? Look no more.`,
    },
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
        Blog
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {Blogs?.map((data, index) => (
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

export default Blog;
