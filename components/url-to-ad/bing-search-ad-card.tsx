import React from 'react';

export default function BingSearchADCard() {
  return (
    <div
      className="p-3 flex flex-col gap-2 w-full h-[156px]  "
      style={{
        boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.05)',
      }}>
      <h1 className="text-primary text-xl font-semibold">
        Premium Quality T-Shirts for Every Occasion
      </h1>
      <p className="text-xl">
        Discover a wide range of colors and designs. Perfect for casual and
        everyday wear,Special discounts on our exclusive T-shirt designs.
        Limited stock available!
      </p>
      <p className="text-primary text-sm font-medium">
        How Much does it cost? . What is Price range? . Location of the shop.
      </p>
    </div>
  );
}
