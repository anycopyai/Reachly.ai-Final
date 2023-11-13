import React, { useState } from 'react';
import { MdDashboard, MdContacts, MdList, MdMenu, MdClose, MdAccountBalanceWallet } from 'react-icons/md';
import Link from 'next/link';

function Sidebar() {
  const [creditLeft, setCreditLeft] = useState(100);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button onClick={toggleDrawer} className="p-2 rounded-md bg-blue-600 text-white">
          {drawerOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-y-0 left-0 z-40 w-64 px-5 py-4 transition-transform duration-300 ease-in-out bg-white shadow-xl ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:h-full`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-blue-600">
              <MdDashboard className="text-white" size={28} />
            </div>
            <h1 className="text-lg font-bold text-blue-600" style={{ fontFamily: 'Courier New, monospace' }}>QuickQuill</h1>
          </div>
          <button onClick={toggleDrawer} className="md:hidden p-2 rounded-md bg-red-500 text-white">
            {drawerOpen ? <MdClose size={24} /> : <MdDashboard size={24} />}
          </button>
        </div>

        <ul className="menu w-full text-blue-600 mb-6">
          {[
            { icon: <MdDashboard />, label: 'Dashboard', href: '/Dashboard' },
            { icon: <MdContacts />, label: 'Contacts', href: '/Contacts' },
            { icon: <MdList />, label: 'Personalization', href: '/Personalization' },
            { icon: <MdList />, label: 'Integration', href: '/Integration' },
          ].map((item) => (
            <li key={item.label}>
              <Link href={item.href}>
                <a className={`flex items-center space-x-4 p-3 hover:bg-blue-100 rounded-md transition duration-200`}>
                  <div>
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <span>{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-start space-y-2 mb-4">
          <div className="flex items-center justify-between bg-blue-100 p-3 rounded-md shadow-sm">
            <MdAccountBalanceWallet className="text-blue-600" size={28} />
            <div className="text-blue-600">
              <span className="font-semibold text-md">Credit Left: </span>
              <span className="font-semibold text-md">{creditLeft}</span>
            </div>
          </div>

          <button className="btn w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-md px-4 py-2 transition duration-300">Upgrade</button>
        </div>
      </div>

      <div onClick={toggleDrawer} className={`fixed inset-0 z-30 bg-black bg-opacity-50 ${drawerOpen ? 'block' : 'hidden'} md:hidden`}></div>
    </>
  );
}

export default Sidebar;
