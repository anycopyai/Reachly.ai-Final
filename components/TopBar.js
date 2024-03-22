import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "antd";
import UpgradeModal from "../pages/UpgradeModal";

const categories = [
  "All",
  "Favorites",
  "Fresh Template",
  // 'EveryDay Tools',
  // 'Blog',
  // 'AdCopy',
  // 'E_commerce',
  // 'Campaigns',
  // 'Landing Pages',
  // 'Website Copy',
  // 'Salae Copy',
  // 'Social Media',
  // 'Emails',
  // 'Video',
  // 'Business',
  // 'Branding',
  // 'Education',
  // 'Pr_Media',
  // 'Reserach',
  // 'Human Resources',
  // 'Frame Works',
  // 'Brain storming',
  // 'Invistor Pitch',
];

const CreditBadge = ({ credits, setIsUpgrade, openUpgradeModal }) => {
  const [showCredits, setShowCredits] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCredits((prevState) => !prevState);
    }, 3000); // Change to the desired duration in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
    type="primary"
    onClick={openUpgradeModal}
    className="bg-blue-50 rounded-full hover:bg-[#0060d0] transition-colors duration-300 text-blue-600 flex items-center px-4 py-2 gap-2"
  >
    <svg
    class="w-5 h-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
      clip-rule="evenodd"
    />
  </svg>

    {showCredits ? (
      <>
        Credits Left: {credits}
      </>
    ) : (
      <>
        <span>Upgrade Now</span>
      </>
    )}
  </Button>
  );
};

const TopBar = ({ setFilter, handleSearch, search, setIsUpgrade }) => {
  const [isUpgradeModal, setIsUpgradeModal] = useState(false);

  const openUpgradeModal = () => {
    setIsUpgradeModal(true);
  };

  const closeUpgradeModal = () => {
    setIsUpgradeModal(false);
  };

  return (
    <div className="bg-white flex justify-between items-center">
      <div className="w-full">
        <div className="flex justify-between flex-col-reverse md:flex-row gap-4">
          <div className="flex items-center w-full max-w-xl relative rounded-full">
            <input
              type="search"
              value={search}
              onChange={(e) => handleSearch(e)}
              placeholder="Search your copy"
              className="pl-4 pr-10 py-2 w-full border-none rounded-full focus:outline-none focus:ring-0 focus:ring-blue-600 transition duration-300 ease-in-out text-base bg-[#f3f3f3] text-[#49454F]"
            />
            <AiOutlineSearch className="absolute right-4 text-lg text-[#49454F] cursor-pointer" />
          </div>
          <div className="flex justify-between items-center">
            <div className="md:hidden flex gap-4 pl-6">
              <p className="text-sm	font-medium text-black">ANYCOPY</p>
            </div>
            <CreditBadge
              credits={100}
              setIsUpgrade={setIsUpgrade}
              className=" -translate-x-6"
              openUpgradeModal={openUpgradeModal}
            />
          </div>
        </div>

        {/* Sidebar responsive */}
        <div className="fixed w-full bg-white block md:hidden"></div>

        <div className="w-full">
          <div className="flex flex-nowrap md:flex-wrap whitespace-nowrap md:whitespace-normal overflow-x-auto scrollbar-hide gap-4 mt-4 md:mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="text-base bg-white border border-[#D9D9D9] text-gray-800 px-4 py-1.5 rounded-full focus:bg-blue-600 focus:text-white focus:border-blue-600 transition  duration-300 ease-in-out hover:bg-blue-600 hover-border-blue-600 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <UpgradeModal modalOpen={isUpgradeModal} modelClose={closeUpgradeModal} />
    </div>
  );
};

export default TopBar;
