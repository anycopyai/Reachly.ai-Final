"use client";
import React from "react";

// type TProps = {
//   label: string,
//   children?: any,
// };

export const Label = ({ label, children }) => {
  if (!label) return <></>;
  return (
    <span className="mb-2 block text-sm font-semibold leading-[16.94px] text-[#151F4E]">
      {label} {children}
    </span>
  );
};
