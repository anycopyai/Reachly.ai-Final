import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { IoIosInformationCircleOutline } from "react-icons/io";

const ProjectForm = ({ includeCollectionDropdown = true }) => {
  const [selected, setSelected] = useState(["1st"]);
  return (
    <form>
      <label className="flex items-center text-sm font-normal text-gray-700 mb-2">
        Project/Product/Service Name{" "}
        <IoIosInformationCircleOutline cursor="pointer" className="ml-1" />
      </label>
      <input
        type="text"
        className="w-full border p-2 mb-4"
        placeholder="Enter project name"
      />

      {includeCollectionDropdown && (
        <>
          {/* Dropdown */}
          <label className="flex items-center text-sm font-normal text-gray-700 mb-2">
            Select Collection{" "}
            <IoIosInformationCircleOutline cursor="pointer" className="ml-1" />
          </label>
          {/* Replace the following with your custom dropdown component */}
          <select className="w-full border p-2 mb-4">
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </>
      )}

      {/* Textarea */}
      <label className="flex items-center text-sm font-normal text-gray-700 mb-2">
        Description{" "}
        <IoIosInformationCircleOutline cursor="pointer" className="ml-1" />
      </label>
      <textarea
        className="w-full border p-2 mb-4"
        placeholder="Enter project description"
      />
      <label className="flex items-center text-sm font-normal text-gray-700 mb-2">
        Audience
        <IoIosInformationCircleOutline cursor="pointer" className="ml-1" />
      </label>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="audience"
        placeHolder="Add Topics"
      />
      <label className="flex items-center text-sm font-normal text-gray-700 mb-2">
        Keywords
        <IoIosInformationCircleOutline cursor="pointer" className="ml-1" />
      </label>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="keywords"
        placeHolder="Add Topics"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-3">
        <button
          className=" border-1 text-gray-700 px-4 py-2 "
          // onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="bg-navblue text-white px-4 py-2 mr-2 "
          // onClick={onAddProject}
        >
          Create Project
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
