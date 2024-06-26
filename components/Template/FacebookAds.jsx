import { Button } from "antd";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

const FacebookAds = () => {
  return (
    <div className="mb-4 p-0 md:p-6 min-h-screen h-full">
      {/* Content get from AI */}
      <div className="bg-white p-4 md:p-6">
        <div className="flex flex-col gap-2 w-full">
          <div className="bg-white border border-color-[#D9D9D9] px-3 md:px-0 py-4 md:w-5/12 mx-auto flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between py-3 px-6">
              <div className="flex items-center gap-3">
                <img src="/images/console-logo.png" alt="logo" />
                <div>
                  <h4 className="font-semibold text-base text-navblue">
                    Console
                  </h4>
                  <p className="font-medium text-sm text-black">Sponsored</p>
                </div>
              </div>
              <div>
                <HiDotsHorizontal />
              </div>
            </div>
            <div>
              <img
                src="/images/sale-banner.png"
                alt="logo"
                className="max-w-full"
              />
            </div>
            <div className="flex items-center justify-between py-3 px-6">
              <div>
                <p className="text-black opacity-50 text-xs md:text-lg">
                  www.console.com
                </p>
                <h4 className="md:text-xl text-black font-semibold">
                  Get Hyped for Our Friday Sale
                </h4>
              </div>
              <Button
                type="primary"
                className="bg-navblue border border-[#D9D9D9] h-auto md:border-none shadow-none text-white px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
          <h4 className="flex justify-end text-black opacity-25 text-sm">
            96 words / 665 characters
          </h4>
          <div className="flex justify-between items-center mb-2 md:m-0">
            <div className="flex gap-4 items-center">
              <Button
                className="py-2 px-3 md:px-4 rounded-sm text-[#323232]"
                type="link"
              >
                <FaRegThumbsUp />
              </Button>
              <Button
                className="py-2 px-3 md:px-4 rounded-sm text-[#323232]"
                type="link"
              >
                <FaRegThumbsDown />
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]"
                type="link"
              >
                <IoShareSocialOutline className="text-[#323232]" />
                <div className="text-base text-black opacity-80 hidden md:block">
                  Share
                </div>
              </Button>
              <Button
                className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]"
                type="link"
              >
                <MdOutlineContentCopy className="text-[#323232]" />
                <div className="text-base text-black opacity-80 hidden md:block">
                  Copy
                </div>
              </Button>
              <Button
                className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]"
                type="link"
              >
                <AiOutlineDownload className="text-[#323232]" />
                <div className="text-base text-black opacity-80 hidden md:block">
                  Save
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookAds;
