import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useRouter } from 'next/router';
import { FiHome, FiClipboard, FiEdit3, FiHelpCircle, FiSettings, FiLogOut, FiSave } from 'react-icons/fi';

const navItems = [
  { name: 'Projects', IconComponent: FiHome, href: '/projects' },
  { name: 'Templates', IconComponent: FiClipboard, href: '/browse' },
  { name: 'Writer', IconComponent: FiEdit3, href: '/writer' },
  { name: 'Help', IconComponent: FiHelpCircle, href: '/help' },
  { name: 'Save', IconComponent: FiSave, href: '/save' }, // New Save nav item
];

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <div className="fixed top-0 left-0 bg-white w-20 flex flex-col justify-between py-6 h-screen shadow-xl z-10"> {/* Updated classes for fixed positioning */}
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 mb-16 flex items-center justify-center bg-black rounded-lg">
          <span className="text-xl font-bold text-white">E</span>
        </div>
        {navItems.map(({ name, IconComponent, href }) => (
          <Tippy key={name} content={name} placement="right">
            <div onClick={() => handleNavigation(href)} className="mb-12 block cursor-pointer">
              <IconComponent className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
            </div>
          </Tippy>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-12 mb-4">
        <Tippy content="Settings" placement="right">
          <div onClick={() => handleNavigation('/settings')} className="block cursor-pointer">
            <FiSettings className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
        <Tippy content="Logout" placement="right">
          <div onClick={() => handleNavigation('/logout')} className="block cursor-pointer">
            <FiLogOut className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default Sidebar;
