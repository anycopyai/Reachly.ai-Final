import React, { useState } from 'react';
import { FaUserCircle, FaLock, FaCloud, FaReceipt, FaSignOutAlt, FaBars } from 'react-icons/fa';

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Add your Lambda function here to save the changes
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const tabs = [
    { name: 'Profile', icon: <FaUserCircle /> },
    { name: 'Security', icon: <FaLock /> },
    { name: 'API', icon: <FaCloud /> },
    { name: 'Subscription', icon: <FaReceipt /> }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-base-200 w-1/5 h-screen p-6 md:block hidden">
        <div className="mb-8 flex items-center">
          <h1 className="text-3xl font-extrabold text-indigo-600">Reachly</h1>
        </div>
        <ul className="menu space-y-5">
          {tabs.map((tab, index) => (
            <li key={index} className="menu-item">
              <a className="flex items-center space-x-2 text-gray-600">
                <span className="text-lg">
                  {tab.icon}
                </span>
                <span className="font-medium">
                  {tab.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto p-3">
          <button 
            onClick={() => { /* Add logout functionality here */ }} 
            className="flex items-center space-x-2 w-full text-gray-600"
          >
            <FaSignOutAlt className="text-lg" /> 
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-10 px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold">Profile Settings</h1>
              <button
                type="button"
                className={`btn btn-${editing ? 'primary' : 'secondary'}`}
                onClick={editing ? handleSave : handleEdit}
              >
                {editing ? 'Save' : 'Update'}
              </button>
            </div>

            {/* Profile form content */}
            <div className="space-y-4">
              {/* Text logo */}
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold">Name of Person Who Signed Up</h2>
              </div>

              {/* Profile picture */}
              <div className="avatar">
                <div className="mb-4 w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="/path/to/your/image.jpg" alt="Profile" />
                </div>
                {editing && <input type="file" className="mt-2 border rounded" />}
              </div>

              {/* Other form fields */}
              <div className="mb-4">
                <label className="block text-gray-600 font-medium">Name</label>
                <input type="text" className={`input input-bordered mt-2 w-full ${editing ? '' : 'cursor-not-allowed'}`} disabled={!editing} />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 font-medium">Email</label>
                <input type="email" className={`input input-bordered mt-2 w-full ${editing ? '' : 'cursor-not-allowed'}`} disabled={!editing} />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 font-medium">Mobile Number</label>
                <input type="tel" className={`input input-bordered mt-2 w-full ${editing ? '' : 'cursor-not-allowed'}`} disabled={!editing} />
              </div>

              {/* Add more fields as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
