import { Checkbox, Input, Select, Switch } from "antd";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import SelectPicker from "./SelectPicker";

const { TextArea } = Input;

const PromptForm = ({ setGenerate }) => {
  return (
    <form
      method="POST"
      className="md:w-11/12 mt-4 md:mt-10 flex flex-col gap-4 md:gap-6 pb-4"
    >
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className="focus:outline-none">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Language
          </label>
          <Select
            className="w-full rounded-sm text-base h-10"
            defaultValue="English"
            options={[
              {
                value: "english",
                label: "English",
              },
            ]}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Project
          </label>
          {/* Dynamic the project form settings */}
          <Select
            className="w-full rounded-sm text-base h-10"
            defaultValue="Console"
            options={[
              {
                value: "console",
                label: "Console",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between gap-5">
        <p className="mb-2 text-sm font-medium text-gray-900">
          View and modify your projects here
        </p>
        <p className="mb-2 text-sm font-medium text-blue-600">My Projects</p>
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div>
          <p className="mb-3 text-sm font-medium text-gray-900">
            Brainstorm mode
          </p>
          <p className="mb-2 text-sm font-medium text-black opacity-50">
            Enable to write random ideas/inspiration based on selected project
          </p>
        </div>
        <div className="flex items-center flex-col gap-2">
          <Switch defaultChecked />
          <p className="mb-2 text-sm font-medium text-black opacity-50">
            Disabled
          </p>
        </div>
      </div>

      <div className="relative">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Topic
        </label>
				<TextArea placeholder="feature you provide" rows={2} className="rounded-sm resize-none" />
        <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
          0/75
        </span>
      </div>

      <div className="relative">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Benefit
        </label>
				<TextArea placeholder="benefit you provide" rows={2} className="rounded-sm resize-none" />
        <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
          0/75
        </span>
      </div>

      <div className="relative">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Feature
        </label>
				<TextArea placeholder="feature you provide" rows={2} className="rounded-sm resize-none" />
        <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
          0/75
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Checkbox className="text-sm text-black opacity-90">
          Add testimonials
        </Checkbox>
        <Checkbox className="text-sm text-black opacity-90">Add FAQs</Checkbox>
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex items-center gap-1">
          <p className="text-sm font-medium text-gray-900">Safety Guidelines</p>
          <IoIosInformationCircleOutline />
        </div>
        <div className="flex items-center flex-col gap-2">
          <Switch defaultChecked />
          <p className="mb-2 text-sm font-medium text-black opacity-50">
            Disabled
          </p>
        </div>
      </div>
{/* 
      <SelectPicker/> */}

      {/* <button className="text-gray bg-white-100 hover:bg-gray-100 focus:outline-none text-sm sm:w-auto px-5 py-2.5 text-center mb-2">
                  Skip Intro
                </button> */}

      <button
        type="button"
        className="text-white bg-[#0033FF] hover:bg-blue-700 hover:text-white focus:outline-none font-medium text-base px-5 py-2.5 text-center w-full"
        onClick={() => setGenerate(true)}
      >
        Generate Copy
      </button>
    </form>
  );
};

export default PromptForm;
