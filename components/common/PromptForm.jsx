import { Button, Checkbox, Input, Select, Switch } from "antd";
import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TagsInput } from "react-tag-input-component";
import withAuth from "../../hoc/withAuth";
const { TextArea } = Input;

const PromptForm = ({
  inputData,
  setGenerate,
  handleChange,
  setInputData,
  fixedInput,
  setfixedInput,
  handleGenerate,
  setValues,
}) => {
  function typin(e) {
    alert(e.target.value);
    setValues(e.target.value);
  }
  return (
    <form method="POST" className="md:w-11/12 mt-4 md:mt-10 pb-4 h-full">
      <div className="flex flex-col gap-4 md:gap-6 pb-12">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="focus:outline-none">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Language
            </label>
            <Select
              className="w-full rounded-sm text-base h-10"
              placeholder="English"
              value={fixedInput.language}
              name="language"
              onChange={(e) =>
                setfixedInput((prev) => {
                  return {
                    ...prev,
                    language: e,
                  };
                })
              }
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Project
            </label>
            {/* Dynamic the project form settings */}
            <Select
              className="w-full rounded-sm text-base h-10"
              value={fixedInput.project}
              name="project"
              onChange={(e) =>
                setfixedInput((prev) => {
                  return {
                    ...prev,
                    project: e,
                  };
                })
              }
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
            <Switch
              value={fixedInput.brainstorm}
              onChange={(e) =>
                setfixedInput((prev) => {
                  return {
                    ...prev,
                    brainstorm: e,
                  };
                })
              }
              className="bg-[#BFBFBF]"
            />
            <p className="mb-2 text-sm font-medium text-black opacity-50">
              {fixedInput.brainstorm ? "Enabled" : "Disabled"}
            </p>
          </div>
        </div>

        {inputData?.map((el, index) => {
          return (
            <div key={index}>
              {el.type === "textArea" && (
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {el.label}
                  </label>
                  <TextArea
                    placeholder={el.placeholder}
                    rows={el.rows || 2}
                    maxLength={el.maxLength}
                    value={inputData}
                    name={el.label}
                    className="rounded-sm resize-none"
                  />
                  <span className="absolute bottom-0 right-0 pr-1 text-sm text-slate-300">
                    0/{el.maxLength}
                  </span>
                </div>
              )}
              {el.type === "select" && (
                <div className="focus:outline-none">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {el.label}
                  </label>
                  <Select
                    className="w-full rounded-sm text-base h-10"
                    defaultValue={el.label}
                    options={el?.selectOptions}
                    placeholder={el.placeholder}
                    value={el.value}
                    onChange={(e) =>
                      setInputData((prev) => {
                        return prev.map((item) => {
                          if (item.label === el.label) {
                            item.value = e;
                          }
                          return item;
                        });
                      })
                    }
                  />
                </div>
              )}
              {el.type === "selectPicker" && (
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {el.label}
                  </label>
                  <TagsInput
                    value={el.value}
                    onChange={(e) =>
                      setInputData((prev) => {
                        return prev.map((item) => {
                          if (item.label === el.label) {
                            item.value = e;
                            // alert(e)
                          }
                          return item;
                        });
                      })
                    }
                    onBlur={(e) =>
                      setfixedInput((prev) => {
                        return {
                          ...prev,
                          language: e,
                        };
                      })
                    }
                    name={el.label}
                    placeHolder={el.placeholder}
                  />
                  <input
                    placeholder="+Add Topics"
                    type="text"
                    className="w-48"
                    onChange={(e) => setValues(e.target.value)}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 gap-6">
                {el.type === "checkbox" && (
                  <Checkbox
                    className="text-sm text-black opacity-90"
                    name={el.label}
                    checked={el.value}
                    onChange={(e) => handleChange(e)}
                    // onChange={(e) => {
                    //   // setValues(e.target.value);
                    //   typin(e)
                    // }}
                  >
                    {el.label}
                  </Checkbox>
                )}
                {/* <Checkbox className="text-sm text-black opacity-90">Add FAQs</Checkbox> */}
              </div>
            </div>
          );
        })}

        <div className="flex flex-row justify-between gap-5">
          <div className="flex items-center gap-1">
            <p className="text-sm font-medium text-gray-900">
              Safety Guidelines
            </p>
            <IoIosInformationCircleOutline />
          </div>
          <div className="flex items-center flex-col gap-2">
            <Switch
              defaultChecked
              value={fixedInput.safety}
              onChange={(e) =>
                setfixedInput((prev) => {
                  return {
                    ...prev,
                    safety: e,
                  };
                })
              }
              className="bg-[#BFBFBF]"
            />
            <p className="mb-2 text-sm font-medium text-black opacity-50">
              {fixedInput.safety ? "Enabled" : "Disabled"}
            </p>
          </div>
        </div>
      </div>
      {/* <button className="text-gray bg-white-100 hover:bg-gray-100 focus:outline-none text-sm sm:w-auto px-5 py-2.5 text-center mb-2">
                  Skip Intro
                </button> */}
      <div className="fixed bottom-6 min-w-[90%] md:min-w-[380px] 2xl:min-w-[550px]">
        <Button
          type="button"
          className="text-white bg-navblue hover:bg-blue-700 hover:text-white focus:outline-none text-base px-5 py-2.5 text-center w-full rounded-sm"
          onClick={(e) => handleGenerate()}
        >
          Generate Copy-b
        </Button>
      </div>
    </form>
  );
};

// export default PromptForm;
export default withAuth(PromptForm);
