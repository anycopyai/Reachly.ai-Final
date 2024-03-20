import { Button } from "antd";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp, FaSquarePlus } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className="bg-white md:bg-[#F5F5F5] border border-color-[rgba(50, 50, 50, 0.25)] md:border-none mb-4 p-4 md:p-6 min-h-screen h-full">
      {/* Content get from AI */}
      <div className="bg-white p-0 md:p-12">
        <div className="flex justify-between items-center mb-6">
          <p className="text-black text-sm">Console</p>
          <p className="text-black text-sm">Learn More</p>
        </div>
        <div className="flex flex-col items-center text-center gap-6 px-3 md:px-14 py-3 md:py-6">
          <h4 className="text-black text-lg md:text-3xl font-bold">
            Join the hype with our new eco-friendly t-shirt collection
          </h4>
          <p className="opacity-50 text-base md:text-xl max-w-lg">
            Trendy designs and sustainable packaging, perfect for the young and
            fresh crowd.
          </p>
          <img src="/images/bg-demo.png" />
          <div className="flex flex-row gap-6">
            <Button
              type="primary"
              className="bg-navblue border border-[#D9D9D9] h-auto md:border-none shadow-none text-white px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
            >
              Get Started
            </Button>
            <Button
              type="primary"
              className="bg-white border border-navblue h-auto shadow-none text-navblue px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 md:mb-0">
          <div className="p-3 md:p-6 bg-white flex flex-col gap-3">
            <span className="text-navblue">
              <FaSquarePlus className="text-2xl" />
            </span>
            <h4 className="text-black text-sm font-medium">
              Sustainable production
            </h4>
            <p className="text-xs opacity-40">
              From sourcing materials to packaging, we prioritize eco-friendly
              practices to lessen our impact on the environment.
            </p>
          </div>
          <div className="p-3 md:p-6 bg-white flex flex-col gap-3">
            <span className="text-navblue">
              <FaSquarePlus className="text-2xl" />
            </span>
            <h4 className="text-black text-sm font-medium">
              Eco-friendly packaging
            </h4>
            <p className="text-xs opacity-40">
              We care about the environment and make sure our packaging is as
              sustainable as our products.
            </p>
          </div>
          <div className="p-3 md:p-6 bg-white flex flex-col gap-3">
            <span className="text-navblue">
              <FaSquarePlus className="text-2xl" />
            </span>
            <h4 className="text-black text-sm font-medium">
              Sustainable fashion
            </h4>
            <p className="text-xs opacity-40">
              Our materials are ethically sourced and our production process is
              mindful of the environment.
            </p>
          </div>
        </div>

        <div className="p-6 bg-navblue flex flex-col text-center items-center gap-3">
          <h4 className="text-white text-bold  text-xl">
            Eco-friendly fashion
          </h4>
          <p className="text-white text-sm md:max-w-2xl mx-auto">
            Made with care and sustainability in mind, our T-shirts are crafted
            from high-quality, organic materials that are gentle on the planet.
          </p>
          <Button
            type="primary"
            className="bg-white border border-[#D9D9D9] h-auto md:border-none shadow-none text-navblue px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-6 bg-white grid grid-cols-2 md:grid-cols-5 gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <h4 className="text-black text-sm">Console</h4>
            <p className="text-xs text-black opacity-50">
              Trendy designs and sustainable packaging, perfect for the young
              and fresh crowd.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-black text-sm">Solutions</h4>
            <ul className="flex flex-col gap-1">
              <a href="/" className="text-xs text-black opacity-50 block">
                Marketing
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Analysis
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Digital
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Report
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-black text-sm">Support</h4>
            <ul className="flex flex-col gap-1">
              <a href="/" className="text-xs text-black opacity-50 block">
                Price
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Document
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                API Request
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-black text-sm">Company</h4>
            <ul className="flex flex-col gap-1">
              <a href="/" className="text-xs text-black opacity-50 block">
                About
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Blogs
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                News
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Report
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Press
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-black text-sm">Legal</h4>
            <ul className="flex flex-col gap-1">
              <a href="/" className="text-xs text-black opacity-50 block">
                Claims
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Privacy
              </a>
              <a href="/" className="text-xs text-black opacity-50 block">
                Terms
              </a>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          <span className="border border-color-[#D9D9D9] block w-3 h-3 rounded-full"></span>
          <span className="border border-color-[#D9D9D9] block w-3 h-3 rounded-full"></span>
          <span className="border border-color-[#D9D9D9] block w-3 h-3 rounded-full"></span>
        </div>

        <h4 className="flex justify-end text-black opacity-25 text-sm mb-3 mt-7">
          96 words / 665 characters
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <button className="py-3 px-3 md:px-4 md:border border-color-[#D9D9D9] rounded-sm text-[#323232]">
              <FaRegThumbsUp />
            </button>
            <button className="py-3 px-3 md:px-4 md:border border-color-[#D9D9D9] rounded-sm text-[#323232]">
              <FaRegThumbsDown />
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <button className="py-3 px-3 md:px-4 md:border border-color-[#D9D9D9] rounded-sm text-[#323232] flex items-center gap-[10px]">
              <IoShareSocialOutline />
              <span className="text-base text-black opacity-80 hidden md:block">
                Share
              </span>
            </button>
            <button className="py-3 px-3 md:px-4 md:border border-color-[#D9D9D9] rounded-sm text-[#323232] flex items-center gap-[10px]">
              <MdOutlineContentCopy />
              <span className="text-base text-black opacity-80 hidden md:block">
                Copy
              </span>
            </button>
            <button className="py-3 px-3 md:px-4 md:border border-color-[#D9D9D9] rounded-sm text-[#323232] flex items-center gap-[10px]">
              <AiOutlineDownload />
              <span className="text-base text-black opacity-80 hidden md:block">
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
