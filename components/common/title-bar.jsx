// import { useRouter } from "next/router";
import React from 'react';
// import { Link } from "react-router-dom";

export default function TitleBar() {
  // const nav = useRouter();
  return (
    <div className=" flex justify-between h-[87px] items-center">
      <div className="flex items-center gap-6">
        <a href="/">
          <img src="icons/svg/ArrowLeft.svg" alt="" className="w-8" />
        </a>
        <h1>URL to Ads</h1>
        <img src="icons/svg/star.svg" alt="" className="w-[22px]" />
      </div>
      <button className="flex bg-[#0033FF] gap-2 justify-center items-center text-white h-[39px] w-[160px] rounded-2px">
        <img src="icons/svg/ai-2-star.svg" alt="" className="w-[14px]" />

        <span>5 Credits Left</span>
      </button>
    </div>
  );
}
