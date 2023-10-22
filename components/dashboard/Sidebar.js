import React, { useState } from 'react';
import { MdPowerSettingsNew, MdPerson, MdContacts, MdMail, MdList, MdMenu } from 'react-icons/md';
import Link from 'next/link';  // Importing Link from Next.js

function Sidebar() {
  const [trialDays, setTrialDays] = useState(7);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Mobile Drawer Button */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button onClick={toggleDrawer} className="p-2 rounded-md bg-blue-500 text-white">
          <MdMenu size={24} />
        </button>
      </div>

      {/* Sidebar / Drawer */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 p-5 border-r transition-transform duration-300 ease-in-out bg-reachly-blue
                    ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:static md:h-screen`}>
                    
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-2 rounded-full bg-blue-500">
            <MdPerson className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold inline-block mr-2">Reachly</h1>
            <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">Beta</span>
          </div>
        </div>

        {/* Trial Info */}
        <div className="text-gray-200 text-xs mb-4">
          Trial ends in {trialDays} Days
        </div>

        {/* Navigation Links */}
        <ul className="menu w-56">
          {[
            { icon: <MdContacts />, label: 'Projects', href: '/Projects' },
            { icon: <MdMail />, label: 'Lead List', href: '/Leads' },
            { icon: <MdList />, label: 'Integrations', href: '/integration' },
          ].map((item, index) => (
            <li key={item.label}>
              <Link href={item.href}>
                <a className={`flex items-center space-x-4 p-2 ${index === 1 ? 'bg-opacity-50' : ''}`}>
                  <div className="text-blue-500">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <span className="text-gray-200">{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Upgrade Section */}
        <div className="absolute bottom-16 left-5 flex flex-col items-start space-y-2">
          <button className="btn btn-outline text-white border-white">
            Upgrade
          </button>
          <span className="text-gray-200 text-xs">
            {trialDays > 0 ? `Trial ends in ${trialDays} Days` : 'Trial ended'}
          </span>
        </div>

        {/* Logout Section */}
        <div className="absolute bottom-6 left-5 flex items-center space-x-3 p-2 rounded-md">
          <MdPowerSettingsNew className="text-red-500" size={28} />
          <a href="#" className="text-gray-200 text-md">
            Logout
          </a>
        </div>

        {/* Close drawer button for mobile */}
        <div className="md:hidden absolute top-6 right-6">
          <button onClick={toggleDrawer} className="p-2 rounded-md bg-red-500 text-white">
            <MdPowerSettingsNew size={24} />
          </button>
        </div>
      </div>

      {/* Drawer Backdrop for Mobile */}
      <div onClick={toggleDrawer} className={`fixed inset-0 z-30 bg-black bg-opacity-50
                  ${drawerOpen ? 'block' : 'hidden'} md:hidden`}></div>
    </>
  );
}

export default Sidebar;
