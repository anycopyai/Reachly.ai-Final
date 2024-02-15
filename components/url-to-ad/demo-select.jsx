import React from "react";

export default function DemoSelect({ label, defaultValue }) {
  return (
    <div className="space-y-2 ">
      <label htmlFor="">{label}</label>
      <div className="border rounded-[2px] w-[276px] h-10 p-2 gap-2 flex items-center">
        <input
          type="text"
          defaultValue={defaultValue}
          className="w-full !border-none !focus:border-transparent !focus:border-none outline-none !h-[20px] !p-0 leading-none text-base"
        />
        <img src="svg/icons/Down.svg" alt="" />
      </div>
    </div>
  );
}
