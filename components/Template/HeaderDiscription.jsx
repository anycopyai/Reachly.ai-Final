import { Button } from "antd";
import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import SharingModel from "../common/SharingModel";

const headerCardData = [
  {
    id: 1,
    product: "Digital products",
    category: "IT",
    title: "Discover the latest digital products for all tech enthusiasts",
    description:
      "Explore a wide range of IT and educational products designed to help you create incredible experiences and enhance your skills.",
  },
  {
    id: 2,
    product: "Digital products",
    category: "IT",
    title: "Discover the latest digital products for all tech enthusiasts",
    description:
      "Explore a wide range of IT and educational products designed to help you create incredible experiences and enhance your skills.",
  },
];

const HeaderDiscription = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };
  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <>
      <div className="mb-4 p-0 md:p-6 min-h-screen h-full">
        <div className="flex flex-col gap-6">
          {headerCardData?.map((item, index) => {
            return (
              <div
                className="border border-[rgba(50,50,50,0.25)] rounded-sm p-4 md:p-6 flex flex-col gap-3 bg-white"
                key={index}
              >
                <div className="md:px-24">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg text-black">{item.product}</h4>
                    <h4 className="text-lg text-[rgba(0,0,0,0.45)]">
                      {item.category}
                    </h4>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-5 text-center mt-6 md:mt-12">
                    <h4 className="text-xl md:text-4xl font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-xl text-black md:text-[rgba(0,0,0,0.45)]">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <Button className="bg-navblue border-[#1890FF] px-4 py-2 rounded-sm text-base text-white hover:text-white outline-none">
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
                      onClick={openShareModal}
                    >
                      <IoShareSocialOutline className="text-[#323232]" />
                      <i className="text-base text-black opacity-80 hidden md:block">
                        Share
                      </i>
                    </Button>
                    <Button
                      className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]"
                      type="link"
                    >
                      <MdOutlineContentCopy className="text-[#323232]" />
                      <i className="text-base text-black opacity-80 hidden md:block">
                        Copy
                      </i>
                    </Button>
                    <Button
                      className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]"
                      type="link"
                    >
                      <AiOutlineDownload className="text-[#323232]" />
                      <i className="text-base text-black opacity-80 hidden md:block">
                        Save
                      </i>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SharingModel modalOpen={isShareModalOpen} modelClose={closeShareModal} />
    </>
  );
};
export default HeaderDiscription;
