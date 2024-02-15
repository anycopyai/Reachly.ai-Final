import React from "react";
import Sidebar from "../components/sidebar";
import TitleBar from "../components/common/title-bar";
import UrlToAdPage from "../components/url-to-ad/url-to-ad";

export default function UrlToAd() {
  return (
    <div className="flex  h-fit ml-20 overflow-hidden bg-white">
      <Sidebar children={""} />
      <UrlToAdPage />
    </div>
  );
}
