import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { MdFileCopy } from "react-icons/md";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import { MdDeleteOutline } from "react-icons/md";
import DuplicateProjectModal from "./DuplicateProjectModal";
import MoveProjectModal from "./MoveProjectModal";
import DeleteProjectModal from "./DeleteProjectModal";
import EditProjectModal from "./EditProjectModal";

const ProjectOptionsMenu = ({ onClose }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDuplicateModal = () => {
    setIsDuplicateModalOpen(true);
  };
  const closeDuplicateModal = () => {
    setIsDuplicateModalOpen(false);
  };

  const openMoveModal = () => {
    setIsMoveModalOpen(true);
  };
  const closeMoveModal = () => {
    setIsMoveModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div
        className="absolute top-0 right-0 mt-2 py-1 bg-white border rounded-md shadow-md"
        style={{ zIndex: 100 }}
      >
        {/* Your menu options go here */}
        <div
          className="px-3 py-2 flex items-center gap-2 cursor-pointer text-[rgba(0,0,0,0.85)] font-medium text-sm hover:bg-[#E6F7FF]"
          onClick={openEditModal}
        >
          <RiPencilFill />
          Edit
        </div>
        <div
          className="px-3 py-2 flex items-center gap-2 cursor-pointer text-[rgba(0,0,0,0.85)] font-medium text-sm hover:bg-[#E6F7FF]"
          onClick={openDuplicateModal}
        >
          <MdFileCopy />
          Duplicate
        </div>
        <div
          className="px-3 py-2 flex items-center gap-2 cursor-pointer text-[rgba(0,0,0,0.85)] font-medium text-sm hover:bg-[#E6F7FF]"
          onClick={openDeleteModal}
        >
          <MdOutlineSubdirectoryArrowRight />
          Delete
        </div>
        <div
          className="px-3 py-2 flex items-center gap-2 cursor-pointer text-[rgba(0,0,0,0.85)] font-medium text-sm hover:bg-[#E6F7FF]"
          onClick={openMoveModal}
        >
          <MdDeleteOutline />
          Move
        </div>
      </div>

      {/* Modals */}
      <EditProjectModal isOpen={isEditModalOpen} onClose={closeEditModal} />

      <DuplicateProjectModal
        isOpen={isDuplicateModalOpen}
        onClose={closeDuplicateModal}
      />

      <MoveProjectModal isOpen={isMoveModalOpen} onClose={closeMoveModal} />

      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      />
    </>
  );
};

export default ProjectOptionsMenu;
