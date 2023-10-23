import React from 'react';
import Link from 'next/link';
import { FaUserCircle, FaLock, FaCloud, FaReceipt, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  const tabs = [
    { name: 'Profile', icon: <FaUserCircle />, link: '/profile' },
    { name: 'Security', icon: <FaLock />, link: '/security' },
    { name: 'API', icon: <FaCloud />, link: '/api' },
    { name: 'Subscription', icon: <FaReceipt />, link: '/subscription' }
  ];

  return (
    <div className="p-6 bg-white h-full">
      <div className="mb-8 flex items-center">
        <span className="text-3xl font-extrabold text-indigo-600">Reachly</span>
        <span className="ml-3 text-sm font-medium text-red-600 px-2 py-0.5 rounded-full border border-red-600">Beta</span>
      </div>
      <ul className="menu bg-base-200 w-full">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Link href={tab.link}>
              <a className="flex items-center space-x-2">
                <span className="text-lg">
                  {tab.icon}
                </span>
                <span className="font-medium">
                  {tab.name}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto p-3">
        <button 
          onClick={() => { /* Add logout functionality here */ }} 
          className="flex items-center space-x-2 w-full"
        >
          <FaSignOutAlt className="text-lg" /> 
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
