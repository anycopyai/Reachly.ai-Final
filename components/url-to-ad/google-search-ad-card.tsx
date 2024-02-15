import React from 'react';

export default function GoogleSearchADCard() {
  return (
    <div
      className="p-3 flex flex-col gap-2 w-full h-[156px]  "
      style={{
        boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.05)',
      }}>
      <div className="flex items-center gap-[10px]">
        <p>
          <span className="font-semibold text-xs">Ad .</span>{' '}
          <span className="text-primary">https://www.shirts.com/</span>
        </p>
        <img src="icons/svg/verticle-3-dot.svg" alt="" />
      </div>
      <h1 className="text-primary text-xl font-semibold">
        Premium Quality T-Shirts for Every Occasion
      </h1>
      <p className="text-primary text-sm font-medium">
        How Much does it cost? . What is Price range? . Location of the shop.
      </p>
    </div>
  );
}
