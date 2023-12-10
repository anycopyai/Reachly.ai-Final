import React, { useState } from 'react';
import Sidebar from '../components/Writer/Sidebar'; // Adjust the path to your Sidebar component
import NavigationTabs from '../components/writer/NavigationTabs';
import PersonalInfo from '../components/writer/PersonalInfo';
import SubscriptionInfo from '../components/writer/SubscriptionInfo';
import ProjectInfo from '../components/writer/ProjectInfo';
import CreateProject from '../components/writer/CreateProject';
import { FiSave, FiCopy, FiTrash2 } from 'react-icons/fi';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const handleTabClick = (tab) => setActiveTab(tab);

  // Placeholder functions for save, duplicate, delete
  const handleSave = () => {/* ... */};
  const handleDuplicate = () => {/* ... */};
  const handleDelete = () => {/* ... */};

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow py-8">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <NavigationTabs activeTab={activeTab} handleTabClick={handleTabClick} />
            <div className="bg-white shadow rounded-lg p-6">
              {activeTab === 'personal' && <PersonalInfo />}
              {activeTab === 'subscription' && <SubscriptionInfo />}
              {activeTab === 'projects' && <ProjectInfo />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
