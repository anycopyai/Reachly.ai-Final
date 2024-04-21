// pages/browse.js
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import TopBar from "../components/TopBar";
import Favorites from "../components/Template/Favorites";
import FreshTemplate from "../components/Template/FreshTemplate";
import withAuth from "../hoc/withAuth";
import { useRouter } from "next/router";

const Browse = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [isUpgrade, setIsUpgrade] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setFilter("All");
  };

  return (
    <div className="flex h-fit ml-0 md:ml-20 overflow-hidden  bg-gray-100">
      <Sidebar />
      <div className="flex flex-col h-fit p-4 md:p-6 bg-white w-full md:w-auto">
        <TopBar
          setIsUpgrade={setIsUpgrade}
          setFilter={setFilter}
          handleSearch={handleSearch}
          search={search}
        />
        {(filter === "All" || filter === "Favorites") && (
          <Favorites search={search} />
        )}
        {(filter === "All" || filter === "Fresh Template") && (
          <FreshTemplate search={search} />
        )}
        
      </div>
    </div>
  );
};

export default withAuth(Browse);
