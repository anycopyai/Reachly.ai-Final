import React, { useState, useEffect } from 'react';
import { MdPerson, MdSettings, MdSubscriptions, MdApi, MdVpnKey } from 'react-icons/md';
import { Formik, Form, Field } from 'formik';
import { Button } from '@nextui-org/react';

const ProfileSettings = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
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

  const Sidebar = () => {
    const menuItems = [
      { icon: <MdPerson />, label: 'Profile', href: '#profile' },
      { icon: <MdSettings />, label: 'Integration', href: '#integration' },
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
              {/* Profile form goes here */}
              <Formik 
                initialValues={{ name: '', email: '', oldPassword: '', newPassword: '' }} 
                onSubmit={(values) => console.log(values)}
              >
                <Form>
                  {/* Form fields */}
                  {/* Replace these placeholders with actual form fields */}
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
                    <Field id="name" name="name" type="text" placeholder="Your Name" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                    <Field id="email" name="email" type="email" placeholder="Your Email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  {/* More fields as needed */}
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
  
          {/* Subscription tab */}
          {activeTab === 'subscription' && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Subscription Settings</h2>
              {/* Subscription settings content goes here */}
            </div>
          )}
  
          {/* API tab */}
          {activeTab === 'api' && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">API Settings</h2>
              {/* API settings content goes here */}
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

export default ProfileSettings;
