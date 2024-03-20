import React, { useState } from "react";
import { Button } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import SharingModel from "../common/SharingModel";

const pitchAngelData = [
  {
    name: "divya",
    email: "divya@anycopy.co",
    time: "11:37 am",
    info: "Dear (Name),",
    details: [
      {
        text: "I wanted to reach out to introduce you to our cutting-edge digital products designed for tech enthusiasts like yourself. Our products are tailored to create incredible experiences for users and propel your IT skills to the next level.",
      },
      {
        text: "I believe that (!company) could greatly benefit from incorporating our digital products into your offerings. Are you available for a brief call this week to discuss further?",
      },
      { text: "Looking forward to connecting with you, " },
      { text: "Jane Smith" },
    ],
  },
  {
    name: "divya",
    email: "divya@anycopy.co",
    time: "11:37 am",
    info: "Dear (Name),",
    details: [
      {
        text: "I wanted to reach out to introduce you to our cutting-edge digital products designed for tech enthusiasts like yourself. Our products are tailored to create incredible experiences for users and propel your IT skills to the next level.",
      },
      {
        text: "I believe that (!company) could greatly benefit from incorporating our digital products into your offerings. Are you available for a brief call this week to discuss further?",
      },
      { text: "Looking forward to connecting with you," },
      { text: "Jane Smith" },
    ],
  },
];
const SalesOutreach = () => {
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
          {/* {pitchAngelData?.map((item, index) => {
            return (
              <div
                className="border border-[rgba(50,50,50,0.25)] rounded-sm p-4 md:p-6 flex flex-col gap-3 bg-white"
                key={index}
              >
                <div className="md:px-11">
                  <div className="flex items-center gap-4 md:mt-6">
                    <div>
                      <span className="w-10 h-10 flex items-center justify-center bg-[rgba(255,154,108,0.5)] text-[#FF9A6C] font-semibold text-base rounded-full">
                        D
                      </span>
                    </div>
                    <div>
                      <h5 className="text-black text-base font-semibold">
                        {item.name}
                        <span className="text-sm text-[rgba(0,0,0,0.45)] font-normal">
                          {item.email}
                        </span>
                      </h5>
                      <p className="text-xs text-[rgba(0,0,0,0.45)]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <div className="hidden md:block">
                      <span className="w-10 h-10 flex"></span>
                    </div>
                    <div className="text-black text-sm flex flex-col gap-5">
                      {item?.details?.map((ele, index) => {
                        return <p key={index}>{ele.text}</p>;
                      })}
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
            );
          })} */}
        </div>
      </div>

      <SharingModel modalOpen={isShareModalOpen} modelClose={closeShareModal} />
    </>
  );
};
export default SalesOutreach;
