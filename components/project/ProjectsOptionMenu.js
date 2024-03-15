import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { MdFileCopy } from "react-icons/md";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import { MdDeleteOutline } from "react-icons/md";
import DuplicateProjectModal from "./DuplicateProjectModal";
import MoveProjectModal from "./MoveProjectModal";
import DeleteProjectModal from "./DeleteProjectModal";
import EditProjectModal from "./EditProjectModal";
import { Dropdown } from "antd";
import { CiMenuKebab } from "react-icons/ci";

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

  const items = [
    {
      label: (
        <a href="#" onClick={openEditModal}>
          <div className="flex items-center gap-4 mb-3">
            <span>
            <RiPencilFill />
            </span>
            <h3 className="text-base font-semibold text-[#323232]">
            Edit
            </h3>
          </div>
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="#" onClick={openDuplicateModal}>
          <div className="flex items-center gap-4 mb-3">
            <span>
            <MdFileCopy />
            </span>
            <h3 className="text-base font-semibold text-[#323232]">
            Duplicate
            </h3>
          </div>
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="#" onClick={openDeleteModal}>
          <div className="flex items-center gap-4 mb-3">
            <span>
            <MdDeleteOutline />
            </span>
            <h3 className="text-base font-semibold text-[#323232]">
            Delete
            </h3>
          </div>
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a href="#" onClick={openMoveModal}>
          <div className="flex items-center gap-4 mb-3">
            <span>
            <MdOutlineSubdirectoryArrowRight />
            </span>
            <h3 className="text-base font-semibold text-[#323232]">
            Move
            </h3>
          </div>
        </a>
      ),
      key: "3",
    },
  ];

  return (
    <>
      <div
        // className="absolute top-0 right-0 mt-2 py-1 bg-white border rounded-md shadow-md"
        // style={{ zIndex: 100 }}
      >
        {/* Your menu options go here */}
        {/* <div
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
        </div> */}
        <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a className="rounded-sm text-[rgba(0,0,0,0.85)] px-4 py-1 flex items-center gap-3">
              <CiMenuKebab />
              </a>
            </Dropdown>
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
