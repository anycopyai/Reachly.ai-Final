import React, { useState } from 'react';
import { FaUserCircle, FaLock, FaCloud, FaReceipt, FaBars, FaShieldAlt, FaCog, FaEllipsisH } from 'react-icons/fa';


const Security = () => {
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('Security');

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Add your Lambda function here to save the changes
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const tabs = [
    { name: 'Security', icon: <FaLock /> },
    { name: 'Account', icon: <FaCog /> },
    { name: 'API', icon: <FaCloud /> },
    { name: 'Subscription', icon: <FaReceipt /> }
  ];

  const tabContent = {
    Security: (
      <div>
        {/* Your Security tab content */}
        <p>This is the Security tab.</p>
      </div>
    ),
    Account: (
      <div>
        {/* Your Account tab content */}
        <p>This is the Account tab.</p>
      </div>
    ),
    API: (
      <div>
        {/* Your API tab content */}
        <p>This is the API tab.</p>
      </div>
    ),
    Subscription: (
      <div>
        {/* Your Subscription tab content */}
        <p>This is the Subscription tab.</p>
      </div>
    )
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-base-200 w-1/5 h-screen p-6 md:block hidden">
        <div className="mb-8 flex items-center">
          <h1 className="text-3xl font-extrabold text-indigo-600">Your Logo</h1>
        </div>
        <ul className="menu space-y-5">
          {tabs.map((tab, index) => (
            <li key={index} className={`menu-item ${activeTab === tab.name ? 'active' : ''}`}>
              <button onClick={() => setActiveTab(tab.name)}>
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-auto p-3">
          <button 
            onClick={() => { /* Add logout functionality here */ }} 
            className="flex items-center space-x-2 w-full text-gray-600"
          >
            <FaBars className="text-lg" /> 
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-10 px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold">Security Settings</h1>
              <button
                type="button"
                className={`btn btn-${editing ? 'primary' : 'secondary'}`}
                onClick={editing ? handleSave : handleEdit}
              >
                {editing ? 'Save' : 'Update'}
              </button>
            </div>

            {/* Tab Content */}
            {tabContent[activeTab]}

            {/* Save Button */}
            <div className="mt-6">
              {editing && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
              {!editing && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Security;
