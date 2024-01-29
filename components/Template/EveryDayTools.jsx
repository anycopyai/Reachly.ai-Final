import React from "react";
import Card from "../common/Card";
import { FaSearchPlus, FaStar } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FiSave } from "react-icons/fi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CgExpand } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";

const EveryDayTools = () => {
  const EveryDayTools = [
    {
      icon1: <FaEdit />      ,
      icon2: <FaStar />,
      heading: `Writer`,
      desc: `Write blog posts, emails and even poems. With minimal inputs you can develop long-form content in minutes. Write, edit and publish.`,
    },
    {
      icon1: <CgExpand />,
      icon2: <FaStar />,
      heading: `Summarize`,
      desc: `Don't let pesky long texts overwhelm you ever again! With our amazing summarizing tool, you can now quickly get to the gist of any text with ease.`,
    },
    {
      icon1: <BsArrowsAngleExpand />,
      icon2: <FaStar />,
      heading: `Content Expander`,
      desc: `When the sentence must go on, input your pre-written text and we’ll expand it into a paragraph.`,
    },
    {
      icon1: <FiSave />,
      icon2: <FaStar />,
      heading: `Tone Changer`,
      desc: `Ever find yourself trying to rephrase something to a more appropriate tone? Now you can easily do it!`,
    },
    {
      icon1: <LuRefreshCcw />,
      icon2: <FaStar />,
      heading: `Remix`,
      desc: `Refresh and repurpose your copy with a click of a button. Don’t sweat it, just Remix it.`,
    },
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
        Eveyday Tools
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {EveryDayTools?.map((data, index) => (
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

export default EveryDayTools;
