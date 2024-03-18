import { Button } from "antd";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";

const HeaderDiscription = () => {
  return (
    <div className="mt-6">
      <div className="bg-white md:bg-[#F5F5F5] mb-4 p-0 md:p-6 min-h-screen h-full md:absolute overflow-y-auto">
        <div className="flex flex-col gap-6">
          <div className="border border-[rgba(50,50,50,0.25)] rounded-sm p-4 md:p-6 flex flex-col gap-3 bg-white">
            <div className="md:px-24">
              <div className="flex justify-between items-center">
                <h4>Digital products</h4>
                <h4>IT</h4>
              </div>
              <div className="flex justify-center items-center flex-col gap-5 text-center mt-12">
                <h4 className="text-4xl font-semibold text-black">
                  Discover the latest digital products for all tech enthusiasts
                </h4>
                <p className="text-xl text-[rgba(0,0,0,0.45)]">
                  Explore a wide range of IT and educational products designed
                  to help you create incredible experiences and enhance your
                  skills.
                </p>
                <div className="flex items-center gap-4">
                  <Button className="bg-navblue border-[#1890FF] px-4 py-2 rounded-sm text-base text-white">
                    Get Started
                  </Button>
                  <Button className="bg-[#F5F5F5] border px-4 py-2 rounded-sm text-base text-[rgba(0,0,0,0.25)]">
                    Learn More
                  </Button>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
};
export default HeaderDiscription;
