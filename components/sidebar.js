import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useRouter } from "next/router";
import Link from "next/link";
import {  signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useSnackbar } from "notistack";
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
import {FaFlag} from "react-icons/fa"
const navItems = [
  { name: "Projects", IconComponent: FiHome, href: "/projects" },
  { name: "Writer", IconComponent: FiEdit3, href: "/writer" },
  { name: "Templates", IconComponent: FiClipboard, href: "/browse" },
  { name: "Download", IconComponent: FiDownload, href: "/download" },
  { name: "Report", IconComponent: FaFlag, href: "/Report" },
  { name: "Help", IconComponent: IoIosHelpCircleOutline, href: "/Help" },
];

const Sidebar = ({children}) => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleNavigation = (href) => {
    router.push(href);
  };

  //logout the website and routeback to the login page
  const logoutWithRedirect = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("accessToken"); 
      enqueueSnackbar(`Logout successfully !`, {
        variant: "success",
      });
      router.push('/login');
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <div className="fixed top-0 left-0 bg-gray-50 w-20 flex flex-col justify-between py-6 h-screen z-10">
      {/* Updated background color to #F9F8F7 (bg-gray-50) */}
      <div className="flex flex-col items-center">
        <Link href="/">
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
      <div className="flex flex-col items-center space-y-9 mb-2">
        {/* <Tippy content="Settings" placement="right">
          <div
            onClick={() => handleNavigation("/settings")}
            className="block cursor-pointer"
          >
            <FiSettings className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy> */}
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


  //   <div className="left-nav2">
  //   <div className="header2">
  //     <img className="image-2-icon2" alt="" src="/image-2@2x.png" />
  //   </div>
  //   <div className="menu2">
  //     <div className="menu-item14" >
  //       <img className="url-to-ad" alt="" src="/content-paste.svg" />
  //     </div>
  //     <div className="menu-item15" >
  //       <img className="url-to-ad" alt="" src="/create.svg" />
  //     </div>
  //     <div className="menu-item16">
  //       <div className="url-to-ad">
  //         <img className="vector-icon" alt="" />
  //         <img className="vector-icon1" alt="" src="/vector.svg" />
  //         <div className="ad">Ad</div>
  //       </div>
  //     </div>
  //     <div className="menu-item15" >
  //       <img className="url-to-ad" alt="" src="/topic.svg" />
  //     </div>
  //     <div className="menu-item15" >
  //       <img className="url-to-ad" alt="" src="/save-alt.svg" />
  //     </div>
  //     <div className="menu-item16">
  //       <img
  //         className="outlined-flag-icon2"
  //         alt=""
  //         src="/outlined-flag.svg"
  //       />
  //     </div>
  //     <div className="menu-item16">
  //       <img
  //         className="outlined-flag-icon2"
  //         alt=""
  //         src="/help-outline.svg"
  //       />
  //     </div>
  //   </div>
  //   <div
  //     className="inline-menu-itemtop-levelleg2"
 
  //   >
  //     <img className="url-to-ad" alt="" src="/settings.svg" />
  //   </div>
  //   <div className="sider-trigger2">
  //     <img className="url-to-ad" alt="" src="/login.svg" />
  //   </div>
  //   <img
  //     className="sidemenu-fixed-switcher-icon2"
  //     alt=""
  //     src="/sidemenufixedswitcher.svg"
  //   />
  // </div>
  );
};

export default Sidebar;
