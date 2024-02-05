import React from "react";
import Image from "next/image"
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import image1 from "../pages/Assets/anycopy.png"
import {PiCards} from "react-icons/pi"
import {
  FiHome,
  FiClipboard,
  FiEdit3,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
  FiSave,
  FiDownload
} from "react-icons/fi";
import {IoIosHelpCircleOutline } from "react-icons/io"
import {FaRegFlag } from "react-icons/fa"
const navItems = [
  { name: "Projects", IconComponent: FiHome, href: "/projects" },
  { name: "Writer", IconComponent: FiEdit3, href: "/writer" },
  { name: "Templates", IconComponent: FiClipboard, href: "/browse" },
  { name: "Download", IconComponent: FiDownload, href: "/download" },
  { name: "Download", IconComponent: PiCards, href: "/download"},
  { name: "Report", IconComponent: FaRegFlag, href: "/Report" },
  { name: "Help", IconComponent: IoIosHelpCircleOutline, href: "/Help" },
];

const Sidebar = ({children}) => {
  const router = useRouter();
  const { logout, loginWithRedirect } = useAuth0();
  const handleNavigation = (href) => {
    router.push(href);
  };


  const logoutWithRedirect = () => {
    localStorage.removeItem("accessToken");
  
    router.push('/Login');
  };

  return (
    <div className="fixed top-0 left-0 bg-gray-50 w-20 flex flex-col justify-between py-6 h-screen z-10">
   
      <div className="flex flex-col items-center">
        <Link href="/">
               <Image src={image1} className=" -translate-y-6"/>
        </Link>
        {navItems.map(({ name, IconComponent, href }) => (
          <Tippy key={name} content={name} placement="right">
            <div
              onClick={() => handleNavigation(href)}
              className="mb-9  block cursor-pointer"
            >
              <IconComponent className="h-5 w-5  hover:text-blue-600 transition-colors duration-200" />
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
            <FiSettings className="h-5 w-5  hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
        <Tippy content="Logout" placement="right">
          <div
            onClick={() => logoutWithRedirect()}
            className="block cursor-pointer"
          >
            <FiLogOut className="h-5 w-5  hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default Sidebar;
