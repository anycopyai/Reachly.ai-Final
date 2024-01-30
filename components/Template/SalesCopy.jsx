import React from "react";
import Card from "../common/Card";
import { FaStar } from "react-icons/fa";
import { MdOutlineDehaze } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md"

const SalesCopy = () => {
  const SalesCopy = [
    {
      icon1: <MdOutlineDehaze />,
      icon2: <FaStar />,
      heading: `Persuasive Bullet Points`,
      desc: `Turn a long text into an easy-to-digest list of bullet points. Just like that, you'll improve the likelihood of your readers getting the point.`,
    },

    {
      icon1: <MdOutlineMailOutline />,
      icon2: <FaStar />,
      heading: `Sales Outreach`,
      desc: `Build new connections and land clients with a compelling bespoke email.`,
    },
    {
      icon1: <MdOutlineMailOutline />,
      icon2: <FaStar />,
      heading: `Pitch an Angle`,
      desc: `Just starting out and could use a little kickstart to your seed round? Try pitching an Angel Investor with this template.`,
    },
    {
      icon1: <MdOutlineMailOutline />,
      icon2: <FaStar />,
      heading: `Pitch a VC`,
      desc: `Ready to grab that Series A round? Try out the Pitch A VC template for some inspiration.`,
    },
  ];
  return (
    <div className=" mt-8  mx-auto w-11/12">
      <h1 className=" text-xl" style={{ marginBottom: 30 }}>
        Sales Copy
      </h1>
      {/*card*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {SalesCopy?.map((data, index) => (
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

export default SalesCopy;
