import React, { useState } from 'react';
import { MdDashboard, MdContacts, MdList, MdMenu } from 'react-icons/md';
import { useRouter } from 'next/router';
import { auth } from '../../lib/firebase';
import Link from 'next/link';

function Sidebar() {
  const [creditLeft, setCreditLeft] = useState(100);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button onClick={toggleDrawer} className="p-2 rounded-md bg-blue-500 text-white">
          <MdMenu size={24} />
        </button>
      </div>

      <div className={`fixed inset-y-0 left-0 z-40 w-64 p-5 border-r transition-transform duration-300 ease-in-out bg-reachly-blue ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:h-screen`}>
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-2 rounded-full bg-blue-500">
            <MdDashboard className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold inline-block mr-2" style={{ fontFamily: 'Courier New, monospace' }}>QuickQuill</h1>
          </div>
        </div>

        <div className="mb-4 text-gray-200">
          <span className="font-bold text-lg">Credit Left: </span>
          <span className="font-bold text-lg">{creditLeft}</span>
        </div>

        <ul className="menu w-56">
          {[
            { icon: <MdDashboard />, label: 'Dashboard', href: '/Dashboard' },
            { icon: <MdContacts />, label: 'Contacts', href: '/Contacts' },
            { icon: <MdList />, label: 'Personalization', href: '/Personalization' },
            { icon: <MdList />, label: 'Integration', href: '/Integration' },
          ].map((item, index) => (
            <li key={item.label}>
              <Link href={item.href}>
                <a className={`flex items-center space-x-4 p-2`}>
                  <div className="text-blue-500">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <span className="text-gray-200">{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-16 left-5 flex flex-col items-start space-y-2">
          <button className="btn btn-outline text-white border-white">Upgrade</button>
        </div>

        <div className="md:hidden absolute top-6 right-6">
          <button onClick={toggleDrawer} className="p-2 rounded-md bg-red-500 text-white">
            <MdDashboard size={24} />
          </button>
        </div>
      </div>

      <div onClick={toggleDrawer} className={`fixed inset-0 z-30 bg-black bg-opacity-50 ${drawerOpen ? 'block' : 'hidden'} md:hidden`}></div>
    </>
  );
}

export default Sidebar;
