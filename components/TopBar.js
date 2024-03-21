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
      // onClick={() => setIsUpgrade(true)}
      // onClick={() => router.push("/upgrade")}
      onClick={openUpgradeModal}
      className="bg-white md:bg-navblue border hover:!bg-blue-950 border-[#D9D9D9] md:border-none shadow-none text-black md:text-white flex items-center px-3 py-2 rounded-sm gap-2"
    >
      <img src="/images/icon-upgrade.svg" className="hidden md:block" />
      <img src="/images/icon-upgrade-black.svg" className="block md:hidden" />

      {showCredits ? (
        <>Credits Left: {credits}</>
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
              <p className="text-sm	font-medium text-black">Templates</p>
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
