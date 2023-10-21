import React, { useState } from 'react';
import ProfileSidebar from '../components/dashboard/profile/ProfileSidebar';

function Profile() {
  const [selectedTab, setSelectedTab] = useState('Profile'); // Setting default to 'Profile'.

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Profile Sidebar */}
      <ProfileSidebar setSelectedTab={setSelectedTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          {selectedTab === 'Profile' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Profile Details</h2>
                <button className="text-blue-500 focus:outline-none">
                  Edit Profile
                </button>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <img src="/path/to/your/profile/image.jpg" alt="Profile" className="rounded-full w-24 h-24 object-cover shadow" />
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Ranjit</h3>
                  <p className="text-sm text-gray-500">ranjit@email.com</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-gray-600">
                <div>
                  <h4 className="font-semibold">Full Name</h4>
                  <p>Ranjit</p>
                </div>

                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p>ranjit@email.com</p>
                </div>

                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p>+1234567890</p>
                </div>

                <div>
                  <h4 className="font-semibold">Date of Birth</h4>
                  <p>01/01/2000</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Profile;
