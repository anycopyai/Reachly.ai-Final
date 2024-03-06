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
import LandingPage from "../components/Template/LandingPage";
import PromptForm from "../components/common/PromptForm";
import GoogleAds from "../components/Template/GoogleAds";
import FacebookAds from "../components/Template/FacebookAds";
import LinkedInAds from "../components/Template/LinkedInAds";
import UrlToAds from "../components/Template/UrlToAds";

const Prompt = () => {
  const [isgenerate, setGenerate] = useState(false);
  const [showresult, setshowresult] = useState(false);
  const [inputData, setInputData] = useState([]);
  const [fixedInput, setfixedInput] = useState({language:'English', project:'My Project', brainstorm:false, safety:false});

  const router = useRouter();

  useEffect(()=>{
    if(router?.query?.data)
    {
      const data = JSON.parse(router?.query?.data)
      setInputData(data?.extrafields)
    }
  },[router])

  const handleNavigation = () => {
    router.push("/Writerlanding");
  };
  // console.log(1234,fixedInput)

  const handleChange = (e) => {  
    // console.log(4343,e);
    // console.log(7878,e?.target?.name);
    setInputData((prev)=>{
      return prev.map((item)=>{
        if(item.label === e.target.name)
        {
          item.value = e.target.value || e.target.checked
        }
        return item
      })
    })
  }

  return (
    <div className="flex flex-col lg:flex-row md:ml-20 h-screen">
      <Sidebar />
      <div className="flex-grow m-5">
        <div className="flex flex-grow items-center gap-5">
          <div className="flex items-center gap-6">
            <span onClick={() => router.push("/Browse")} className="text-3xl cursor-pointer">
              <FiArrowLeft />
            </span>
            <p className="text-sm md:text-3xl font-medium">{router?.query?.heading}</p>
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
              <PromptForm inputData={inputData} fixedInput={fixedInput} setfixedInput={setfixedInput} setInputData={setInputData} handleChange={handleChange} handleFixedInput={handleFixedInput} setGenerate={setGenerate} />
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
              ) : (<>
                {router.query.prompts === "landing-page" && <LandingPage />}
                {router.query.prompts  === "google-ads" && <GoogleAds />}
                {router.query.prompts  === "facebook-ads" && <FacebookAds />}
                {router.query.prompts  === "linkedin-ads" && <LinkedInAds />}
                {router.query.prompts  === "keyword-generator" && <LinkedInAds />}
                {router.query.prompts  === "facebook-ad-short" && <LinkedInAds />}
                {router.query.prompts  === "amazon-ads" && <LinkedInAds />}
                {router.query.prompts  === "meta-description" && <LinkedInAds />}
                {router.query.prompts  === "url-to-ads" && <UrlToAds />}
                
                
                
                </>)}
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
