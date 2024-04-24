import React, { useState } from "react";
import { Input, Select } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TagsInput } from "react-tag-input-component";
import axios from "axios";
const TextArea = Input;

const OnboardForm = ({ isOnboardForm1, isOnboardForm2, isOnboardForm3 }) => {
  const [selected, setSelected] = useState(["1st"]);

  const [formData, setFormData] = useState({
    write: "",
    frequency: "",
    companyName: "",
    website: "",
    industry: "",
    businessSize: "",
    projectName: "",
    description: "",
    audience: [],
    keywords: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/onboarding", formData)
      .then((response) => {
        console.log("Form data submitted:", response.data);
        alert("Success");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

 const handleChange = (event) => {
   const { name, value } = event.target;
   setFormData({ ...formData, [name]: value });
 };
  return (
    <>
      {isOnboardForm1 ? (
        <form className="flex flex-col gap-11" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm text-[#000000D9] dark:text-white">
              What do you need to write? *
            </label>
            <Select
              className="w-full rounded-sm text-base h-10"
              placeholder="Select"
              name="write"
              options={[
                {
                  value: "sentence",
                  label: "Sentence",
                },
                {
                  value: "paragraph",
                  label: "Paragraph",
                },
              ]}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-[#000000D9] dark:text-white">
              How often do you write this? *
            </label>
            <Select
              className="w-full rounded-sm text-base h-10"
              placeholder="Select"
              name="write"
              options={[
                {
                  value: "sentence",
                  label: "Sentence",
                },
                {
                  value: "paragraph",
                  label: "Paragraph",
                },
              ]}
            />
          </div>
        </form>
      ) : isOnboardForm2 ? (
        <form className="flex flex-col gap-11" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm text-[#000000D9] dark:text-white">
              Company Name *
            </label>
            <Input
              type="text"
              name="description"
              className="w-full border p-2 border-[#D9D9D9]"
              placeholder="Aaron tech"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="flex items-center gap-1 mb-2 text-sm text-[#000000D9] dark:text-white">
              Website *
              <AiOutlineInfoCircle color="#00000073" />
            </label>
            <Input
              type="text"
              name="website"
              className="w-full border p-2 border-[#D9D9D9]"
              placeholder="aaron.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-[#000000D9] dark:text-white">
              Industry*
            </label>
            <Select
              className="w-full rounded-sm text-base h-10"
              placeholder="Select"
              name="industry"
              options={[
                {
                  value: "writer",
                  label: "Writer",
                },
              ]}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-[#000000D9] dark:text-white">
              Business size *
            </label>
            <Select
              className="w-full rounded-sm text-base h-10"
              placeholder="Select"
              name="businesssize"
              options={[
                {
                  value: "small",
                  label: "Small",
                },
              ]}
              onChange={handleChange}
            />
          </div>
        </form>
      ) : isOnboardForm3 ? (
        <form className="flex flex-col gap-11" onSubmit={handleSubmit}>
          <div>
            <label className="flex items-center gap-1 mb-2 text-sm text-[#000000D9] dark:text-white">
              Project / Product / Service Name *
              <AiOutlineInfoCircle color="#00000073" />
            </label>
            <Input
              type="text"
              className="w-full border p-2 border-[#D9D9D9]"
              placeholder="Aaron tech"
              name="project"
              value={formData.projectName}
            />
          </div>
          <div className="relative">
            <label className="flex items-center gap-1 mb-2 text-sm text-[#000000D9] dark:text-white">
              Description * <AiOutlineInfoCircle color="#00000073" />
            </label>
            <TextArea
              placeholder="Free 50% off for first 100 customers , New range of collection for GenZ in the town, Use are limited period offers now"
              className="rounded-sm"
              rows="4"
              value={formData.write}
            />
            <span className="absolute bottom-0 right-0 pr-1 text-sm text-slate-300">
              0/250
            </span>
          </div>
          <div className="relative custom-multi-tags">
            <label className="flex items-center gap-1 mb-2 text-sm text-[#000000D9] dark:text-white">
              Audience *
            </label>
            <TagsInput
              name="audience"
              placeHolder="+ Add Topics"
              value={selected}
              onChange={setSelected}
            />
            <span className="absolute bottom-2 right-2 pr-1 text-sm text-slate-300">
              0/250
            </span>
          </div>
          <div className="relative custom-multi-tags">
            <label className="flex items-center gap-1 mb-2 text-sm text-[#000000D9] dark:text-white">
              Keywords *
            </label>
            <TagsInput
              name="audience"
              placeHolder="+ Add Topics"
              value=''
              
            />
            <span className="absolute bottom-2 right-2 pr-1 text-sm text-slate-300">
              0/250
            </span>
          </div>
      
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default OnboardForm;
