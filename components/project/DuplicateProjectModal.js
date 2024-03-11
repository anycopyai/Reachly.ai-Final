import React, { useEffect, useState } from "react";

import { Modal, Select } from "antd";

const DuplicateProjectModal = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Change the threshold as per your requirement
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add event listener for resizing
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <Modal
      open={isOpen}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      centered={!isMobile}
      closable={false}
      className={`custom-modal-ui ${isMobile && "setting-action-modal top-0"}`}
      wrapClassName={`${isMobile && "bg-white"}`}
    >
      <h3 className="text-base font-semibold mb-4 flex gap-2 items-center">
        <img src="/images/ic-new-project.svg" alt="project" />
        Duplicate Project
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
        <div className="flex justify-end gap-3">
          <button
            className=" border-1 text-gray-700 px-4 py-2 "
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-navblue text-white px-4 py-2 mr-2 "
            // onClick={onAddProject}
          >
            Duplicate Project
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DuplicateProjectModal;
