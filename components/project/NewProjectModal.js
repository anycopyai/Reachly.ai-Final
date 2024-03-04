import React, { useState } from "react";

import { TfiFolder } from "react-icons/tfi";
import ProjectForm from "./ProjectForm";

const NewProjectModal = ({ isOpen, onClose, onAddProject }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 shadow-md max-w-[36rem] w-full">
            <h3 className="text-base font-semibold mb-4 flex gap-2 items-center">
              <TfiFolder />
              New Project
            </h3>
            <ProjectForm />
          </div>
        </div>
      )}
    </>
  );
};

export default NewProjectModal;
