import React, { useState } from "react";

import { Button, Input, Modal } from "antd";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DeleteProjectModal = ({ isOpen, onClose }) => {
  const [isDisable, setIsDisable] = useState(true);

  return (
    <Modal
      open={isOpen}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      centered
      closable={false}
      className="custom-modal-ui"
    >
      <h3 className="text-base text-[#323232] font-semibold mb-4 flex gap-2 items-center">
        <span className="text-2xl">
          <MdOutlineDeleteOutline />
        </span>
        Delete Project
      </h3>
      <div className="flex flex-col gap-3">
        <p className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
          Are you sure you want to delete this project ?
        </p>
        <p className="text-[rgba(0,0,0,0.45)] text-sm">
          Once deleted it <span className="uppercase font-medium">cannot</span>{" "}
          be undone
        </p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
            Please type <span className="text-[#0033FF]">Project 2</span> to
            confirm
          </label>
          <Input
            type="text"
            className="w-full border p-2 border-[#D9D9D9]"
            placeholder="Enter here"
            onChange={() => setIsDisable(false)}
          />
        </div>
        <div className="flex justify-end gap-6">
          <Button
            className={` text-base px-4 py-2 rounded-sm ${
              isDisable === false
                ? "bg-[#FF0F00] border-[#FF0F00] text-white"
                : "bg-[#F5F5F5] border-[#D9D9D9] text-[rgba(0,0,0,0.25)]"
            }`}
          >
            Delete
          </Button>
          <Button
            className="text-base text-[rgba(0,0,0,0.85)] px-4 py-2 rounded-sm"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProjectModal;
