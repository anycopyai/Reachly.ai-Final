import React from "react";

const ModalWrapper = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 shadow-md w-full md:w-[600px]">{children}</div>
        </div>
      )}
    </>
  );
};

export default ModalWrapper;
