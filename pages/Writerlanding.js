import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar"; // Adjust the path as necessary
import { IoIosSearch } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdGrading } from "react-icons/md";
import { MdOutlineSpellcheck } from "react-icons/md";
import QuillEditor from "../components/QuillEditor";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import { MdOutlineFullscreen } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Template from "../pages/WriterTemplate";
import Expand from "../pages/WriterExpand";
import Remix from "../pages/WriterRemix";
import Next from "../pages/WriterNext";
import { Button, Input } from "antd";
import { useRouter } from "next/router";

const Writerlanding = () => {
  const [showresult, setshowresult] = useState(false);
  const [showtemp, setshowtemp] = useState(false);
  const [showintial, setIntialcontent] = useState(true);
  const [showexpand, setExpand] = useState(false);
  const [showremix, setRemix] = useState(false);
  const [shownext, setNext] = useState(false);
  const [fulleditor, setFullEditor] = useState(false);
  const [showedit, setEdit] = useState(false);

  const processDiv = (content) => {
    if (content == "initial") {
      setIntialcontent(true);
      setExpand(false);
      setshowtemp(false);
      setRemix(false);
      setNext(false);
    }

    if (content == "template") {
      setshowtemp(true);
      setIntialcontent(false);
      setExpand(false);
      setRemix(false);
      setNext(false);
    }

    if (content == "expand") {
      setExpand(true);
      setshowtemp(false);
      setIntialcontent(false);
      setNext(false);
      setRemix(false);
    }

    if (content == "remix") {
      setRemix(true);
      setExpand(false);
      setshowtemp(false);
      setIntialcontent(false);
      setNext(false);
    }

    if (content == "next") {
      setNext(true);
      setRemix(false);
      setExpand(false);
      setshowtemp(false);
      setIntialcontent(false);
    }
  };
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row md:ml-20 h-screen">
      <Sidebar />
      <div className="flex-grow m-5">
        <div className="bg-white sticky md:static top-0 pt-4 md:pt-0 z-10">
          <div className="flex md:hidden items-center justify-between">
            <div className="flex items-center gap-1">
              <span>
                <img alt="logo" src="/images/logo.png" className="w-5" />
              </span>
              <p className="text-sm font-medium text-black">Anycopy Ai</p>
              <span className="flex items-center justify-center text-xs bg-[#BFDBFE] text-[#2143B1] px-2 py-1 rounded-full">
                Beta
              </span>
            </div>
            <div>
              <Button className="text-xs md:text-sm text-black border-1 border-gray-300 bg-white-100 p-2 md:p-3 py-1 md:py-3 flex flex-row items-center gap-2 md:flex rounded-sm">
                <MdShowChart /> <span>5 Credits Limit </span>
              </Button>
            </div>
          </div>

          <div className="flex flex-grow items-center gap-5 mt-3 md:mt-0">
            <div className="flex items-center gap-1">
              <span
                onClick={() => router.push("/")}
                className="text-lg cursor-pointer block md:hidden"
              >
                <FiArrowLeft />
              </span>
              <p className="text-xs md:text-2xl">Writer</p>
            </div>
            <div className="hidden md:flex flex-row items-center ml-auto gap-2">
              <Button className="text-sm text-black border-1 border-gray-300 bg-white-100 p-3 flex flex-row items-center gap-2 rounded-sm">
                <MdShowChart /> <span>5 Credits Limit </span>
              </Button>
              <Button className="text-sm text-black border-1 border-gray-300 bg-white-100 p-3 md:border-blue-700 md:bg-blue-700 md:text-white flex flex-row items-center gap-2 rounded-sm">
                <FiPlus className="text-center" />
                <span className="text-center"> New Document </span>
              </Button>
            </div>
          </div>

          <div className="hidden md:flex flex-row justify-between items-center mt-6">
            <div className="flex items-center w-10/12 gap-2">
              {!showedit && (
                <div className="flex flex-row gap-2 items-center w-5/12">
                  <p className="text-sm md:text-xl text-justify">
                    Project name - 01/02/2024 - 10.00 am
                  </p>
                  <span className="text-sm md:text-xl text-justify text-slate-300">
                    <RiPencilFill
                      className="text-xl"
                      onClick={() => setEdit(true)}
                    />
                  </span>
                </div>
              )}
              {showedit && (
                <div className="w-5/12 p-2">
                  <Input
                    type="textbox"
                    className="w-full h-10 p-2 text-sm border-2 border-slate-100 focus:border-blue-500"
                    placeholder="Project name - 01/02/2024 - 10.00 am"
                  />
                </div>
              )}

              {showedit && (
                <div className="flex flex-row gap-2 p-2 border-2 border-slate-100">
                  <AiOutlineCheck className="text-xl text-blue-600" />
                </div>
              )}
              {showedit && (
                <div className="flex flex-row gap-2 p-2 border-2 border-slate-100">
                  <AiOutlineClose
                    className="text-xl text-blue-600"
                    onClick={() => setEdit(false)}
                  />
                </div>
              )}
            </div>
            <div className="flex">
              <p className="text-base font-medium text-[rgba(0,0,0,0.45)]">
                Changes Saved
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-2 md:mt-6">
          <div className="grid grid-cols-12 min-w-full">
            <div
              className={`col-span-12 overflow-hidden md:col-span-5 lg:col-span-5 md:overflow-y-scroll md:scrollbar-thin ${
                fulleditor && `hidden`
              }`}
            >
              <div className="md:w-11/12">
                <ul className="flex flex-row items-center gap-8 border-b border-[rgba(0,0,0,0.06)]">
                  <li className="hidden md:block">
                    <p
                      onClick={() => processDiv("initial")}
                      className={`flex flex-row items-center gap-2 text-sm py-3 text-[rgba(0,0,0,0.85)] border-b-2 ${
                        showintial || showtemp
                          ? "text-navblue border-navblue active dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      <IoIosArrowRoundBack
                        className="text-2xl"
                        onClick={() => processDiv("intial")}
                      />
                      Template
                    </p>
                  </li>

                  <li className="md:hidden">
                    <p
                      onClick={() => setshowresult(false)}
                      className={`flex flex-row items-center gap-2 text-sm py-3 text-[rgba(0,0,0,0.85)] border-b-2 ${
                        !showresult
                          ? "text-navblue border-navblue active dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent"
                      } `}
                    >
                      <IoIosArrowRoundBack className="text-2xl" /> Template
                    </p>
                  </li>

                  <li className="md:hidden">
                    <p
                      onClick={() => setshowresult(true)}
                      className={`inline-block text-sm py-3 text-[rgba(0,0,0,0.85)] border-b-2 ${
                        showresult
                          ? "text-navblue border-navblue rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      Results
                    </p>
                  </li>

                  <li className="hidden md:block">
                    <p
                      onClick={() => processDiv("expand")}
                      className={`inline-block text-sm py-3 text-[rgba(0,0,0,0.85)] border-b-2 ${
                        showexpand
                          ? "text-navblue border-b-2 border-navblue active dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      Expand
                    </p>
                  </li>
                  <li className="hidden me-2 md:block">
                    <p
                      onClick={() => processDiv("remix")}
                      className={`inline-block text-sm py-3 text-[rgba(0,0,0,0.85)] border-b-2 ${
                        showremix
                          ? "text-navblue border-b-2 border-navblue active dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      Remix
                    </p>
                  </li>
                  <li className="hidden me-2 md:block">
                    <p
                      onClick={() => processDiv("next")}
                      className={`inline-block text-sm py-3 text-[rgba(0,0,0,0.85)] border-b-2 ${
                        shownext
                          ? "text-navblue border-b-2 border-navblue active dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      Next sentence
                    </p>
                  </li>
                </ul>
              </div>

              {showintial && (
                <div className="md:w-11/12">
                  <form
                    method="POST"
                    className={` ${showresult ? "hidden md:block" : ""}`}
                  >
                    <div className="mt-4 md:mt-6">
                      <label className="block mb-2 text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
                        Choose a template to continue writing
                      </label>
                      <div className="flex">
                        <Input
                          type="text"
                          id="input-group-1"
                          className="border border-[#D9D9D9] text-gray-900 text-sm w-full"
                          placeholder="input search text"
                        />
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 border-2 border-l-0">
                          <IoIosSearch />
                        </span>
                      </div>
                    </div>

                    <div className="p-3 mt-6 bg-white flex flex-col gap-6">
                      <div>
                        <h6 className="text-sm font-medium text-[#000000D9] mb-5">
                          Contents
                        </h6>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4">
                            <span className="text-2xl text-navblue">
                              <FaLinkedin />
                            </span>
                            <span className="text-sm text-[#323232]">
                              Linked in Ads Copy
                            </span>
                          </div>

                          <div
                            className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4 hover:bg-slate-100"
                            onClick={() => processDiv("template")}
                          >
                            <span className="text-2xl text-navblue">
                              <MdGrading />
                            </span>
                            <span className="text-sm text-[#323232]">
                              Paragraph Generator
                            </span>
                          </div>

                          <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4">
                            <span className="text-2xl text-navblue">
                              <MdOutlineSpellcheck />
                            </span>
                            <span className="text-sm text-[#323232]">
                              Keyword Generator
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h6 className="text-sm font-medium text-[#000000D9] mb-5">
                          Social
                        </h6>
                        <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4">
                          <span className="text-2xl text-navblue">
                            <FaLinkedin />
                          </span>
                          <span className="text-sm text-[#323232]">
                            Linked in Ads Copy
                          </span>
                        </div>

                        <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4 hover:bg-slate-100">
                          <span className="text-2xl text-navblue">
                            <MdGrading />
                          </span>
                          <span className="text-sm text-[#323232]">
                            Paragraph Generator
                          </span>
                        </div>

                        <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4">
                          <span className="text-2xl text-navblue">
                            <MdOutlineSpellcheck />
                          </span>
                          <span className="text-sm text-[#323232]">
                            Keyword Generator
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col mb-20 gap-2">
                        <h6 className="text-sm text-black-500 font-light mb-5">
                          Social
                        </h6>
                        <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4">
                          <span className="text-2xl text-navblue">
                            <FaLinkedin />
                          </span>
                          <span className="text-sm text-[#323232]">
                            Linked in Ads Copy
                          </span>
                        </div>

                        <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4 hover:bg-slate-100">
                          <span className="text-2xl text-navblue">
                            <MdGrading />
                          </span>
                          <span className="text-sm text-[#323232]">
                            Paragraph Generator
                          </span>
                        </div>

                        <div className="flex items-center border border-[#00000040] gap-4 rounded-sm py-3 px-4">
                          <span className="text-2xl text-navblue">
                            <MdOutlineSpellcheck />
                          </span>
                          <span className="text-sm text-[#323232]">
                            Keyword Generator
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Template Import Next */}
              {showtemp && !showresult && <Template />}

              {/* import Expand Section */}
              {showexpand && <Expand />}

              {/* import Remix Section */}
              {showremix && <Remix />}

              {/* import Nextsentence Section */}
              {shownext && <Next />}
            </div>

            <div
              className={`grid col-span-12 ${
                !fulleditor ? `md:col-span-7` : `md:col-span-12`
              } md:block`}
            >
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700 border-b-2 border-blue-700 inline ml-4">
                    Results
                  </p>
                </div>
                <div className="flex flex-row">
                  <button
                    className="text-black border-2 bg-white-100 text-sm text-center p-2 flex flex-row items-center gap-2 m-2"
                    onClick={() => setFullEditor(!fulleditor)}
                  >
                    <MdOutlineFullscreen />
                    <span>
                      {fulleditor ? "Exist Full Screen" : "Full Screen"}
                    </span>
                  </button>
                </div>
              </div>
              <div className={`${!showresult ? `hidden md:block` : ""}`}>
                <QuillEditor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writerlanding;
