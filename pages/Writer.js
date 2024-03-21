// pages/writer.js
import React, { useState } from "react";
import Sidebar from "../components/sidebar"; // Adjust the path as necessary
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { useRouter } from "next/router";
import { MdShowChart } from "react-icons/md";
import { Button } from "antd";
import WriterForm from "../components/common/WriterForm";

const introData = [
  {
    tag: "Draft 1",
    desc: "In the age of interconnectedness, T-shirts paying homage to niche interests and pop culture references have experienced a meteoric rise in popularity. Whether adorned with iconic movie quotes, references to beloved TV shows, or symbols from video games, these T-shirts serve as a wearable canvas for enthusiasts to showcase their passions. The allure lies in the sense of community fostered by these designs, creating a connection among individuals who share common interests. As social media continues to play a pivotal role in shaping pop culture, T-shirts that tap into these phenomena have become not just fashion statements but cultural badges proudly worn by the masses.",
  },
  {
    tag: "Draft 2",
    desc: "The allure of artistic minimalism has ushered in a revolution in T-shirt design. Clean lines, subtle details, and carefully curated visuals come together to form designs that are both sophisticated and visually striking. Abstract art, geometric patterns, and artistic symbolism take center stage, appealing to those with a penchant for understated elegance. As consumers increasingly gravitate towards simplicity and timeless aesthetics, T-shirts featuring artistic minimalism have secured their spot as a top choice for those who appreciate the marriage of art and fashion.",
  },
  {
    tag: "Draft 3",
    desc: "In the realm of T-shirt designs, dynamic typography reigns supreme. From empowering quotes to witty expressions, T-shirts adorned with captivating text have become the go-to choice for those seeking garments that make a statement. Bold fonts, creative lettering, and strategically placed phrases contribute to the allure of these designs, allowing individuals to express their personality and beliefs without uttering a word. The fusion of impactful messages with visually appealing typography creates a symbiotic relationship that resonates with a diverse audience, making dynamic typography T-shirts a hot commodity in the fashion sphere.",
  },
];

const Writer = () => {
  const [isgenerate, setGenerate] = useState(false);
  const [showresult, setshowresult] = useState(false);
  const [isIntroActive, setIsIntroActive] = useState(false);

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/Writerlanding");
  };

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

          <div className="flex flex-grow items-center justify-between gap-5 mt-3 md:mt-0">
            <div className="flex items-center gap-1">
              <span
                onClick={() => router.push("/browse")}
                className="text-3xl cursor-pointer block md:hidden"
              >
                <FiArrowLeft />
              </span>
              <p className="text-xs md:text-3xl text-[#262626]">Writer</p>
            </div>

            <div className="hidden md:flex flex-row items-center gap-6">
              <Button className="text-xs md:text-sm text-black border-1 border-gray-300 bg-white-100 p-2 md:p-3 py-1 md:py-3 flex flex-row items-center gap-2 md:flex rounded-sm">
                <MdShowChart /> <span>5 Credits Limit </span>
              </Button>
              <Button className="text-sm text-black border-1 border-gray-300 bg-white-100 py-3 md:px-12 md:border-navblue md:bg-navblue md:text-white flex flex-row items-center gap-2 rounded-sm">
                <FiPlus className="text-center" />
                <span className="text-center"> New Document </span>
              </Button>
            </div>
          </div>

          <div className="flex gap-5 border-b-2 w-full mt-4 md:mt-10 md:hidden">
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
        </div>

        <div className="flex md:mt-10">
          <div className="grid grid-cols-12 min-w-full">
            <div
              className={` ${
                showresult
                  ? `hidden col-span-12 md:col-span-5 md:block overflow-y-scroll scrollbar-thin`
                  : `col-span-12 overflow-hidden md:col-span-5 md:overflow-y-scroll md:scrollbar-thin`
              }`}
              id="intro"
            >
              <h1 className="hidden md:inline-block text-sm text-navblue border-b-2 border-navblue">
                Intro
              </h1>
              <WriterForm isgenerate={isgenerate} setGenerate={setGenerate} />
            </div>

            <div
              className={` ${
                !showresult
                  ? `hidden col-span-12 md:col-span-7 md:block`
                  : `col-span-12 md:col-span-7 md:block`
              }`}
              id="results"
            >
              <h1 className="text-sm text-navblue border-b-2 border-navblue hidden ml-4 md:inline-block">
                Results
              </h1>

              {!isgenerate ? (
                <div className="relative top-56 flex justify-center items-center">
                  <p className="text-sm text-center text-[rgba(0,0,0,0.45)]">
                    Generate your intro to see results here or Skip intro
                  </p>
                </div>
              ) : (
                <div className="result mt-6 md:px-6 pb-6">
                  {/* Content get from AI */}
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <p className="text-base text-black">Choose an Intro</p>
                      <span className="text-sm text-[rgba(0,0,0,0.45)]">
                        Don't worry,you can change it later
                      </span>
                    </div>

                    {introData?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex flex-col gap-6 rounded-3xl p-6 ${
                            isIntroActive === true
                              ? "bg-[#D3E3FD]"
                              : "bg-[#F9FAFE]"
                          }`}
                          onMouseEnter={() => setIsIntroActive(true)}
                          onMouseLeave={() => setIsIntroActive(false)}
                          onClick={() => setIsIntroActive(true)}
                        >
                          <div>
                            <span
                              className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
                                isIntroActive === true
                                  ? "bg-[#0B56D0] text-white"
                                  : "bg-[#E9EAEE] text-black"
                              }`}
                            >
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-sm text-black">{item.desc}</p>
                        </div>
                      );
                    })}

                    <div className="flex flex-row gap-6 justify-end">
                      <Button
                        className="text-black border-1 bg-white-100 focus:outline-none text-base px-5 py-2.5 rounded-sm"
                        onClick={() => setGenerate(false)}
                      >
                        Rewrite Intro
                      </Button>
                      <Button
                        className={`focus:outline-none text-base px-5 py-2.5 rounded-sm ${
                          isIntroActive === true
                            ? "text-white bg-navblue"
                            : "text-[rgba(0,0,0,0.25)] bg-[#F5F5F5]"
                        }`}
                        onClick={() => handleNavigation()}
                      >
                        Continue to writer
                      </Button>
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

export default Writer;
