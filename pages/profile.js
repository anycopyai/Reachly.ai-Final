import React, { useState, useEffect, useContext } from 'react';
import { MdPerson, MdSettings, MdSubscriptions, MdApi, MdVpnKey, MdGroup, MdCreditCard } from 'react-icons/md';
import { getAuth, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import Sidebar from '../components/profile/Sidebar';
import ProfileTab from '../components/profile/ProfileTab';
import IntegrationTab from '../components/profile/IntegrationTab';
import APISettingsTab from '../components/profile/APISettingsTab';
import { UserContext } from '../contexts/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import withAuth from '../hoc/withAuth';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({ name: '', email: '', oldPassword: '', newPassword: '' });
 
  
  





  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await fetch(`https://api.elixcent.com/userProfile?uid=${user.uid}`);
          if (!response.ok) throw new Error('Failed to fetch user data');

          const firestoreData = await response.json();
          setUserData({
            ...firestoreData,
            email: user.email,
            oldPassword: '',
            newPassword: ''
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="gradient-spinner"></div>
      </div>
    );
  };
  
  





  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updatePassword = async (newPassword, oldPassword) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.error('No user logged in');
      return;
    }

    const credential = EmailAuthProvider.credential(currentUser.email, oldPassword);

    try {
      await reauthenticateWithCredential(currentUser, credential);
      await currentUser.updatePassword(newPassword);
      toast.success("Password updated successfully!");
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error("Failed to update password.");
    }
  };

  const handleSubmit = async (values) => {
    console.log("Form Submitted with values:", values);

    if (user) {
      try {
        const updateResponse = await fetch('https://api.elixcent.com/updateProfile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid: user.uid, data: values }),
        });

        if (!updateResponse.ok) throw new Error('Error updating profile');

        if (values.newPassword && values.oldPassword) {
          await updatePassword(values.newPassword, values.oldPassword);
        }

        toast.success("Profile updated successfully!");
      } catch (error) {
        console.error('Error updating user profile:', error);
        toast.error("Failed to update profile.");
      }
    }
  };

  const [showApiKey, setShowApiKey] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const handleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('YourAPIKey123456789')
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
      }, () => {
        setCopySuccess('Failed to copy!');
      });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const integrations = [
    {
      name: 'Google Sheets',
      icon: '/images/google-sheets.png',
      description: 'Sync data with your Google Sheets.'
    },
    // ... add other integrations as needed
  ];

  let TabContent;
  switch (activeTab) {
    case 'profile':
      TabContent = (
        <ProfileTab 
          initialValues={userData}
          onSubmit={handleSubmit}
        />
      );
      break;
    case 'integration':
      TabContent = <IntegrationTab integrations={integrations} />;
      break;
    case 'api':
      TabContent = (
        <APISettingsTab 
          showApiKey={showApiKey} 
          handleApiKeyVisibility={handleApiKeyVisibility} 
          copyToClipboard={copyToClipboard} 
          copySuccess={copySuccess} 
        />
      );
      break;
    default:
      TabContent = null;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} isSidebarCollapsed={isSidebarCollapsed} />
      <div className="flex-1 p-6 ml-64 bg-gray-100">
        <div className="max-w-lg">
          {TabContent}
        </div>
      </div>
      <ToastContainer /> {/* Add the ToastContainer */}

    </div>
  );
};

export default withAuth(Profile);
