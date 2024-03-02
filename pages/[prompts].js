import React, { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { useRouter } from "next/router";
import { MdOutlineContentCopy, MdShowChart } from "react-icons/md";
import Sidebar from "../components/sidebar";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaSquarePlus,
  FaStar,
} from "react-icons/fa6";
import { Button, Checkbox, Switch } from "antd";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";

const Prompt = () => {
  const [isgenerate, setGenerate] = useState(false);
  const [showresult, setshowresult] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/Writerlanding");
  };
  return (
    <div className="flex flex-col lg:flex-row md:ml-20 h-screen">
      <Sidebar />
      <div className="flex-grow m-5">
        <div className="flex flex-grow items-center gap-5">
          <div className="flex items-center gap-6">
            <span onClick={() => router.push("/Browse")} className="text-3xl">
              <FiArrowLeft />
            </span>
            <p className="text-sm md:text-3xl font-medium">Landing Page</p>
            <span className="text-[#FACC15] text-lg opacity-80 hidden md:block">
              <FaStar />
            </span>
          </div>
          {/* <div className='flex ml-auto'>
            <button className="text-sm text-black border-1 border-gray-300 bg-white-100 md:hidden p-2 flex items-center gap-2"><FiPlus /> <span> New Document </span></button>

          </div> */}

          <div className="flex flex-row items-center ml-auto gap-2">
            <button className="text-xs md:text-sm text-black border-1 border-gray-300 bg-white-100 p-2 md:p-3 py-1 md:py-3 flex flex-row items-center gap-2 md:flex">
              <MdShowChart /> <span>5 Credits Limit </span>
            </button>
            {/* <button className="text-sm text-black border-1 border-gray-300 bg-white-100 p-3 md:border-blue-700 md:bg-blue-700 md:text-white flex flex-row md:hidden items-center gap-2">
              <FiPlus className="text-center" />{" "}
              <span className="text-center"> New Document </span>
            </button> */}
          </div>
        </div>

        <div className="flex gap-5 border-b-2 w-full mt-10 md:hidden">
          <h1
            onClick={() => setshowresult(false)}
            className={`text-sm text-black font-medium p-2 ${
              !showresult
                ? `text-navblue border-b-2 border-navblue inline-block`
                : ``
            }`}
          >
            Intro
          </h1>
          <h1
            onClick={() => setshowresult(true)}
            className={`text-sm text-black font-medium p-2 ${
              showresult
                ? `text-navblue border-b-2 border-navblue inline-block`
                : ``
            }`}
          >
            Results
          </h1>
        </div>

        <div className="flex md:mt-10">
          <div className="grid grid-cols-12 min-w-full">
            <div
              className={` ${
                showresult
                  ? `hidden col-span-12 md:col-span-4 md:block overflow-y-scroll scrollbar-thin`
                  : `col-span-12 overflow-hidden md:col-span-4 md:overflow-y-scroll md:scrollbar-thin`
              }`}
              id="intro"
            >
              <h1 className="hidden md:inline-block text-sm text-navblue font-medium border-b-2 border-navblue">
                Prompt
              </h1>
              <form method="POST" className="md:w-11/12 mt-4 md:mt-10 flex flex-col gap-4 md:gap-6">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div className="focus:outline-none">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Language
                    </label>
                    <select
                      id="language"
                      className="border border-gray-300 text-gray-900 text-sm focus:outline-none w-full p-2.5"
                    >
                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Project
                    </label>
                    {/* Dynamic the project form settings */}
                    <select
                      id="project"
                      className="border border-gray-300 text-gray-900 focus:outline-none text-sm block w-full p-2.5"
                    >
                      <option>Console</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-5">
                  <p className="mb-2 text-sm font-medium text-gray-900">
                    View and modify your projects here
                  </p>
                  <p className="mb-2 text-sm font-medium text-blue-600">
                    My Projects
                  </p>
                </div>

                <div className="flex flex-row justify-between gap-5">
                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-900">
                      Brainstorm mode
                    </p>
                    <p className="mb-2 text-sm font-medium text-black opacity-50">
                      Enable to write random ideas/inspiration based on selected
                      project
                    </p>
                  </div>
                  <div className="flex items-center flex-col gap-2">
                    <Switch defaultChecked />
                    <p className="mb-2 text-sm font-medium text-black opacity-50">
                      Disabled
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Topic
                  </label>
                  <textarea
                    className="block text-sm text-slate-300 border border-[#D9D9D9] w-full h-14 placeholder-slate-300 resize-none placeholder-top"
                    placeholder="feature you provide"
                  ></textarea>
                  <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
                    0/75
                  </span>
                </div>

                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Benefit
                  </label>
                  <textarea
                    className="block text-sm text-slate-300 border border-[#D9D9D9] w-full h-14 placeholder-slate-300 resize-none placeholder-top"
                    placeholder="benefit you provide"
                  ></textarea>
                  <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
                    0/75
                  </span>
                </div>

                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Feature
                  </label>
                  <textarea
                    className="block text-sm text-slate-300 border border-[#D9D9D9] w-full h-14 placeholder-slate-300 resize-none placeholder-top"
                    placeholder="feature you provide"
                  ></textarea>
                  <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
                    0/75
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <Checkbox className="text-sm text-black opacity-90">Add testimonials</Checkbox>
                  <Checkbox className="text-sm text-black opacity-90">Add FAQs</Checkbox>
                </div>

                <div className="flex flex-row justify-between gap-5">
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-medium text-gray-900">
                      Safety Guidelines
                    </p>
                    <IoIosInformationCircleOutline />
                  </div>
                  <div className="flex items-center flex-col gap-2">
                    <Switch defaultChecked />
                    <p className="mb-2 text-sm font-medium text-black opacity-50">
                      Disabled
                    </p>
                  </div>
                </div>

                {/* <button className="text-gray bg-white-100 hover:bg-gray-100 focus:outline-none text-sm sm:w-auto px-5 py-2.5 text-center mb-2">
                  Skip Intro
                </button> */}

                <button
                  type="button"
                  className="text-white bg-[#0033FF] hover:bg-blue-700 hover:text-white focus:outline-none font-medium text-base px-5 py-2.5 text-center w-full"
                  onClick={() => setGenerate(true)}
                >
                  Generate Copy
                </button>
              </form>
            </div>
            <div
              className={` ${
                !showresult
                  ? `hidden col-span-12 md:col-span-8 md:block`
                  : `col-span-12 md:col-span-8 md:block`
              }`}
              id="results"
            >
              <h1 className="hidden text-sm text-navblue font-medium border-b-2 border-navblue ml-4 md:inline-block">
                Results
              </h1>

              {!isgenerate ? (
                <div className="relative top-40 flex justify-center items-center">
                  <p className="text-sm text-center text-slate-400">
                    Generate your intro to see results here or Skip intro
                  </p>
                </div>
              ) : (
                <div className="result mt-6">
                  {/* Content get from AI */}
                  <div className="bg-white md:bg-[#F5F5F5] border border-color-[rgba(50, 50, 50, 0.25)] md:border-none mb-4 p-4 md:p-6 min-h-screen h-full">
                    <div className="bg-white p-0 md:p-12">
                      <div className="flex justify-between items-center mb-6">
                        <p className="text-black text-sm">Console</p>
                        <p className="text-black text-sm">Learn More</p>
                      </div>
                      <div className="flex flex-col items-center text-center gap-6 px-3 md:px-14 py-3 md:py-6">
                        <h4 className="text-black text-lg md:text-3xl font-bold">
                          Join the hype with our new eco-friendly t-shirt
                          collection
                        </h4>
                        <p className="opacity-50 text-base md:text-xl max-w-lg">
                          Trendy designs and sustainable packaging, perfect for
                          the young and fresh crowd.
                        </p>
                        <img src="/images/bg-demo.png" />
                        <div className="flex flex-row gap-6">
                          <Button
                            type="primary"
                            className="bg-[#0033FF] border border-[#D9D9D9] h-auto md:border-none shadow-none text-white px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
                          >
                            Get Started
                          </Button>
                          <Button
                            type="primary"
                            className="bg-white border border-[#0033FF] h-auto shadow-none text-[#0033FF] px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 md:mb-0">
                        <div className="p-3 md:p-6 bg-white flex flex-col gap-3">
                          <span className="text-[#0033FF]">
                            <FaSquarePlus className="text-2xl" />
                          </span>
                          <h4 className="text-black text-sm font-medium">
                            Sustainable production
                          </h4>
                          <p className="text-xs opacity-40">
                            From sourcing materials to packaging, we prioritize
                            eco-friendly practices to lessen our impact on the
                            environment.
                          </p>
                        </div>
                        <div className="p-3 md:p-6 bg-white flex flex-col gap-3">
                          <span className="text-[#0033FF]">
                            <FaSquarePlus className="text-2xl" />
                          </span>
                          <h4 className="text-black text-sm font-medium">
                            Eco-friendly packaging
                          </h4>
                          <p className="text-xs opacity-40">
                            We care about the environment and make sure our
                            packaging is as sustainable as our products.
                          </p>
                        </div>
                        <div className="p-3 md:p-6 bg-white flex flex-col gap-3">
                          <span className="text-[#0033FF]">
                            <FaSquarePlus className="text-2xl" />
                          </span>
                          <h4 className="text-black text-sm font-medium">
                            Sustainable fashion
                          </h4>
                          <p className="text-xs opacity-40">
                            Our materials are ethically sourced and our
                            production process is mindful of the environment.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 bg-[#0033FF] flex flex-col text-center items-center gap-3">
                        <h4 className="text-white text-bold  text-xl">
                          Eco-friendly fashion
                        </h4>
                        <p className="text-white text-sm md:max-w-2xl mx-auto">
                          Made with care and sustainability in mind, our
                          T-shirts are crafted from high-quality, organic
                          materials that are gentle on the planet.
                        </p>
                        <Button
                          type="primary"
                          className="bg-white border border-[#D9D9D9] h-auto md:border-none shadow-none text-[#0033FF] px-4 py-2 rounded-lg gap-2 text-sm font-semibold"
                        >
                          Learn More
                        </Button>
                      </div>

                      <div className="mt-6 bg-white grid grid-cols-2 md:grid-cols-5 gap-4 justify-between">
                        <div className="flex flex-col gap-3">
                          <h4 className="text-black text-sm">Console</h4>
                          <p className="text-xs text-black opacity-50">
                            Trendy designs and sustainable packaging, perfect
                            for the young and fresh crowd.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-black text-sm">Solutions</h4>
                          <ul className="flex flex-col gap-1">
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Marketing
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Analysis
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Digital
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Report
                            </a>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-black text-sm">Support</h4>
                          <ul className="flex flex-col gap-1">
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Price
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Document
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              API Request
                            </a>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-black text-sm">Company</h4>
                          <ul className="flex flex-col gap-1">
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              About
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Blogs
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              News
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Report
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Press
                            </a>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-black text-sm">Legal</h4>
                          <ul className="flex flex-col gap-1">
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Claims
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
                              Privacy
                            </a>
                            <a
                              href="/"
                              className="text-xs text-black opacity-50 block"
                            >
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ flex: 1, padding: '20px' }}>
        <QuillEditor />
      </div> */}
    </div>
  );
};

export default Prompt;
