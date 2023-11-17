import React, { useState, useEffect } from 'react';
import { MdDashboard,MdEject, MdContacts, MdList, MdMenu, MdClose, MdUpgrade } from 'react-icons/md';
import Link from 'next/link';

function Sidebar({ isCollapsed }) {
  const [creditLeft, setCreditLeft] = useState(100);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDrawerOpen(false);
      } else {
        setDrawerOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconSize = isCollapsed ? 24 : 28;
  const sidebarClass = `fixed inset-y-0 left-0 z-40 ${isCollapsed ? 'w-16' : 'w-64'} px-2 py-4 bg-white transform transition-transform duration-300 ease-in-out border-r ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:sticky md:top-0 md:h-screen`;

  const renderMenuItem = (item) => (
    <li key={item.label} className={`${isCollapsed ? 'mb-4' : 'mb-0'}`}>
      <Link href={item.href}>
        <a className="flex items-center space-x-4 p-3 hover:bg-blue-100 rounded-md transition duration-200 text-gray-600">
          {React.cloneElement(item.icon, { size: iconSize, className: 'text-gray-600' })}
          {!isCollapsed && <span>{item.label}</span>}
        </a>
      </Link>
    </li>
  );

  return (
    <>
      {drawerOpen && (
        <div className={`fixed inset-0 z-30 bg-black bg-opacity-50 ${drawerOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleDrawer}></div>
      )}

      <div className={sidebarClass}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex justify-center items-center mb-8">
            {!isCollapsed && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ 
                  backgroundColor: 'black', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ 
                    color: 'blue', 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' 
                  }}>
                    E
                  </span>
                </div>
                <h1 style={{ 
                  marginLeft: '10px', 
                  color: 'black', 
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', 
                  fontSize: '24px', 
                  fontWeight: 'bold' 
                }}>
                  Elixcent
                </h1>
              </div>
            )}
          </div>

          <button onClick={toggleDrawer} className="md:hidden p-2 rounded-md bg-red-500 text-white">
            {drawerOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        <ul className={`menu w-full ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
          {[
            { icon: <MdDashboard />, label: 'Dashboard', href: '/Dashboard' },
            { icon: <MdContacts />, label: 'Contacts', href: '/Contacts' },
            { icon: <MdList />, label: 'Personalization', href: '/Personalization' },
            { icon: <MdList />, label: 'Integration', href: '/Integration' },
          ].map(renderMenuItem)}
        </ul>

        <div className="absolute bottom-4 w-full px-4">
          <div className="bg-blue-100 p-2 rounded-md text-center mb-2">
            <span className="text-gray-600 font-semibold">{creditLeft} Credits Left</span>
          </div>

          {!isCollapsed && (
            <button className="flex items-center justify-center space-x-2 btn w-1/2 mx-auto text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-md px-4 py-2">
              <span>Upgrade</span>
            </button>
          )}
        </div>
      </div>

      {!drawerOpen && (
        <button onClick={toggleDrawer} className="fixed top-6 left-6 z-50 p-2 rounded-md bg-blue-600 text-white md:hidden">
          <MdMenu size={24} />
        </button>
      )}
    </>
  );
}

export default Sidebar;
