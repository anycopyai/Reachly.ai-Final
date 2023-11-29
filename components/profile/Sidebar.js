import React from 'react';
import { MdPerson, MdSettings, MdSubscriptions, MdApi, MdVpnKey, MdGroup, MdCreditCard } from 'react-icons/md';

const Sidebar = ({ activeTab, handleTabClick, isSidebarCollapsed }) => {
  const menuItems = [
    { icon: <MdPerson />, label: 'Profile' },
    { icon: <MdSettings />, label: 'Integration' },
    { icon: <MdGroup />, label: 'Team' },
    { icon: <MdCreditCard />, label: 'Credits' },
    { icon: <MdSubscriptions />, label: 'Subscription' },
    { icon: <MdApi />, label: 'API' },
    { icon: <MdVpnKey />, label: 'Security' }
  ];

  const renderMenuItem = (item) => (
    <li key={item.label} className="mb-4">
      <a onClick={() => handleTabClick(item.label.toLowerCase())} className={`flex items-center space-x-4 p-3 rounded-md hover:bg-gray-200 ${activeTab === item.label.toLowerCase() ? 'bg-gray-300' : ''}`}>
        {React.cloneElement(item.icon, { size: 24, className: 'text-blue-500' })}
        <span className={`${isSidebarCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
      </a>
    </li>
  );

  return (
    <div className={`fixed inset-y-0 left-0 z-40 ${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-white text-gray-700 border-r transition-all duration-300`}>
      <ul className="menu w-full">
        {menuItems.map(renderMenuItem)}
      </ul>
    </div>
  );
};

export default Sidebar;
