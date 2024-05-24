import React, { useState } from "react";

import Sidebar from "../components/sidebar";

import { FiPlus } from "react-icons/fi";

import { Button } from "antd";

import QuillEditor from "../components/QuillEditor";

const Writer = () => {

return (

<div className="flex flex-col lg:flex-row md:ml-20 h-screen">

<Sidebar />

<div className="flex-grow m-5">

<div className="bg-white sticky md:static top-0 pt-4 md:pt-0 z-10">

<div className="flex flex-grow items-center justify-between gap-5 mt-3 md:mt-0">

<div className="flex items-center gap-1 ml-16">

<p className="text-xs md:text-3xl text-\[#262626\] font-bold">
  Writer
</p>

</div>

<div className="flex justify-center">
  <Button className="bg-black text-white font-bold px-4 py-0.5 rounded-3xl w-72 text-center">
    Upgrade for Unlimited
  </Button>
</div>

<div className="hidden md:flex flex-row items-center gap-6">

<Button className="text-sm text-black border-1 border-gray-300 bg-white-100 py-3 md:px-12 md:border-navblue md:bg-navblue md:text-white flex flex-row items-center gap-2 rounded-sm">

<FiPlus className="text-center" />

<span className="text-center"> New Document </span>

</Button>

</div>

</div>

</div>

<div className="flex md:mt-10">

<div className="grid grid-cols-12 min-w-full">

<div className="col-span-12 md:col-span-12 md:block">

<div className="px-6 editor-wrapper">

<QuillEditor />

</div>

</div>

</div>

</div>

</div>

</div>

);

};

export default Writer;