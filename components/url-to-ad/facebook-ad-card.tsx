import React from 'react';

export default function FacebookAdCard() {
  return (
    <div className="mx-auto border border-black/25 pt-3 w-[500px] rounded-lg">
      <div className=" flex flex-col gap-4 ">
        <div className="px-3 flex justify-between">
          <div className="flex items-center gap-3">
            <img src="demo/profile-icon.png" alt="" />
            <div>
              <h1 className="font-semibold text-[13px]">Club Doggo</h1>
              <div className="flex items-center gap-2">
                <span>Sponsored</span>
                <span className="pb-1.5">.</span>
                <img src="icons/svg/globle.svg" alt="" />
              </div>
            </div>
          </div>
          <img
            src="icons/svg/verticle-3-dot.svg"
            className="rotate-90"
            alt=""
          />
        </div>
        <div className="px-3">
          <p>Some default post text here...</p>
          <p>I have nothing to say but you need to buy it.</p>
        </div>
        <div className="">
          <img src="demo/dog.png" alt="" />
          <div className="bg-[#F0F2F5] px-4 h-[ 56px] py-3 flex justify-between items-center">
            <h1 className="font-semibold text-[13px]">Headline</h1>
            <div className="rounded font-semibold text-[13px] p-3 bg-[#CED0D4] leading-[15px] ">
              Shop Now
            </div>
          </div>
          <div className="pl-[14px] pr-4 py-[10px] flex justify-between">
            <div className="flex gap-[6px] items-center text-[#65676B]">
              <img src="icons/image/fb-reactions.png" alt="" />
              <span>129</span>
            </div>
            <p className="text-[#65676B]">12 Comments 8 Shares</p>
          </div>
        </div>
      </div>
      <div className="border-t border-black/25  pl-[24px] pr-[25px] py-4 flex justify-between text-[13px]">
        <div className="flex items-center gap-2">
          <img src="icons/svg/fb-like.svg" alt="" />
          <span>Like</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="icons/svg/fb-comment.svg" alt="" />
          <span>Comment</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="icons/svg/fb-share.svg" alt="" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
