import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSnackbar } from "notistack";
import { FaRegFlag } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GoCopy } from "react-icons/go";
import { RiAdvertisementLine } from "react-icons/ri";
import { FiClipboard, FiSettings, FiLogOut, FiDownload } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

const navItems = [
  { name: "Projects", IconComponent: GoHome, href: "/projects" },
  { name: "Writer", IconComponent: MdOutlineEdit, href: "/writer" },
  { name: "Templates", IconComponent: FiClipboard, href: "/browse" },
  { name: "URL to Ad", IconComponent: RiAdvertisementLine, href: "/url-to-ad" },
  { name: "Copy", IconComponent: GoCopy, href: "/copy" },
  { name: "Download", IconComponent: FiDownload, href: "/download" },
  { name: "Report", IconComponent: FaRegFlag, href: "/Report" },
  { name: "Help", IconComponent: IoIosHelpCircleOutline, href: "/Help" },
];

const Sidebar = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleNavigation = (href) => {
    router.push(href);
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
    <div
      className="fixed top-0 left-0 bg-white w-20 flex flex-col justify-between py-6 h-screen z-10"
      style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)" }}
    >
      {/* Updated background color to #F9F8F7 (bg-gray-50) */}
      <div className="flex flex-col items-center">
        <Link href="/">
          <a className="mb-8 cursor-pointer">
            <img
              className="h-6 w-6 image-2-icon2"
              alt=""
              src="../images/logo.png"
              style={{ height: 25, width: 25 }}
            />
          </a>
        </Link>
        {navItems.map(({ name, IconComponent, href }) => (
          <Tippy key={name} content={name} placement="right">
            <div
              onClick={() => handleNavigation(href)}
              className="mb-8 block cursor-pointer"
            >
              <IconComponent className="h-6 w-6 text-black-400 hover:text-blue-600 transition-colors duration-200" />
            </div>
          </Tippy>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-9 mb-2">
        <Tippy content="Settings" placement="right">
          <div
            onClick={() => handleNavigation("/settings")}
            className="block cursor-pointer"
          >
            <FiSettings className="h-6 w-6 text-black-400 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
        <Tippy content="Logout" placement="right">
          <div
            onClick={() => logoutWithRedirect()}
            className="block cursor-pointer"
          >
            <FiLogOut className="h-6 w-6 text-black-400 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default Sidebar;
