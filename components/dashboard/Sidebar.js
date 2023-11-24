import React, { useState, useEffect } from 'react';
import { MdDashboard, MdContacts, MdList, MdMenu, MdClose, MdUpgrade } from 'react-icons/md';
import Link from 'next/link';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../lib/firebase'; // Adjust the path to your firebase.js file
import { doc, getDoc } from 'firebase/firestore';

function Sidebar({ isCollapsed }) {
  const [creditLeft, setCreditLeft] = useState(0);
  const [creditsLoading, setCreditsLoading] = useState(true); // New loading state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const auth = getAuth();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    setCreditsLoading(true);  // Set loading to true before fetching data
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        getDoc(docRef).then((docData) => {
          if (docData.exists()) {
            const data = docData.data();
            setCreditLeft(data.credits); // Set the credits from Firestore
          } else {
            console.log('No such document!');
          }
          setCreditsLoading(false);  // Set loading to false after fetching data
        }).catch((error) => {
          console.error("Error fetching document:", error);
          setCreditsLoading(false);  // Set loading to false in case of error
        });
      }
    });

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
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [auth]);

  const iconSize = isCollapsed ? 24 : 28;
  const sidebarClass = `fixed inset-y-0 left-0 z-40 ${isCollapsed ? 'w-16' : 'w-64'} px-2 py-4 bg-[#00056a] transform transition-transform duration-300 ease-in-out border-r ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:sticky md:top-0 md:h-screen`;

  const menuItems = [
    { icon: <MdDashboard />, label: 'Dashboard', href: '/dashboard' },
    { icon: <MdList />, label: 'Projects', href: '/Projects' },
    { icon: <MdContacts />, label: 'Leads', href: '/Contacts' },
    { icon: <MdList />, label: 'Integration', href: '/integration' },
    // Add other menu items here
  ];

  const renderMenuItem = (item) => (
    <li key={item.label} className={`${isCollapsed ? 'mb-4' : 'mb-0'}`}>
      <Link href={item.href}>
        <a className={`flex items-center space-x-4 p-3 rounded-md transition duration-200 menu-item`}>
          {React.cloneElement(item.icon, { size: iconSize, className: 'icon-blue' })}
          <span className={`${isCollapsed ? 'hidden' : 'block'}`} style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{item.label}</span>
          {item.Beta && !isCollapsed && (
            <div className="badge badge-primary badge-outline ml-2">Beta</div>
          )}
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
                <div className="logo-circle">
                  <span className="logo-text" style={{ color: '#00056a' }}>E</span>
                </div>

                <h1 className="logo-text">Elixcent</h1>
              </div>
            )}
          </div>

          <button onClick={toggleDrawer} className="md:hidden p-2 rounded-md bg-red-500 text-white">
            {drawerOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        <ul className={`menu w-full ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
          {menuItems.map(renderMenuItem)}
        </ul>

        <div className="absolute bottom-4 w-full px-4">
          <button className="btn">
            Credits
            <div className="badge badge-secondary">{creditLeft}</div>
          </button>

          {!isCollapsed && (
            <button className="btn btn-outline btn-primary flex items-center justify-center space-x-2 mt-4 w-full">
              <MdUpgrade />
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
