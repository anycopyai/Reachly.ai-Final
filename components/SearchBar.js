// SearchBar.js
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const handleSearch = () => {
    // Handle search logic here
    console.log("Search button clicked!");
  };

  return (
    <div className="flex items-center w-full max-w-xl relative border border-gray-300 ">
      <input
        type="search"
        placeholder="Input search text"
        className="pr-12 py-2 w-full border-none focus:outline-none focus:ring-2 focus:ring-black-600 transition duration-300 ease-in-out"
      />
      <div className=" border-l-1  absolute right-0 text-lg  cursor-pointer p-3 ml-3">
        <FiSearch className=" " />
      </div>
    </div>
  );
};

export default SearchBar;
