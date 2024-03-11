import React, { useEffect, useState } from "react";

import ProjectForm from "./ProjectForm";
import { Modal } from "antd";

const NewProjectModal = ({ isOpen, onClose, onAddProject }) => {
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
        New Project
      </h3>
      <ProjectForm onClose={onClose} onAddProject={onAddProject} />
    </Modal>
  );
};

export default NewProjectModal;
