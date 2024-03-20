import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";

const LinkedInAds = () => {
  const linkedinCards = [
    {
      text: "Discover a wide range of colors and designs. Perfect for casual and everyday wear,Special discounts on our exclusive T-shirt designs. Limited stock available!",
    },
    {
      text: "Discover a wide range of colors and designs. Perfect for casual and everyday wear,Special discounts on our exclusive T-shirt designs. Limited stock available!",
    },
    {
      text: "Discover a wide range of colors and designs. Perfect for casual and everyday wear,Special discounts on our exclusive T-shirt designs. Limited stock available!",
    },
  ];
  return (
    <div className="bg-white md:bg-[#F5F5F5] mb-4 p-0 md:p-6 min-h-screen h-full">
      {/* Content get from AI */}
      <div className="flex flex-col gap-6">
        {linkedinCards?.map((item, index) => {
          return (
            <div
              className="bg-white p-4 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3"
              key={index}
            >
              <div className="bg-white p-3 flex flex-col gap-2 items-start min-h-36 shadow-lg md:shadow-none">
                <p className="text-[rgba(0, 0, 0, 0.85)] text-sm md:text-xl">
                  {item.text}
                </p>
              </div>
              <h4 className="flex justify-end text-black opacity-25 text-sm">
                50 words / 250 characters
              </h4>
              <div className="flex justify-between items-center mb-2 md:m-0">
                <div className="flex gap-4 items-center">
                  <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                    <FaRegThumbsUp />
                  </button>
                  <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                    <FaRegThumbsDown />
                  </button>
                </div>
                <div className="flex gap-4 items-center">
                  <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                    <IoShareSocialOutline />
                    <span className="text-base text-black opacity-80 hidden md:block">
                      Share
                    </span>
                  </button>
                  <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                    <MdOutlineContentCopy />
                    <span className="text-base text-black opacity-80 hidden md:block">
                      Copy
                    </span>
                  </button>
                  <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                    <AiOutlineDownload />
                    <span className="text-base text-black opacity-80 hidden md:block">
                      Save
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LinkedInAds;
