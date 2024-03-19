import { Button } from "antd";
import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import SharingModel from "../common/SharingModel";

const productDescription = [
  {
    thumb: "/images/product-1.png",
    type: "Digital products",
    title: "Widget",
    details:
      "Enhance your tech game with Widget, the ultimate digital product for all tech enthusiasts. With its sleek camera and multi-function watch capabilities, Widget allows you to capture every moment and stay connected on-the-go. Perfect for youth looking to create incredible experiences and stay ahead in the ever-evolving world of technology. Upgrade to Widget today and join the digital revolution.",
  },
  {
    thumb: "/images/product-2.png",
    type: "Digital products",
    title: "Widget",
    details:
      "Enhance your tech game with Widget, the ultimate digital product for all tech enthusiasts. With its sleek camera and multi-function watch capabilities, Widget allows you to capture every moment and stay connected on-the-go. Perfect for youth looking to create incredible experiences and stay ahead in the ever-evolving world of technology. Upgrade to Widget today and join the digital revolution.",
  },
];

const ProductDiscription = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };
  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <div className="mt-6">
      <div className="bg-white md:bg-[#F5F5F5] mb-4 p-0 md:p-6 min-h-screen h-full md:absolute overflow-y-auto">
        <div className="flex flex-col gap-6">
          {productDescription?.map((item, index) => {
            return (
              <div
                className="border border-[rgba(50,50,50,0.1)] md:border-[rgba(50,50,50,0.25)] rounded-sm p-4 md:p-6 flex flex-col gap-3 bg-white"
                key={index}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-11 items-center">
                  <div>
                    <img src={item.thumb} alt="product" />
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-base text-[rgba(50,50,50,0.25)] mb-3">
                      {item.type}
                    </h4>
                    <h2 className="text-black text-3xl font-semibold mb-3">
                      {item.title}
                    </h2>
                    <p className="text-base text-[rgba(0,0,0,0.45)]">
                      {item.details}
                    </p>
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
          })}
        </div>
      </div>

      <SharingModel modalOpen={isShareModalOpen} modelClose={closeShareModal} />
    </div>
  );
};
export default ProductDiscription;
