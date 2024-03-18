import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import SharingModel from "../common/SharingModel";
import { Button } from "antd";

const ColdEmail = () => {
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
          <div className="border border-[rgba(50,50,50,0.25)] rounded-sm p-4 md:p-6 flex flex-col gap-3 bg-white">
            <div className="md:px-11">
              <h2 className="text-xl text-black font-semibold">
                Unlock Your Marketing Potential with Our Free Digital Products
                Trial
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <div>
                  <span className="w-10 h-10 flex items-center justify-center bg-[rgba(255,154,108,0.5)] text-[#FF9A6C] font-semibold text-base rounded-full">
                    D
                  </span>
                </div>
                <div>
                  <h5 className="text-black text-base font-semibold">
                    divya
                    <span className="text-sm text-[rgba(0,0,0,0.45)] font-normal">
                      {"<divya@anycopy.co>"}
                    </span>
                  </h5>
                  <p className="text-xs text-[rgba(0,0,0,0.45)]">11:37 am</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <div className="hidden md:block">
                  <span className="w-10 h-10 flex"></span>
                </div>
                <div className="text-black text-sm flex flex-col gap-5">
                  <p>Dear (Name),</p>
                  <p>
                    Are you tired of struggling with a limited marketing budget?
                    We understand the challenges that come with trying to reach
                    your audience effectively without breaking the bank. That's
                    why we're here to help you level up your digital marketing
                    game without draining your resources.
                  </p>
                  <p>
                    Our digital products are designed to empower tech
                    enthusiasts like you to create incredible experiences for
                    your audience. Whether you're in IT, education, or any other
                    industry, our tools can help you stand out and make a
                    lasting impression.
                  </p>
                  <p>
                    To show our appreciation for your passion and dedication,
                    we're offering you a free trial of our digital products.
                    This is your chance to explore all the features and see for
                    yourself how our solutions can make a difference in your
                    marketing efforts.
                  </p>
                  <p>
                    Don't let a low budget hold you back from achieving your
                    goals. Take advantage of this opportunity and unlock your
                    full marketing potential with our digital products.
                  </p>
                  <p>Click here to start your free trial now [CTA button].</p>
                  <p>
                    Thank you for being part of our community of tech
                    enthusiasts. We can't wait to see the amazing experiences
                    you'll create with our digital products.
                  </p>
                  <p>Best regards,</p>
                  <p>
                    (Your Name)<span className="block">(Company Name)</span>
                  </p>
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
                  <span className="text-base text-black opacity-80 hidden md:block">
                    Share
                  </span>
                </Button>
                <Button
                  className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]"
                  type="link"
                >
                  <MdOutlineContentCopy className="text-[#323232]" />
                  <span className="text-base text-black opacity-80 hidden md:block">
                    Copy
                  </span>
                </Button>
                <Button
                  className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]"
                  type="link"
                >
                  <AiOutlineDownload className="text-[#323232]" />
                  <span className="text-base text-black opacity-80 hidden md:block">
                    Save
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-[rgba(50,50,50,0.25)] rounded-sm p-4 md:p-6 flex flex-col gap-3 bg-white">
            <div className="md:px-11">
              <h2 className="text-xl text-black font-semibold">
                Unlock Your Marketing Potential with Our Free Digital Products
                Trial
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <div>
                  <span className="w-10 h-10 flex items-center justify-center bg-[rgba(255,154,108,0.5)] text-[#FF9A6C] font-semibold text-base rounded-full">
                    D
                  </span>
                </div>
                <div>
                  <h5 className="text-black text-base font-semibold">
                    divya
                    <span className="text-sm text-[rgba(0,0,0,0.45)] font-normal">
                      {"<divya@anycopy.co>"}
                    </span>
                  </h5>
                  <p className="text-xs text-[rgba(0,0,0,0.45)]">11:37 am</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <div className="hidden md:block">
                  <span className="w-10 h-10 flex"></span>
                </div>
                <div className="text-black text-sm flex flex-col gap-5">
                  <p>Dear (Name),</p>
                  <p>
                    Are you tired of struggling with a limited marketing budget?
                    We understand the challenges that come with trying to reach
                    your audience effectively without breaking the bank. That's
                    why we're here to help you level up your digital marketing
                    game without draining your resources.
                  </p>
                  <p>
                    Our digital products are designed to empower tech
                    enthusiasts like you to create incredible experiences for
                    your audience. Whether you're in IT, education, or any other
                    industry, our tools can help you stand out and make a
                    lasting impression.
                  </p>
                  <p>
                    To show our appreciation for your passion and dedication,
                    we're offering you a free trial of our digital products.
                    This is your chance to explore all the features and see for
                    yourself how our solutions can make a difference in your
                    marketing efforts.
                  </p>
                  <p>
                    Don't let a low budget hold you back from achieving your
                    goals. Take advantage of this opportunity and unlock your
                    full marketing potential with our digital products.
                  </p>
                  <p>Click here to start your free trial now [CTA button].</p>
                  <p>
                    Thank you for being part of our community of tech
                    enthusiasts. We can't wait to see the amazing experiences
                    you'll create with our digital products.
                  </p>
                  <p>Best regards,</p>
                  <p>
                    (Your Name)<span className="block">(Company Name)</span>
                  </p>
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
        </div>
      </div>

      <SharingModel modalOpen={isShareModalOpen} modelClose={closeShareModal} />
    </div>
  );
};
export default ColdEmail;
