import { Button } from "antd";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TfiComment } from "react-icons/tfi";
import { PiShareFat } from "react-icons/pi";

const UrlToAds = () => {
  return (
    <div className="result mt-6 h-full">
      {/* Content get from AI */}
      <div className="bg-white md:bg-[#F5F5F5] mb-4 p-0 md:p-6 min-h-screen h-full">
        <div className="flex flex-col gap-6">
          <div className="flex items-center flex-col gap-3">
            <div className="flex items-center">
              <img src="/images/google-ad-logo.svg" alt="logo" />
              <p className="text-black opacity-80 text-base font-medium">
                Google Ad
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3 w-full">
              <div className="bg-white p-3 flex flex-col gap-2 items-start min-h-36">
                <h5 className="flex gap-4 items-center text-xs">
                  Ad .
                  <a href="/" className="pl-1 text-[#0033FF]">
                    https//www. shirts.com/
                  </a>
                  <BsThreeDotsVertical />
                </h5>
                <h2 className="font-semibold text-[#0033FF] text-xl">
                  Premium Quality T-Shirts for Every Occasion
                </h2>
                <p className="text-[rgba(0, 0, 0, 0.85)] text-sm font-medium">
                  Discover a wide range of colors and designs. Perfect for
                  casual and everyday wear,Special discounts on our exclusive
                  T-shirt designs. Limited stock available!
                </p>
                <h4 className="font-medium text-sm text-[#0033FF]">
                  How Much does it cost? . What is Price range? . Location of
                  the shop.
                </h4>
              </div>
              <h4 className="flex justify-end text-black opacity-25 text-sm">
                96 words / 665 characters
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

          <div className="flex items-center flex-col gap-3">
            <div className="flex items-center">
              <img src="/images/facebook-ad-logo.svg" alt="logo" />
              <p className="text-black opacity-80 text-base font-medium">
                Facebook Ad
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 w-full">
              <div className="flex flex-col gap-2 w-full">
                <div className="bg-white rounded-lg border border-color-[#D9D9D9] p-3 md:px-0 md:w-5/12 mx-auto flex flex-col gap-3 w-full">
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-3">
                      <img src="/images/club-doggo.png" alt="logo" />
                      <div>
                        <h4 className="font-semibold text-base text-[#0033FF]">
                          Club Doggo
                        </h4>
                        <p className="font-medium text-sm text-black flex items-center gap-2">
                          Sponsored
                          <span>.</span>
                          <img src="/images/globe-logo.svg" alt="globe" />
                        </p>
                      </div>
                    </div>
                    <div>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <div className="px-3">
                    <p className="text-sm">
                      Some default post text here... I have nothing to say but
                      you need to buy it.
                    </p>
                  </div>
                  <div>
                    <img
                      src="/images/dog-banner.png"
                      alt="logo"
                      className="max-w-full"
                    />
                    <div className="flex items-center justify-between py-3 px-4 bg-[#F0F2F5]">
                      <h4 className="text-black text-sm font-semibold">
                        Headline
                      </h4>
                      <Button
                        type="primary"
                        className="bg-[#CED0D4] border-none h-auto md:border-none shadow-none text-[#F0F2F5] px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 pt-0 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        <img
                          src="/images/social-like.svg"
                          alt="social"
                          className="z-20"
                        />
                        <img
                          src="/images/social-heart.svg"
                          alt="social"
                          className="-ml-1.5 z-10"
                        />
                        <img
                          src="/images/social-emoji.svg"
                          alt="social"
                          className="-ml-1.5"
                        />
                      </div>
                      <p className="">129</p>
                    </div>
                    <h4 className="text-sm text-[#65676B]">
                      12 Comments 8 Shares
                    </h4>
                  </div>
                  <div className="p-3 pt-4 flex justify-between items-center border-t-1 border-color-[#CED0D4]">
                    <button className="text-black flex items-center gap-[10px]">
                      <BiLike />
                      <span className="text-base opacity-80 hidden md:block">
                        Like
                      </span>
                    </button>
                    <button className="text-black flex items-center gap-[10px]">
                      <TfiComment />
                      <span className="text-base opacity-80 hidden md:block">
                        Comment
                      </span>
                    </button>
                    <button className="text-black flex items-center gap-[10px]">
                      <PiShareFat />
                      <span className="text-base opacity-80 hidden md:block">
                        Share
                      </span>
                    </button>
                  </div>
                </div>
                <h4 className="flex justify-end text-black opacity-25 text-sm">
                  96 words / 665 characters
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

          <div className="flex items-center flex-col gap-3">
            <div className="flex items-center">
              <img src="/images/twitter-logo.svg" alt="logo" />
              <p className="text-black opacity-80 text-base font-medium">
                Twitter
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3 w-full"></div>
          </div>

          <div className="flex items-center flex-col gap-3">
            <div className="flex items-center">
              <img src="/images/linkedin-logo.svg" alt="logo" />
              <p className="text-black opacity-80 text-base font-medium">
                Linkedin Ad
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3 w-full"></div>
          </div>

          <div className="flex items-center flex-col gap-3">
            <div className="flex items-center">
              <img src="/images/bing-logo.svg" alt="logo" />
              <p className="text-black opacity-80 text-base font-medium">
                Bing Ad
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlToAds;
