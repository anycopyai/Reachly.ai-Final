import React, { useState, useEffect } from 'react';
import { MdPerson, MdSettings, MdSubscriptions, MdApi, MdVpnKey, MdGroup, MdCreditCard } from 'react-icons/md';
import { Formik, Form, Field } from 'formik';
import SkeletonLoader from '../components/SkeletonLoader';
import withAuth from '../hoc/withAuth';




import { Button } from '@nextui-org/react';

const ProfileSettings = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(true); // Add a loading state


// At the beginning of your ProfileSettings component
const [showApiKey, setShowApiKey] = useState(false);
const [copySuccess, setCopySuccess] = useState('');

const handleApiKeyVisibility = () => {
  setShowApiKey(!showApiKey);

  // Automatically hide the API key after 5 seconds
  setTimeout(() => {
    setShowApiKey(false);
  }, 5000);
};

const copyToClipboard = () => {
  navigator.clipboard.writeText('YourAPIKey123456789').then(() => {
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
  }, () => {
    setCopySuccess('Failed to copy!');
  });
};



  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Timer for skeleton loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

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

 // If the page is loading, return the SkeletonLoader
 if (loading) {
  return <SkeletonLoader />;
}

const Sidebar = () => {
  const menuItems = [
    { icon: <MdPerson />, label: 'Profile', href: '#profile' },
    { icon: <MdSettings />, label: 'Integration', href: '#integration' },
    { icon: <MdGroup />, label: 'Team', href: '#team' }, // New Team tab
    { icon: <MdCreditCard />, label: 'Credits', href: '#credits' }, // New Credits tab
    { icon: <MdSubscriptions />, label: 'Subscription', href: '#subscription' },
    { icon: <MdApi />, label: 'API', href: '#api' },
    { icon: <MdVpnKey />, label: 'Security', href: '#security' }
  ];

    const renderMenuItem = (item) => (
      <li key={item.label} className="mb-4">
        <a href={item.href} onClick={() => handleTabClick(item.label.toLowerCase())} className={`flex items-center space-x-4 p-3 rounded-md hover:bg-gray-200 ${activeTab === item.label.toLowerCase() ? 'bg-gray-300' : ''}`}>
          {React.cloneElement(item.icon, { size: 24, className: 'text-blue-500' })}
          <span className={`${isSidebarCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
        </a>
      </li>
    );

    return (
      <div className={`fixed inset-y-0 left-0 z-40 ${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-white text-gray-700 border-r transition-all duration-300`}>
        {!isSidebarCollapsed && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/images/logo.png" alt="Elixcent Logo" className="logo-image" style={{ width: '100px' }} />
            <h1 className="logo-text" style={{ marginLeft: '0px' }}>Elixcent</h1>
          </div>
        )}
        <ul className="menu w-full">
          {menuItems.map(renderMenuItem)}
        </ul>
      </div>
    );
  };

  // Main Content
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 ml-64 bg-gray-100">
        <div className="max-w-lg">
          {/* Profile tab */}
          {activeTab === 'profile' && (
  <div>
    <h2 className="text-2xl font-semibold mb-5">Edit Profile</h2>
    <Formik 
      initialValues={{ name: '', email: '', oldPassword: '', newPassword: '' }} 
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <Field id="name" name="name" type="text" placeholder="Your Name" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        {/* Email field (non-editable) */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <Field id="email" name="email" type="email" placeholder="Your Email" disabled className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        {/* Old Password field */}
        <div className="mb-4">
          <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">Old Password:</label>
          <Field id="oldPassword" name="oldPassword" type="password" placeholder="Old Password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        {/* New Password field */}
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password:</label>
          <Field id="newPassword" name="newPassword" type="password" placeholder="New Password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        {/* Save Changes button */}
        <Button color="primary" size="lg" variant="flat">Save Changes</Button>
      </Form>
    </Formik>
  </div>
)}

  
          {/* Integration tab */}
          {activeTab === 'integration' && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Integrations</h2>
              {integrations.map((integration) => (
                <div key={integration.name} className="bg-white p-4 rounded-lg shadow-xl mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={integration.icon} alt={`${integration.name} logo`} className="w-12 h-12 mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold">{integration.name}</h3>
                        <p className="text-sm text-gray-600">{integration.description}</p>
                      </div>
                    </div>
                    <Button color="primary" auto>Activate</Button>
                  </div>
                </div>
              ))}
            </div>
          )}

            {/* Team tab */}
            {activeTab === 'team' && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Team Settings</h2>
              {/* Team settings content goes here */}
            </div>
          )}

          {/* Credits tab */}
          {activeTab === 'credits' && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Credits</h2>
              {/* Credits content goes here */}
            </div>
          )}
  
          {/* Subscription tab */}
          {activeTab === 'subscription' && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Subscription Settings</h2>
              {/* Subscription settings content goes here */}
            </div>
          )}
  
  {activeTab === 'api' && (
  <div>
    <h2 className="text-2xl font-semibold mb-5">API Settings</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">Use the API key below to integrate your applications with our services. Please keep your API key confidential.</p>
      <div className="flex items-center space-x-4">
        <input
          type={showApiKey ? "text" : "password"}
          value="YourAPIKey123456789"
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          onClick={handleApiKeyVisibility}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {showApiKey ? 'Hide' : 'Show'}
        </button>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {copySuccess ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {copySuccess && <p className="text-green-500 text-sm mt-2">{copySuccess}</p>}
    </div>
  </div>
)}


  
          {/* Security tab */}
          {activeTab === 'security' && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Security Settings</h2>
              {/* Security settings content goes here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default withAuth(ProfileSettings);
