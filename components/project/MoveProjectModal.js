import React, { useState } from "react";

import { Button, Modal, Select } from "antd";

const MoveProjectModal = ({ isOpen, onClose }) => {
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
        <img src="/images/ic-move-project.svg" alt="move" />
        Move Project
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
            Selected Project
          </label>
          <Select
            className="w-full rounded-sm text-base h-10"
            placeholder="Project 1"
            name="language"
            options={[
              {
                value: "project",
                label: "Project 1",
              },
              {
                value: "project 2",
                label: "Project 2",
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1 text-sm text-[rgba(0,0,0,0.85)]">
            Select Collection
          </label>
          <Select
            className="w-full rounded-sm text-base h-10"
            placeholder="Select"
            name="language"
            options={[
              {
                value: "project",
                label: "Project 1",
              },
              {
                value: "project 2",
                label: "Project 2",
              },
            ]}
            onChange={() => setIsDisable(false)}
          />
        </div>
        <div className="flex justify-end gap-6">
          <Button
            className="text-base text-[rgba(0,0,0,0.85)] px-4 py-2 rounded-sm"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className={` text-base px-4 py-2 rounded-sm ${
              isDisable === false
                ? "bg-[#0033FF] border-[#1890FF] text-white"
                : "bg-[#F5F5F5] border-[#D9D9D9] text-[rgba(0,0,0,0.25)]"
            }`}
          >
            Move Project
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MoveProjectModal;
