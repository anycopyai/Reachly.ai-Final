import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Alert = ({ title, onClose }) => {
  return (
    //  <div className="fixed top-0 right-0 m-4 bg-green-500 text-white p-4 rounded-md flex items-center border border-#B7EB8F">
    //    <span className="mr-2">{title}</span>
    //    <button
    //      className="text-white font-bold focus:outline-none"
    //      onClick={onClose}
    //    >
    //      x
    //    </button>
    //  </div>

    <div className="fixed top-6 right-6 m-4 bg-[#F6FFED] border border-#B7EB8F text-white p-2 flex items-center">
      <FaCheckCircle className="text-[#52C41A] mr-2" />
      <span className="text-black mr-2 font-normal text-sm">{title}</span>
      <button
        className="text-gray-600  focus:outline-none ml-8"
        onClick={onClose}
      >
        x
      </button>
    </div>
  );
};

export default Alert;
