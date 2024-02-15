import React from 'react';

export default function TwitterADCard() {
  return (
    <div className="mx-auto border border-black/25 pb-6 pt-2 w-[500px] rounded-lg">
      <div className=" flex flex-col ">
        <div className="py-3 px-4 w-[468px] mx-auto flex justify-between ">
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
        <div className="px-4 w-[468px] mx-auto pb-7 pt-1">
          <p>
            Elevate your brand with Console, The leading online printing service
            for business, entrepreneurs, and individuals. From business cards to
            Personalized gifts, we deliver high- quality solutions with
            excellence and innovation. #Console #CustomPrinting
          </p>
        </div>
        <div className="px-8 space-y-4">
          <div className=" rounded-lg overflow-hidden border border-black/10">
            <img src="demo/dog.png" alt="" />
            <div className=" px-6 h-[ 56px] py-3 flex flex-col justify-between gap-2">
              <h1 className=" text-[18px] text-black/50">
                https://console.in/
              </h1>
              <h1 className="font-semibold text-[20px]">
                Transform Your Brand with Console
              </h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img src="icons/svg/twitter-comment.svg" alt="" />
              <p>12</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="icons/svg/twitter-repost.svg" alt="" />
              <p>5</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="icons/svg/twitter-like.svg" alt="" />
              <p>66</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="icons/svg/twitter-share.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
