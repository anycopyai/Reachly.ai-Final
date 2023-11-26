import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {Button} from "@nextui-org/react";
import NotificationDrawer from '../dashboard/Notifications'; // Import the NotificationDrawer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faCog,
  faCreditCard,
  faUsers,
  faSignOutAlt,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  FaThumbtack,
  FaPhone,
  FaQuestionCircle,
  FaBell,
  FaCog,
  FaUser,
  FaCreditCard,
  FaUsers,
  FaArrowUp,
  FaSignOutAlt, // Make sure this is added
} from 'react-icons/fa';

const DaisyUIMenu = observer(() => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', role: '', credits: 0 });
  const router = useRouter();
  const auth = getAuth();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for NotificationDrawer visibility

  // Function to toggle the NotificationDrawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const docRef = doc(db, 'users', user.uid);
        getDoc(docRef).then((docData) => {
          if (docData.exists()) {
            const data = docData.data();
            setUserInfo({ 
              name: data.name, 
              role: data.role, 
              credits: data.credits // Fetching credits from Firestore
            });
          } else {
            console.log('No such document!');
          }
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);


  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        router.push('/Login');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  const firstInitial = userInfo.name ? userInfo.name[0] : 'U';
  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
  };


return (
  <div className="relative w-full">
    <div className="navbar bg-base-100" style={navbarStyle}>
      <div className="flex-1"></div>
      <div className="flex-1 text-center">
          <div className="inline-block">
          <span className="text-sm pr-2">
  {userInfo.credits || '0'} Credits Left
</span>
<Button color="primary" variant="solid">
        Upgrade
      </Button>

          </div>
        </div>
      <div className="flex-none">
        <div className="flex items-center gap-3">
          <button className="tooltip tooltip-bottom" data-tip="Pinned">
            <FaThumbtack className="text-gray-600" />
          </button>
          <button className="tooltip tooltip-bottom" data-tip="Support">
            <FaPhone className="text-gray-600" />
          </button>
          <button className="tooltip tooltip-bottom" data-tip="FAQ">
            <FaQuestionCircle className="text-gray-600" />
          </button>
          <button className="tooltip tooltip-bottom" data-tip="Notifications" onClick={toggleDrawer}>
            <FaBell className="text-gray-600" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
          </button>
          <button className="tooltip tooltip-bottom" data-tip="Settings">
            <FaCog className="text-gray-600" />
          </button>

          {/* Dropdown Menu */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full">
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="User" />
                ) : (
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-200 text-gray-700 text-xl">
                    {firstInitial}
                  </span>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg bg-white rounded-md w-56 border border-gray-300"
            >
              <li className="menu-title">
                <span>{userInfo.name || 'User'}</span>
                <span className="badge badge-outline badge-sm ml-2">{userInfo.role || 'Role'}</span>
              </li>
              <li>
                <a className="flex items-center">
                  <FaUser className="text-blue-500 mr-2" />
                  Your Profile
                </a>
              </li>
              <li>
                <a className="flex items-center">
                  <FaCreditCard className="text-blue-500 mr-2" />
                  View Credits Usage
                </a>
              </li>
              <li>
                <a className="flex items-center">
                  <FaUsers className="text-blue-500 mr-2" />
                  Your Team
                </a>
              </li>
              <li>
                <a className="flex items-center">
                  <FaArrowUp className="text-blue-500 mr-2" />
                  Upgrade Plan
                </a>
              </li>
              <li>
                <a className="flex items-center">
                  <FaCog className="text-blue-500 mr-2" />
                  Integrations
                </a>
              </li>
              <li>
                <a onClick={handleLogout} className="flex items-center">
                  <FaSignOutAlt className="text-blue-500 mr-2" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Notification Drawer */}
    {isDrawerOpen && <NotificationDrawer toggleDrawer={toggleDrawer} />}
  </div>
);

});

export default DaisyUIMenu;
