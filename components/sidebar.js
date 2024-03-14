import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSnackbar } from "notistack";
import { GoHome } from "react-icons/go";
import { LiaAdSolid, LiaNotesMedicalSolid } from "react-icons/lia";
import { FiSettings, FiLogOut, FiDownload } from "react-icons/fi";
import { MdOutlineEdit, MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";

const navItems = [
  { name: "Templates", IconComponent: LiaNotesMedicalSolid, href: "/browse" },
  { name: "Writer", IconComponent: MdOutlineEdit, href: "/Writer" },
  {
    name: "URL to Ads",
    IconComponent: LiaAdSolid,
    href: "/url-to-ads",
    Extrafields: [
      {
        label: "Website/Landing page URL",
        type: "textArea",
        placeholder: "Anycopy.com",
        maxLength: 75,
        value: "",
      },
    ],
  },
  { name: "Projects", IconComponent: FaRegFileAlt, href: "/Projects" },
  { name: "Saved", IconComponent: FiDownload, href: "/download" },
  { name: "Workflow", IconComponent: BsCardChecklist, href: "/Report" },
  // { name: "Help", IconComponent: IoIosHelpCircleOutline, href: "/Help" },
];

const Sidebar = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleNavigation = (href, name, extrafields) => {
    if (extrafields) {
      router.push({
        pathname: `/${href}`,
        query: {
          heading: name,
          data: JSON.stringify({
            extrafields: extrafields,
          }),
        },
      });
    } else {
      router.push(href);
    }
  };

  //logout the website and routeback to the login page
  const logoutWithRedirect = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("accessToken");
        enqueueSnackbar(`Logout successfully !`, {
          variant: "success",
        });
        router.push("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="md:hidden flex gap-4 absolute left-[16px] top-[24px] z-20">
        {router.pathname !== "/[prompts]" && !router.pathname.includes('Projects') && !router.pathname.includes('Writer')&& (
          <button onClick={() => setisOpen(true)}>
            <MdOutlineMenu />
          </button>
        )}
      </div>
      <div
        className={`fixed top-0 md:left-0 transition-all duration-300 bg-white w-full md:w-20 flex-col justify-between p-0 py-8 md:py-6 h-screen z-50 flex ${
          isOpen ? "left-0" : "-left-full"
        }`}
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)" }}
      >
        {/* Updated background color to #F9F8F7 (bg-gray-50) */}
        <div className="flex flex-col item-start md:items-center">
          <div className="mb-8 px-8 md:px-0 flex justify-between items-center pb-2.5 md:pb-0 border-b-1 border-[rgba(0,0,0,0.1)] md:border-none">
            <Link href="/">
              <a className="cursor-pointer flex items-center gap-3">
                <img
                  className="h-6 w-6 image-2-icon2"
                  alt=""
                  src="../images/logo.png"
                  style={{ height: 25, width: 25 }}
                />
                <p className="text-[#323232] font-medium text-2xl block md:hidden">
                  Anycopy.ai
                </p>
              </a>
            </Link>
            <button
              className="block md:hidden"
              onClick={() => setisOpen(false)}
            >
              <IoCloseSharp className="text-[#323232] opacity-50" />
            </button>
          </div>
          {navItems.map(({ name, IconComponent, href, Extrafields }) => (
            <Tippy key={name} content={name} placement="left">
              <div
                onClick={() => handleNavigation(href, name, Extrafields)}
                className="mb-8 px-8 md:px-0 cursor-pointer flex items-center gap-3 hover:text-[#0033FF]"
              >
                <IconComponent className="h-6 w-6 text-black-400 hover:text-[#0033FF] transition-colors duration-200" />
                <p className="text-[#323232] hover:text-[#0033FF] text-sm block md:hidden">
                  {name}
                </p>
              </div>
            </Tippy>
          ))}
        </div>
        <div className="flex flex-col items-start md:items-center space-y-9 mb-2 px-8 md:px-0">
          <Tippy content="Settings" placement="right">
            <div
              onClick={() => handleNavigation("/settings")}
              className="cursor-pointer flex items-center gap-3"
            >
              <FiSettings className="h-6 w-6 text-black-400 hover:text-blue-600 transition-colors duration-200" />
              <p className="text-[#323232] text-sm block md:hidden">Settings</p>
            </div>
          </Tippy>
          <Tippy content="Logout" placement="right">
            <div
              onClick={() => logoutWithRedirect()}
              className="flex items-center gap-3 cursor-pointer"
            >
              <FiLogOut className="h-6 w-6 text-black-400 hover:text-blue-600 transition-colors duration-200" />
              <p className="text-[#323232] text-sm block md:hidden">Logout</p>
            </div>
          </Tippy>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
