import React from "react";

const SortingOptionsMenu = ({ onClose }) => {
  return (
    <div
      className="absolute top-0 right-0 mt-2 bg-white border rounded-md shadow-md"
      style={{ zIndex: 100 }}
    >
      {/* Your menu options go here */}
      <div
        className="p-2 flex items-center gap-1 cursor-pointer"
        onClick={onClose}
      >
        Recent
      </div>
      <div
        className="p-2 flex items-center gap-1  cursor-pointer"
        onClick={onClose}
      >
        Older
      </div>
      <div
        className="p-2 flex items-center gap-1  cursor-pointer"
        onClick={onClose}
      >
        Ascending
      </div>
      <div
        className="p-2 flex items-center gap-1  cursor-pointer"
        onClick={onClose}
      >
        Descending
      </div>
    </div>
  );
};

export default SortingOptionsMenu;
