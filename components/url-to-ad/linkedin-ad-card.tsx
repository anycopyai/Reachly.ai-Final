import React from 'react';

export default function LinkedinAdCard() {
  return (
    <div className="mx-auto border border-black/25 pt-3 w-[500px] rounded-lg">
      <div className=" flex flex-col  ">
        <div className="px-3 flex justify-between">
          <div className="flex items-center gap-3 h-[54px] ">
            <img src="demo/profile-icon.png" className="w-[46px]" alt="" />
            <div className="space -y-1">
              <h1 className="font-semibold text-[13px]">Console</h1>
              <p>45 548 followers</p>
              <p>Promoted</p>
            </div>
          </div>
          <img
            src="icons/svg/verticle-3-dot.svg"
            className="rotate-90"
            alt=""
          />
        </div>
        <div className="px-3 mt-4">
          <p>
            Elevate your brand with Console, The leading online printing service
            for business, entrepreneurs, and individuals. From business cards to
            Personalized gifts, we deliver high- quality solutions with
            excellence and innovation. #Console #CustomPrinting
          </p>
        </div>
        <div className="mt-[12px]">
          <img src="demo/dog.png" alt="" />

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
          <img src="icons/svg/linkedin-like.svg" alt="" />
          <span className="h-[14px]">Like</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="icons/svg/linkedin-comment.svg" alt="" />
          <span className="h-[14px]">Comment</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="icons/svg/linkedin-share.svg" alt="" />
          <span className="h-[14px]">Share</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="icons/svg/linkedin-share2.svg" alt="" />
          <span className="h-[14px]">Share</span>
        </div>
      </div>
    </div>
  );
}
