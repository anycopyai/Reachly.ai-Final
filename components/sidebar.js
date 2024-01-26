import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

import {
  FiHome,
  FiClipboard,
  FiEdit3,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
  FiSave,
} from "react-icons/fi";

const navItems = [
  { name: "Projects", IconComponent: FiHome, href: "/projects" },
  { name: "Templates", IconComponent: FiClipboard, href: "/browse" },
  { name: "Writer", IconComponent: FiEdit3, href: "/writer" },
  { name: "Saved", IconComponent: FiSave, href: "/saved" },
  { name: "Help", IconComponent: FiHelpCircle, href: "/help" },
];

const Sidebar = () => {
  const router = useRouter();
  const { logout, loginWithRedirect } = useAuth0();
  const handleNavigation = (href) => {
    router.push(href);
  };

  //logout the website and routeback to the login page
  const logoutWithRedirect = () => {
    localStorage.removeItem("accessToken");
    // Redirect to the login page
    router.push('/Login');
  };

  return (
    <div className="fixed top-0 left-0 bg-gray-50 w-20 flex flex-col justify-between py-6 h-screen z-10">
      {/* Updated background color to #F9F8F7 (bg-gray-50) */}
      <div className="flex flex-col items-center">
        <Link href="/browse">
          <a className="mb-16 cursor-pointer">
            <div className="h-12 w-12 flex items-center justify-center bg-black rounded-lg">
              <span className="text-xl font-bold text-white">E</span>
            </div>
          </a>
        </Link>
        {navItems.map(({ name, IconComponent, href }) => (
          <Tippy key={name} content={name} placement="right">
            <div
              onClick={() => handleNavigation(href)}
              className="mb-12 block cursor-pointer"
            >
              <IconComponent className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
            </div>
          </Tippy>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-12 mb-4">
        <Tippy content="Settings" placement="right">
          <div
            onClick={() => handleNavigation("/settings")}
            className="block cursor-pointer"
          >
            <FiSettings className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
        <Tippy content="Logout" placement="right">
          <div
            onClick={() => logoutWithRedirect()}
            className="block cursor-pointer"
          >
            <FiLogOut className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default Sidebar;
