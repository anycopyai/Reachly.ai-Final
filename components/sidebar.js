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
        placeholder: "Anycopy.co",
        maxLength: 75,
        value: "",
      },
    ],
  },
  { name: "Projects", IconComponent: FaRegFileAlt, href: "/Projects" },
  { name: "Saved", IconComponent: FiDownload, href: "/download" },
  { name: "AI Copilot", IconComponent: BsCardChecklist, href: "/chat" },
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
  const toggleSidebar = () => {
    setisOpen(!isOpen);
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
     <div className="md:hidden flex absolute right-4 top-4 z-20">
  <button onClick={toggleSidebar} className="text-blue-600 focus:outline-none">
    {isOpen ? (
      <IoCloseSharp className="text-4xl transition-transform duration-300" />
    ) : (
      <MdOutlineMenu className="text-3xl transition-transform duration-300" />
    )}
  </button>
</div>
<div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-20 md:bg-gray-50 md:h-screen md:z-50 md:justify-between md:p-4">
  {/* Logo and potentially other top-level navigation items */}
  <div className="mb-6">
    <Link href="/">
      <a className="flex justify-center items-center">
        <img className="h-8 w-8" alt="Logo" src="../images/logo.png" />
      </a>
    </Link>
  </div>

  {/* Navigation items with Tippy */}
  <div className="flex flex-col justify-start items-center">
    {navItems.map(({ name, IconComponent, href, Extrafields }) => (
      <Tippy content={name} placement="right" arrow={false} delay={[500, 0]}>
        <div key={name} onClick={() => handleNavigation(href, name, Extrafields)}
            className="w-full mb-4 p-2 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md">
          <IconComponent className="text-2xl text-gray-800" />
        </div>
      </Tippy>
    ))}
  </div>

  {/* Lower section for settings and logout */}
  <div className="flex flex-col justify-end items-center w-full">
    <Tippy content="Settings" placement="right">
      <div onClick={() => handleNavigation("/settings")}
          className="cursor-pointer w-full flex justify-center items-center gap-3 mb-4 hover:bg-gray-100 p-2 rounded-md">
        <FiSettings className="text-2xl text-gray-800" />
      </div>
    </Tippy>
    <Tippy content="Logout" placement="right">
      <div onClick={() => logoutWithRedirect()}
          className="cursor-pointer w-full flex justify-center items-center gap-3 hover:bg-gray-100 p-2 rounded-md">
        <FiLogOut className="text-2xl text-gray-800" />
      </div>
    </Tippy>
  </div>
</div>

<div
  className={`fixed inset-y-0 right-0 bg-gray-50 w-full h-screen z-50 flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex justify-between items-center mb-6">
    <Link href="/">
      <a className="flex items-center gap-3">
        <img className="h-8 w-8" alt="Logo" src="../images/logo.png" />
        <span className="font-medium text-xl text-gray-900">AnyCopy</span>
      </a>
    </Link>
    <button onClick={() => setisOpen(false)} className="text-gray-600">
      <IoCloseSharp className="text-4xl" />
    </button>
  </div>

  {navItems.map(({ name, IconComponent, href, Extrafields }) => (
    <div
      key={name}
      onClick={() => handleNavigation(href, name, Extrafields)}
      className="mb-4 p-2 flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-md"
    >
      <IconComponent className="text-2xl text-gray-800" />
      <span className="text-lg font-medium text-gray-900">{name}</span>
    </div>
  ))}

  <div className="mt-auto">
    <div
      onClick={() => handleNavigation("/settings")}
      className="cursor-pointer flex items-center gap-3 mb-4 hover:bg-gray-100 p-2 rounded-md"
    >
      <FiSettings className="text-2xl text-gray-800" />
      <span className="text-lg font-medium text-gray-900">Settings</span>
    </div>
    <div
      onClick={() => logoutWithRedirect()}
      className="cursor-pointer flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
    >
      <FiLogOut className="text-2xl text-gray-800" />
      <span className="text-lg font-medium text-gray-900">Logout</span>
    </div>
  </div>
</div>


    </>
  );
};

export default Sidebar;
