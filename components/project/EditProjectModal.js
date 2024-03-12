import React from "react";

import ProjectForm from "./ProjectForm";
import { Modal } from "antd";

const EditProjectModal = ({ isOpen, onClose, onAddProject }) => {
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
        <img src="/images/ic-new-project.svg" alt="project" />
        Project 2
      </h3>
      <ProjectForm
        onClose={onClose}
        onAddProject={onAddProject}
        includeCollectionDropdown={false}
      />
    </Modal>
  );
};

export default EditProjectModal;
