import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSnackbar } from "notistack";
import { FiSettings } from "react-icons/fi";
import { MdOutlineEdit, MdLogout } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

const navItems = [
  { name: "Writer", IconComponent: MdOutlineEdit, href: "/Writer" },
  { name: "Projects", IconComponent: FaRegFileAlt, href: "/Projects" },
];

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
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
    <>
      <div className="fixed inset-y-0 left-0 bg-white w-20 h-screen z-50 flex flex-col items-center p-4 border-r border-gray-200">
        {/* Logo and potentially other top-level navigation items */}
        <div className="mb-12">
          <Link href="/">
            <a className="flex justify-center items-center">
              <img className="h-8 w-8" alt="Logo" src="../images/logo.png" />
            </a>
          </Link>
        </div>

        {/* Navigation items with Tippy */}
        <div className="flex flex-col justify-start items-center mt-12">
          {navItems.map(({ name, IconComponent, href }) => (
            <Tippy
              content={name}
              placement="right"
              arrow={false}
              delay={[500, 0]}
              key={name}
            >
              <div
                onClick={() => handleNavigation(href)}
                className="w-full mb-4 p-2 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <IconComponent className="text-2xl text-blue-600" />
              </div>
            </Tippy>
          ))}
        </div>

        {/* Lower section for settings and logout */}
        <div className="mt-auto flex flex-col justify-end items-center w-full">
          <Tippy content="Settings" placement="right">
            <div
              onClick={() => handleNavigation("/settings")}
              className="cursor-pointer w-full flex justify-center items-center gap-3 mb-4 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
            >
              <FiSettings className="text-2xl text-blue-600" />
            </div>
          </Tippy>
          <Tippy content="Logout" placement="right">
            <div
              onClick={() => logoutWithRedirect()}
              className="cursor-pointer w-full flex justify-center items-center gap-3 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
            >
              <MdLogout className="text-2xl text-red-600" />
            </div>
          </Tippy>
        </div>
      </div>
    </>
  );
};

export default Sidebar;