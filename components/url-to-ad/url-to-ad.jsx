import React from "react";
import Prompt from "./prompt";
import TitleBar from "../common/title-bar";
import Result from "./result";

export default function UrlToAdPage() {
  return (
    <div
      className=" flex p-8  flex-col h-fit w-full text-sm"
      style={{ backgroundColor: "#ffffff" }}
    >
      <TitleBar />
      <div className="flex mt-4">
        <Prompt />
        <Result />
      </div>
    </div>
  );
}
