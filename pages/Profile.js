import React, { useState } from 'react';
import ProfileSidebar from '../components/dashboard/profile/ProfileSidebar';

function Profile() {
    const [selectedTab, setSelectedTab] = useState('Profile'); // Setting default to 'Profile'.

    return (
        <div className="flex h-screen" style={{ backgroundColor: '#F3F6FC' }}>
            {/* Profile Sidebar */}
            <ProfileSidebar setSelectedTab={setSelectedTab} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    {selectedTab === 'Profile' && (
                        <div className="p-6">
                            <h2 className="text-lg font-semibold mb-4">Profile Details</h2>

                            <div className="bg-white p-5 rounded-md shadow-sm">
                                <div className="flex items-center mb-4">
                                    <img src="/path/to/your/profile/image.jpg" alt="Profile" className="rounded-full w-16 h-16 mr-4" />
                                    <div>
                                        <h3 className="text-xl font-medium">Ranjit</h3>
                                        <p className="text-gray-500">ranjit@email.com</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <h4 className="text-gray-600">Full Name:</h4>
                                    <div>
                                        <p>Ranjit</p>
                                        <a href="/edit-profile" className="text-blue-500">Edit</a>
                                    </div>

                                    <h4 className="text-gray-600">Email Address:</h4>
                                    <div>
                                        <p>ranjit@email.com</p>
                                        <a href="/edit-email" className="text-blue-500">Edit</a>
                                    </div>

                                    <h4 className="text-gray-600">Phone Number:</h4>
                                    <div>
                                        <p>+1234567890</p>
                                        <a href="/edit-phone" className="text-blue-500">Edit</a>
                                    </div>

                                    <h4 className="text-gray-600">Date of Birth:</h4>
                                    <div>
                                        <p>01/01/2000</p>
                                        <a href="/edit-dob" className="text-blue-500">Edit</a>
                                    </div>
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
