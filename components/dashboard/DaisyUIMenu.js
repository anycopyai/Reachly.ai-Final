import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import NotificationDrawer from '../dashboard/Notifications'; // Import the NotificationDrawer
import Link from 'next/link';

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
         
        
        <Link href="/support" passHref>
      <button className="tooltip tooltip-bottom" data-tip="Support">
        <img src="/images/customer-support.svg" alt="Support" className="nav-icon" />
      </button>
    </Link>
    
    <Link href="/integration" passHref>
      <button className="tooltip tooltip-bottom" data-tip="Integrations">
        <img src="/images/integration.webp" alt="Integrations" className="nav-icon" />
      </button>
    </Link>
    
    <Link href="/settings" passHref>
      <button className="tooltip tooltip-bottom" data-tip="Settings">
        <img src="/images/setting.png" alt="Settings" className="nav-icon" />
      </button>
    </Link>
 {/* NextUI Dropdown for User Profile and Options */}
 <Dropdown>
  <DropdownTrigger>
    <Avatar 
      className="cursor-pointer" 
      showFallback 
      name={userInfo.name || 'Jane'} 
      src={user && user.photoURL ? user.photoURL : 'https://images.unsplash.com/broken'} 
    />
  </DropdownTrigger>
  <DropdownMenu aria-label="User options" variant="flat">
    <DropdownItem key="profile">
      <a href="/profile">
        <img src="/images/profile.png" className="nav-icon" alt="Profile" style={{ marginRight: '8px' }} />
        Your Profile
      </a>
    </DropdownItem>
    <DropdownItem key="view-credits">
      <a href="/credits">
        <img src="/images/credits.png" alt="Credits" className="nav-icon" style={{ marginRight: '8px' }} />
        View Credits Usage
      </a>
    </DropdownItem>
    <DropdownItem key="team">
      <a href="/team">
        <img src="\images\team.png" alt="Team" className="nav-icon" style={{ marginRight: '8px' }} />
        Your Team
      </a>
    </DropdownItem>
    <DropdownItem key="upgrade">
      <a href="/upgrade">
        <img src="/images/upgrade-13.png" alt="Upgrade" className="nav-icon" style={{ marginRight: '8px' }} />
        Upgrade Plan
      </a>
    </DropdownItem>
    <DropdownItem key="integrations">
      <a href="/integration">
        <img src="/images/integration.webp" alt="Integrations"className="nav-icon" style={{ marginRight: '1px' }} />
        Integrations
      </a>
    </DropdownItem>
    <DropdownItem key="logout" onClick={handleLogout}>
      <img src="/images/logout-8.png" alt="Logout" className="nav-icon" style={{ marginRight: '8px' }} />
      Logout
    </DropdownItem>
  </DropdownMenu>
</Dropdown>


          </div>
        </div>
      </div>

      {/* Notification Drawer */}
      {isDrawerOpen && <NotificationDrawer toggleDrawer={toggleDrawer} />}
    </div>
  );
});

export default DaisyUIMenu;