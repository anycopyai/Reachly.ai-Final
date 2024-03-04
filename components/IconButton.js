import React from "react";

const IconButton = ({ icon, text, onClick }) => {
  return (
    <button
      className="flex items-center bg-navblue text-white px-15 py-6.4 rounded w-44 h-[38.8px] border border-blue-500 gap-1 px-2"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default IconButton;
