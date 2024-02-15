import React from 'react';
import BorderButton from './border-button';
import GoogleSearchADCard from './google-search-ad-card';

export default function ADCardViewer({ card }: { card: React.ReactNode }) {
  return (
    <div className=" bg-white p-6 rounded-[2px] flex flex-col gap-3 w-full">
      {card}
      <p className="flex justify-end text-sm text-black/25">
        50 words / 250 characters
      </p>
      <div className="flex justify-between">
        <div className="flex gap-[17px]">
          <BorderButton>
            <img src="icons/svg/like.svg" alt="" />
          </BorderButton>
          <BorderButton>
            <img src="icons/svg/dislike.svg" alt="" />
          </BorderButton>
        </div>
        <div className="flex gap-[17px]">
          <BorderButton className="w-[100px]">
            <img src="icons/svg/share.svg" alt="" />
            <span>Share</span>
          </BorderButton>
          <BorderButton className="w-[96px]">
            <img src="icons/svg/copy.svg" alt="" />
            <span>Share</span>
          </BorderButton>
          <BorderButton className="w-[93px]">
            <img src="icons/svg/save.svg" alt="" />
            <span>Save</span>
          </BorderButton>
        </div>
      </div>
    </div>
  );
}
