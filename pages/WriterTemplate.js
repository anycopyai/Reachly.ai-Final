import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Input, Select, Switch } from "antd";
const { TextArea } = Input;

const WriterTemplate = () => {
  const [showtemp, settempresult] = useState(false);
  const [isIntroActive, setIsIntroActive] = useState(0);

  return (
    <div className="flex flex-col gap-6 md:w-11/12">
      {/* Template Section */}
      <div className="flex flex-col mt-4 md:mt-6">
        <label className="mb-2 text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
          Selected Template
        </label>
        <Select
          className="w-full rounded-sm text-base h-10"
          placeholder="Paragraph Generator"
          name="language"
          options={[
            {
              value: "Paragraph Generator",
            },
          ]}
        />
      </div>

      {/* Prompt Section */}
      <div className="flex flex-col text-sm font-medium text-center text-black-600 border-b border-gray-200">
        <ul className="flex flex-row md:text-sm items-center gap-8 -mb-px">
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => settempresult(false)}
              class={`flex flex-row items-center gap-2 ${
                !showtemp &&
                `text-navblue border-b-2 border-navblue active dark:text-blue-500 dark:border-blue-500 py-3`
              } `}
            >
              Prompt
            </a>
          </li>

          <li>
            <a
              href="javascript:void(0)"
              onClick={() => settempresult(true)}
              className={`inline-block ${
                showtemp &&
                `text-navblue border-b-2 border-navblue active dark:text-blue-500 dark:border-blue-500 py-3`
              }`}
            >
              Results
            </a>
          </li>
        </ul>
      </div>

      {!showtemp && (
        <div className="flex" id="prompt">
          <form method="POST" className="basis-full flex flex-col gap-6">
            {/* Form Start */}
            <div className="flex flex-row justify gap-6">
              <div className="basis-1/2 flex flex-col">
                <label className="mb-2 text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
                  Language
                </label>
                <Select
                  className="w-full rounded-sm text-base h-10"
                  placeholder="English"
                  name="language"
                  options={[
                    {
                      value: "english",
                      label: "English",
                    },
                    {
                      value: "hindi",
                      label: "Hindi",
                    },
                  ]}
                />
              </div>
              <div className="basis-1/2 flex flex-col">
                <label className="mb-2 text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
                  Project
                </label>
                {/* Dynamic the project form settings */}
                <Select
                  className="w-full rounded-sm text-base h-10"
                  name="project"
                  placeholder="Console"
                  options={[
                    {
                      value: "console",
                      label: "Console",
                    },
                    {
                      value: "my-project",
                      label: "My Project",
                    },
                  ]}
                />
              </div>
            </div>

            <div className="relative">
              <label className="mb-2 text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
                Topic
              </label>
              <TextArea
                placeholder="provide your audience"
                className="rounded-sm resize-none block text-sm text-black border border-gray-300 w-full h-12 placeholder:text-slate-300"
              />
              <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
                0/50
              </span>
            </div>

            <div className="flex flex-row justify-between items-center">
              <label className="text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
                Safety Guideliness
                <IoIosInformationCircleOutline className="inline-block text-xl text-slate-400" />
              </label>
              <div>
                <Switch size="small" />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="basis-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
              >
                Generate Template
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Results Section */}
      {showtemp && (
        <div className="flex flex-col mb-10 gap-6">
          <p className="text-sm text-[rgba(0,0,0,0.45)]">
            Select any of the below results to apply on your writer content
          </p>
          <div
            onClick={() => setIsIntroActive(1)}
            className={`p-6 flex flex-col gap-6 rounded-[26px] ${
              isIntroActive === 1 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
            }`}
          >
            <div>
              <span
                className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
                  isIntroActive === 1
                    ? "bg-[#0B56D0] text-white"
                    : "bg-[#E9EAEE] text-black"
                }`}
              >
                Draft 1
              </span>
            </div>
            <p className="text-sm text-black">
              Fitness journey, FitLife, all-in-one fitness companion, beginner,
              seasoned pro, app, guide, personalized workout plans, track
              progress, motivated community
            </p>
          </div>
          <div
            onClick={() => setIsIntroActive(2)}
            className={`p-6 flex flex-col gap-6 rounded-[26px] ${
              isIntroActive === 2 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
            }`}
          >
            <div>
              <span
                className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
                  isIntroActive === 2
                    ? "bg-[#0B56D0] text-white"
                    : "bg-[#E9EAEE] text-black"
                }`}
              >
                Draft 2
              </span>
            </div>
            <p className="text-sm text-black">
              fitness journey, FitLife, all-in-one fitness companion, beginner,
              seasoned pro, app, guide, personalized workout plans, track
              progress, motivated community
            </p>
          </div>
          <div
            onClick={() => setIsIntroActive(3)}
            className={`p-6 flex flex-col gap-6 rounded-[26px] ${
              isIntroActive === 3 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
            }`}
          >
            <div>
              <span
                className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
                  isIntroActive === 3
                    ? "bg-[#0B56D0] text-white"
                    : "bg-[#E9EAEE] text-black"
                }`}
              >
                Draft 3
              </span>
            </div>
            <p className="text-sm text-black">
              fitness journey, FitLife, all-in-one fitness companion, beginner,
              seasoned pro, app, guide, personalized workout plans, track
              progress, motivated community
            </p>
          </div>
          <div
            onClick={() => setIsIntroActive(4)}
            className={`p-6 flex flex-col gap-6 rounded-[26px] ${
              isIntroActive === 4 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
            }`}
          >
            <div>
              <span
                className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
                  isIntroActive === 4
                    ? "bg-[#0B56D0] text-white"
                    : "bg-[#E9EAEE] text-black"
                }`}
              >
                Draft 4
              </span>
            </div>
            <p className="text-sm text-black">
              fitness journey, FitLife, all-in-one fitness companion, beginner,
              seasoned pro, app, guide, personalized workout plans, track
              progress, motivated community
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriterTemplate;
