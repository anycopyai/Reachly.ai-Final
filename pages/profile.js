import React, { useState, useEffect } from 'react';
import { MdDashboard, MdContacts, MdList, MdMenu, MdClose, MdPerson, MdSettings, MdSubscriptions, MdVpnKey, MdApi } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';

const ProfileSettings = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const router = useRouter();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sidebar
  const Sidebar = ({ isCollapsed }) => {
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
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
        </a>
      </li>
    );

    return (
      <div className={`fixed inset-y-0 left-0 z-40 ${isCollapsed ? 'w-16' : 'w-64'} bg-white text-gray-700 border-r transition-all duration-300`}>
        <div className="flex items-center justify-center h-16 border-b">
          <img src="/path-to-your-logo.png" alt="Logo" className={`${isCollapsed ? 'hidden' : 'block'}`} />
        </div>
        <ul className="menu w-full">
          {menuItems.map(renderMenuItem)}
        </ul>
      </div>
    );
  };

  // Main Content
  return (
    <div className="flex h-screen">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex-1 bg-gray-100 p-6 ml-64">
        <div>
          {activeTab === 'profile' && (
            <Formik initialValues={{ name: '' }} onSubmit={(values) => console.log(values)}>
              <Form>
                <Field name="name" type="text" placeholder="Name" className="p-2 border rounded" />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded ml-2">Save</button>
              </Form>
            </Formik>
          )}
          {activeTab === 'integration' && <div>Integration Settings</div>}
          {activeTab === 'subscription' && <div>Subscription Settings</div>}
          {activeTab === 'api' && <div>API Settings</div>}
          {activeTab === 'security' && <div>Security Settings</div>}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
