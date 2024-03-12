import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Button, Input, Select } from "antd";

const ProjectForm = ({
  includeCollectionDropdown = true,
  onClose,
  onAddProject,
}) => {
  const [selected, setSelected] = useState(["1st"]);
  const { TextArea } = Input;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
          Project/Product/Service Name
          <IoIosInformationCircleOutline cursor="pointer" />
        </label>
        <Input
          type="text"
          className="w-full border p-2 border-[#D9D9D9]"
          placeholder="Enter project name"
        />
      </div>

      {includeCollectionDropdown && (
        <div className="flex flex-col gap-2">
          {/* Dropdown */}
          <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
            Select Collection
            <IoIosInformationCircleOutline cursor="pointer" />
          </label>
          {/* Replace the following with your custom dropdown component */}
          <Select
            className="w-full rounded-sm text-base h-10"
            placeholder="Winston garage"
            name="language"
            options={[
              {
                value: "winston",
                label: "Winston garage",
              },
              {
                value: "type2",
                label: "Type 2",
              },
            ]}
          />
        </div>
      )}

      {/* Textarea */}
      <div className="flex flex-col gap-2 relative">
        <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
          Description <IoIosInformationCircleOutline cursor="pointer" />
        </label>
        <TextArea
          placeholder="Enter project description"
          rows={2}
          className="rounded-sm resize-none"
        />
        <span className="absolute bottom-0 right-0 pr-1 text-sm text-slate-300">
          0/75
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
          Audience
          <IoIosInformationCircleOutline cursor="pointer" />
        </label>
        <div className="custom-multi-tags">
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="audience"
            placeHolder="+ Add Topics"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
          Keywords
          <IoIosInformationCircleOutline cursor="pointer" />
        </label>
        <div className="custom-multi-tags">
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="keywords"
            placeHolder="+ Add Topics"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-6">
        <Button
          className="text-base text-[rgba(0,0,0,0.85)] px-4 py-2 rounded-sm"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          className="bg-[#0033FF] border-[#1890FF] text-base text-white hover:text-white px-4 py-2 rounded-sm"
          onClick={onAddProject}
        >
          Create Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectForm;
