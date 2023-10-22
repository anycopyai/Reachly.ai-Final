import React, { useState } from 'react';
import Sidebar from '../components/dashboard/profile/Sidebar';
import ProfileContent from '../components/dashboard/profile/ProfileContent';
import SecurityContent from '../components/dashboard/profile/SecurityContent';


function Profile() {
    const [activeTab, setActiveTab] = useState('profile'); // Default tab is "profile".

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileContent />;
            case 'security':
                return <SecurityContent />;
            default:
                return <ProfileContent />;
        }
    };

    return (
        <div className="flex">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 p-6 bg-F3F6FC">
                {renderTabContent()}
            </div>
        </div>
    );
}

export default Profile;
