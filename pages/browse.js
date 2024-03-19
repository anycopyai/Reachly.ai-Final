// pages/browse.js
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import TopBar from "../components/TopBar";
import Favorites from "../components/Template/Favorites";
import FreshTemplate from "../components/Template/FreshTemplate";
import withAuth from "../hoc/withAuth";
import { Button, Modal, Radio } from "antd";
import { IoCheckmarkSharp } from "react-icons/io5";
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
        {/* <Modal
          open={isUpgrade}
          onOk={() => setIsUpgrade(false)}
          onCancel={() => setIsUpgrade(false)}
          footer={null}
          centered
          className="subscribe-modal"
        >
          <div className="text-center">
            <h4 className="text-base md:text-2xl text-[rgba(0, 0, 0, 0.85)] mt-4">
              Keep up the good work! <br /> Continue writing with one of the
              options below
            </h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-9">
            <div className="flex flex-col gap-6 py-4 md:py-9 px-4 md:px-6 border rounded-2xl border-[rgba(0,0,0,0.25)]">
              <img src="/images/icon-subscribe.svg" className="mx-auto" />
              <div className="text-center">
                <h4 className="text-[23px] font-medium text-[rgba(0,0,0,0.85)]">
                  Do you write more frequently
                </h4>
                <p className="text-base text-[rgba(0,0,0,0.85)]">
                  Subscribe to a plan starting at $8 Per month
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <IoCheckmarkSharp className="w-4 h-4 text-navblue" />
                  <div className="flex flex-col">
                    <h5 className="text-base font-medium text-[rgba(0,0,0,0.85)]">
                      Access to writer
                    </h5>
                    <p className="text-xs text-[rgba(0,0,0,0.5)]">
                      Create To convey a compelling message
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <IoCheckmarkSharp className="w-4 h-4 text-navblue" />
                  <div className="flex flex-col">
                    <h5 className="text-base font-medium text-[rgba(0,0,0,0.85)]">
                      More Generations
                    </h5>
                    <p className="text-xs text-[rgba(0,0,0,0.5)]">
                      Create To convey a compelling message
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <IoCheckmarkSharp className="w-4 h-4 text-[#0033FF]" />
                  <div className="flex flex-col">
                    <h5 className="text-base font-medium text-[rgba(0,0,0,0.85)]">
                      More Projects
                    </h5>
                    <p className="text-xs text-[rgba(0,0,0,0.5)]">
                      Create To convey a compelling message
                    </p>
                  </div>
                </li>
              </ul>
              <div>
                <Button
                  className="w-full border border-[rgba(0,51,255,1)] text-base text-navblue h-auto rounded-sm py-3"
                  onClick={() => router.push("/upgrade")}
                >
                  Subscribe Today
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-11 py-9 px-6 border rounded-2xl border-[rgba(0,0,0,0.25)]">
              <img src="/images/icon-upgrade-price.svg" className="mx-auto" />
              <div className="text-center">
                <h4 className="text-xl font-medium text-[rgba(0,0,0,0.85)] hidden md:block md:opacity-0">
                  Do you write more frequently
                </h4>
                <p className="text-lg md:text-base text-[rgba(0,0,0,0.85)] font-medium md:font-normal">
                  Keep up the good work writer, Top up your Credits
                </p>
              </div>
              <ul className="flex flex-col items-center justify-center gap-3 subscribe-radio-list">
                <li className="flex items-center gap-4">
                  <Radio className="text-base text-[rgba(0,0,0,0.85)] font-medium items-center">
                    50 Credits
                    <span className="text-3xl text-[#0033FF]">$10</span>
                  </Radio>
                </li>
                <li className="flex items-center gap-4">
                  <Radio className="text-base text-[rgba(0,0,0,0.85)] font-medium items-center">
                    100 Credits
                    <span className="text-3xl text-[#0033FF]">$15</span>
                  </Radio>
                </li>
              </ul>
              <div>
                <Button
                  className="h-auto w-full border border-[rgba(0,51,255,1)] bg-[#0033FF] text-base text-white rounded-sm py-3"
                  onClick={() => router.push("/upgrade")}
                >
                  Subscribe Today
                </Button>
              </div>
            </div>
          </div>
        </Modal> */}
      </div>
    </div>
  );
};

export default withAuth(Browse);
