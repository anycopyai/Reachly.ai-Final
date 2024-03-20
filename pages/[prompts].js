import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import Sidebar from "../components/sidebar";
import { FaStar } from "react-icons/fa6";
import LandingPage from "../components/Template/LandingPage";
import PromptForm from "../components/common/PromptForm";
import GoogleAds from "../components/Template/GoogleAds";
import FacebookAds from "../components/Template/FacebookAds";
import LinkedInAds from "../components/Template/LinkedInAds";
import UrlToAds from "../components/Template/UrlToAds";
import ColdEmail from "../components/Template/ColdEmail";
import HeaderDiscription from "../components/Template/HeaderDiscription";
import ProductDiscription from "../components/Template/ProductDiscription";
import Features from "../components/Template/Features";
import PitchAnAngle from "../components/Template/PitchAnAngle";
import SalesOutreach from "../components/Template/SalesOutreach";
import BlogIdeas from "../components/Template/BlogIdeas";
import { Button, Spin } from "antd";

const Prompt = () => {
  const [isgenerate, setGenerate] = useState(false);
  const [showresult, setshowresult] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [inputData, setInputData] = useState([]);
  const [fixedInput, setfixedInput] = useState({
    language: "English",
    project: "My Project",
    brainstorm: false,
    safety: false,
  });

  const router = useRouter();

  useEffect(() => {
    if (router?.query?.data) {
      const data = JSON.parse(router?.query?.data);
      setInputData(data?.extrafields);
    }
  }, [router]);

  // console.log(1234,inputData)

  useEffect(()=>{
    if(isgenerate){
      setShowSpinner(true);
      setTimeout(()=>{
        setShowSpinner(false);
      },2000)
    }
  },[isgenerate])

  const handleChange = (e) => {
    // console.log(4343,e);
    // console.log(7878,e?.target?.name);
    setInputData((prev) => {
      return prev.map((item) => {
        if (item.label === e.target.name) {
          item.value = e.target.value || e.target.checked;
        }
        return item;
      });
    });
  };

  return (
    <div className="flex flex-col lg:flex-row md:ml-20 h-screen">
      <Sidebar />
      <div className="flex-grow m-5 overflow-hidden">
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
          <Button className="text-xs md:text-sm text-black border-1 border-gray-300 bg-white-100 p-2 md:p-3 py-2 md:py-3 flex flex-row items-center gap-2 md:flex rounded-sm">
            {/* <MdShowChart />  */}
            <img src="/images/icon-star-upgrade.svg" alt="star" />
            <span>5 Credits Limit </span>
          </Button>
        </div>

        <div className="flex flex-grow items-center gap-5 mt-3 md:mt-0">
          <div className="flex items-center gap-1 md:gap-6">
            <span
              onClick={() => router.push("/browse")}
              className="text-base md:text-3xl cursor-pointer"
            >
              <FiArrowLeft className="text-[#323232]" />
            </span>
            <p className="text-sm md:text-3xl font-medium">
              {router?.query?.heading}
            </p>
            <span className="text-[#FACC15] text-lg opacity-80 hidden md:block">
              <FaStar />
            </span>
          </div>
          {/* <div className='flex ml-auto'>
            <button className="text-sm text-black border-1 border-gray-300 bg-white-100 md:hidden p-2 flex items-center gap-2"><FiPlus /> <span> New Document </span></button>

          </div> */}

          <div className="flex flex-row items-center ml-auto gap-2">
            {/* <button className="text-xs md:text-sm text-black border-1 border-gray-300 bg-white-100 p-2 md:p-3 py-1 md:py-3 flex flex-row items-center gap-2 md:flex">
              <MdShowChart /> <span>5 Credits Limit </span>
            </button> */}
            {/* <button className="text-sm text-black border-1 border-gray-300 bg-white-100 p-3 md:border-blue-700 md:bg-blue-700 md:text-white flex flex-row md:hidden items-center gap-2">
              <FiPlus className="text-center" />
              <span className="text-center"> New Document </span>
            </button> */}
          </div>
        </div>

        <div className="flex gap-5 border-b-2 w-full mt-6 md:hidden">
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

        <div className="flex flex-col md:mt-10 min-h-[85%] md:min-h-[90%]">
          <div className="hidden md:grid grid-cols-12 min-w-full">
            <div className="col-span-12 md:col-span-5">
              <h1 className="hidden md:inline-block text-sm text-navblue font-medium border-b-2 border-navblue">
                Prompt
              </h1>
            </div>
            <div className="col-span-12 md:col-span-7">
              <h1 className="hidden text-sm text-navblue font-medium border-b-2 border-navblue ml-4 md:inline-block">
                Results
              </h1>
            </div>
          </div>
          <div className="block md:grid grid-cols-12 min-w-full flex-1">
            <div
              className={`relative col-span-12 md:col-span-5 overflow-y-auto scrollbar-thin h-[calc(100vh-175px)] md:h-[calc(100vh-145px)] ${
                showresult ? `hidden md:block ` : ""
              }`}
              id="intro"
            >
              <PromptForm
                inputData={inputData}
                fixedInput={fixedInput}
                setfixedInput={setfixedInput}
                setInputData={setInputData}
                handleChange={handleChange}
                setGenerate={setGenerate}
              />
            </div>
            <div
              className={`col-span-12 md:col-span-7 overflow-y-auto h-[calc(100vh-200px)] md:h-[calc(100vh-170px)] mt-6 pb-2 ${
                !showresult ? `hidden md:block test` : `md:block hello`
              } ${isgenerate && "bg-white md:bg-[#F5F5F5]"}`}
              id="results"
            >
              {!isgenerate  ? (
                <div className="relative top-40 flex justify-center items-center">
                  <p className="text-sm text-center text-slate-400">
                    Generate your intro to see results here or Skip intro
                  </p>
                </div>
              ) : showSpinner ? <Spin size="small" /> : (
                <div className="result h-full">
                  {router.query.prompts === "landing-page" && <LandingPage />}
                  {router.query.prompts === "google-ads" && <GoogleAds />}
                  {router.query.prompts === "facebook-ads" && <FacebookAds />}
                  {router.query.prompts === "linkedin-ads" && <LinkedInAds />}
                  {router.query.prompts === "keyword-generator" && (
                    <LinkedInAds />
                  )}
                  {router.query.prompts === "facebook-ad-short" && (
                    <LinkedInAds />
                  )}
                  {router.query.prompts === "amazon-ads" && <LinkedInAds />}
                  {router.query.prompts === "meta-description" && (
                    <LinkedInAds />
                  )}
                  {router.query.prompts === "aida-copywriting" && (
                    <LinkedInAds />
                  )}
                  {router.query.prompts === "url-to-ads" && <UrlToAds />}
                  {router.query.prompts === "cold-emails" && <ColdEmail />}
                  {router.query.prompts === "race-copywriting" && (
                    <LinkedInAds />
                  )}
                  {router.query.prompts === "header-description" && (
                    <HeaderDiscription />
                  )}
                  {router.query.prompts === "product-description" && (
                    <ProductDiscription />
                  )}
                  {router.query.prompts === "features" && <Features />}
                  {router.query.prompts === "pitch-an-angel" && (
                    <PitchAnAngle />
                  )}
                  {router.query.prompts === "sales-outreach" && (
                    <SalesOutreach />
                  )}
                  {router.query.prompts === "blog-ideas" && <BlogIdeas />}
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
