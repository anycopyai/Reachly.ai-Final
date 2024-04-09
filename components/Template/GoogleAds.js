import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import withAuth from "../../hoc/withAuth";
import 'react-loading-skeleton/dist/skeleton.css'
const GoogleAds = ({ googleads }) => {


  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">


      <div className="mb-4 p-0 md:p-6 min-h-screen h-full">
        {/* Content get from AI */}
        <div className="flex flex-col gap-6">
          {
            googleads.map((items) => (
              <div className="bg-white p-4 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3">
                <div className="bg-white p-3 flex flex-col gap-2 items-start min-h-36">
                  <h5 className="flex gap-4 items-center text-xs">
                    Ad .
                    <a href="/" className="pl-1 text-navblue">
                      {items.headline || <Skeleton height={250} width={300} />}
                    </a>
                    <BsThreeDotsVertical />
                  </h5>
                  <h2 className="font-semibold text-navblue text-xl">
                    {items.headline || <Skeleton />}
                  </h2>
                  <p className="text-[rgba(0, 0, 0, 0.85)] text-sm font-medium">
                    {items.description ||  <Skeleton />}
                  </p>
                  <h4 className="font-medium text-sm text-navblue">
                    How Much does it cost? . What is Price range? . Location of the
                    shop.
                  </h4>
                </div>
                <h4 className="flex justify-end text-black opacity-25 text-sm">
                  {items.description.length} / 665 characters
                </h4>
                <div className="flex justify-between items-center mb-2 md:m-0">
                  <div className="flex gap-4 items-center">
                    <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                      <FaRegThumbsUp />
                    </button>
                    <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                      <FaRegThumbsDown />
                    </button>
                  </div>
                  <div className="flex gap-4 items-center">
                    <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                      <IoShareSocialOutline />
                      <span className="text-base text-black opacity-80 hidden md:block">
                        Share
                      </span>
                    </button>
                    <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                      <MdOutlineContentCopy />
                      <span className="text-base text-black opacity-80 hidden md:block">
                        Copy
                      </span>
                    </button>
                    <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                      <AiOutlineDownload />
                      <span className="text-base text-black opacity-80 hidden md:block">
                        Save
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )

            )
          }




          {/* <div className="bg-white p-0 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3">
          <div className="bg-white p-3 flex flex-col gap-2 items-start min-h-36">
            <h5 className="flex gap-4 items-center text-xs">
              Ad .
              <a href="/" className="pl-1 text-navblue">
                https//www. shirts.com/
              </a>
              <BsThreeDotsVertical />
            </h5>
            <h2 className="font-semibold text-navblue text-xl">
              Premium Quality T-Shirts for Every Occasion
            </h2>
            <h4 className="font-medium text-sm text-navblue">
              How Much does it cost? . What is Price range? . Location of the
              shop.
            </h4>
          </div>
          <h4 className="flex justify-end text-black opacity-25 text-sm">
            96 words / 665 characters
          </h4>
          <div className="flex justify-between items-center mb-2 md:m-0">
            <div className="flex gap-4 items-center">
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                <FaRegThumbsUp />
              </button>
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                <FaRegThumbsDown />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                <IoShareSocialOutline />
                <span className="text-base text-black opacity-80 hidden md:block">
                  Share
                </span>
              </button>
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                <MdOutlineContentCopy />
                <span className="text-base text-black opacity-80 hidden md:block">
                  Copy
                </span>
              </button>
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                <AiOutlineDownload />
                <span className="text-base text-black opacity-80 hidden md:block">
                  Save
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-0 md:p-6 border border-color-[rgba(50, 50, 50, 0.25)] flex flex-col gap-3">
          <div className="bg-white p-3 flex flex-col gap-2 items-start min-h-36">
            <h5 className="flex gap-4 items-center text-xs">
              Ad .
              <a href="/" className="pl-1 text-navblue">
                https//www. shirts.com/
              </a>
              <BsThreeDotsVertical />
            </h5>
            <h2 className="font-semibold text-navblue text-xl">
              Premium Quality T-Shirts for Every Occasion
            </h2>
            <h4 className="font-medium text-sm text-navblue">
              How Much does it cost? . What is Price range? . Location of the
              shop.
            </h4>
          </div>
          <h4 className="flex justify-end text-black opacity-25 text-sm">
            96 words / 665 characters
          </h4>
          <div className="flex justify-between items-center mb-2 md:m-0">
            <div className="flex gap-4 items-center">
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                <FaRegThumbsUp />
              </button>
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232]">
                <FaRegThumbsDown />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                <IoShareSocialOutline />
                <span className="text-base text-black opacity-80 hidden md:block">
                  Share
                </span>
              </button>
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                <MdOutlineContentCopy />
                <span className="text-base text-black opacity-80 hidden md:block">
                  Copy
                </span>
              </button>
              <button className="py-2 px-3 md:px-4 rounded-sm text-[#323232] flex items-center gap-[10px]">
                <AiOutlineDownload />
                <span className="text-base text-black opacity-80 hidden md:block">
                  Save
                </span>
              </button>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </SkeletonTheme>
  );
};
// export default withAuth(Browse);
export default withAuth(GoogleAds) ;
