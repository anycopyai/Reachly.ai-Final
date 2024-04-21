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
    className="bg-[#0061fe] rounded-full hover:bg-[#1e1919] transition-colors duration-300 text-white flex items-center px-4 py-2 gap-2"
  >
    {showCredits ? (
      <>
        Credits Left: {credits}
      </>
    ) : (
      <>
        <span>Upgrade Now for Unlimited</span>
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
    className="pl-4 pr-10 py-2 w-full border-none rounded-full focus:outline-none focus:ring-0 transition duration-300 ease-in-out text-base bg-[#f3f3f3] text-[#49454F] focus:bg-white"
    style={{ transition: 'background-color 300ms ease-in-out, box-shadow 300ms ease-in-out', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075)' }}
    onFocus={(e) => e.target.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.1)'}
    onBlur={(e) => e.target.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.075)'}
  />
  <AiOutlineSearch className="absolute right-4 text-lg text-[#49454F] cursor-pointer" />
</div>

          <div className="flex justify-between items-center">
            <div className="md:hidden flex gap-4 pl-6">
            <img
                  className="h-6 w-6 image-2-icon2"
                  alt=""
                  src="../images/logo.png"
                  style={{ height: 25, width: 25 }}
                />
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
  <div className="flex flex-wrap overflow-x-auto scrollbar-hide gap-2 mt-2 md:mt-4">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setFilter(category)}
        className="text-sm bg-blue-100 border border-blue-200 text-blue-800 px-3 py-1 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 hover:border-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
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
