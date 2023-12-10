// components/Sidebar.js
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FiHome, FiClipboard, FiEdit3, FiHelpCircle, FiSettings, FiLogOut } from 'react-icons/fi';

const navItems = [
  { name: 'Workspace', IconComponent: FiHome, href: '#workspace' },
  { name: 'Templates', IconComponent: FiClipboard, href: '#templates' },
  { name: 'Writer', IconComponent: FiEdit3, href: '#writer' },
  { name: 'Help', IconComponent: FiHelpCircle, href: '#help' },
];

const sidebar = () => {
  return (
    <div className="bg-white w-20 flex flex-col justify-between py-6 custom-shadow h-screen">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 mb-16 flex items-center justify-center bg-black rounded-lg">
          <span className="text-xl font-bold text-white">E</span>
        </div>
        {navItems.map(({ name, IconComponent, href }) => (
          <Tippy key={name} content={name} placement="right">
            <a href={href} className="mb-12 block">
              <IconComponent className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
            </a>
          </Tippy>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-12 mb-4">
        <Tippy content="Settings" placement="right">
          <a href="#settings" className="block">
            <FiSettings className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
          </a>
        </Tippy>
        <Tippy content="Logout" placement="right">
          <a href="#logout" className="block">
            <FiLogOut className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors duration-200" />
          </a>
        </Tippy>
      </div>
    </div>
  );
};

export default sidebar;
