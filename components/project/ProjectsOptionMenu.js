import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { MdFileCopy } from "react-icons/md";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import { MdDeleteOutline } from "react-icons/md";
import DuplicateProjectModal from "./DuplicateProjectModal";

const ProjectOptionsMenu = ({ onClose }) => {
  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);
  const openDuplicateModal = () => {
    setIsDuplicateModalOpen(true);
  };

  const closeDuplicateModal = () => {
    setIsDuplicateModalOpen(false);
  };

  return (
    <>
      <div
        className="absolute top-0 right-0 mt-2 bg-white border rounded-md shadow-md"
        style={{ zIndex: 100 }}
      >
        {/* Your menu options go here */}
        <div
          className="p-2 flex items-center gap-1 cursor-pointer"
          onClick={onClose}
        >
          <RiPencilFill />
          Edit
        </div>
        <div
          className="p-2 flex items-center gap-1  cursor-pointer"
          onClick={openDuplicateModal}
        >
          <MdFileCopy />
          Duplicate
        </div>
        <div
          className="p-2 flex items-center gap-1  cursor-pointer"
          onClick={onClose}
        >
          <MdOutlineSubdirectoryArrowRight />
          Delete
        </div>
        <div
          className="p-2 flex items-center gap-1  cursor-pointer"
          onClick={onClose}
        >
          <MdDeleteOutline />
          Move
        </div>
      </div>

      <DuplicateProjectModal
        isOpen={isDuplicateModalOpen}
        onClose={closeDuplicateModal}
      />
    </>
  );
};

export default ProjectOptionsMenu;
