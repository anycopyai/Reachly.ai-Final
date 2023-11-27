import { useState } from 'react';
import { useRouter } from 'next/router';

const ProfileSettings = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`/settings/${tab}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border-b border-gray-300">
        <nav className="flex flex-wrap -mb-px text-sm">
          <button onClick={() => handleTabClick('profile')} 
            className={`mr-5 pb-3 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
            Profile
          </button>
          <button onClick={() => handleTabClick('integration')} 
            className={`mr-5 pb-3 ${activeTab === 'integration' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
            Integration
          </button>
          <button onClick={() => handleTabClick('subscription')} 
            className={`mr-5 pb-3 ${activeTab === 'subscription' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
            Subscription
          </button>
          <button onClick={() => handleTabClick('api')} 
            className={`mr-5 pb-3 ${activeTab === 'api' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
            API
          </button>
          <button onClick={() => handleTabClick('security')} 
            className={`mr-5 pb-3 ${activeTab === 'security' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
            Security
          </button>
        </nav>
      </div>
      
      <div className="mt-4">
        {activeTab === 'profile' && <ProfileComponent />}
        {activeTab === 'integration' && <IntegrationComponent />}
        {activeTab === 'subscription' && <SubscriptionComponent />}
        {activeTab === 'api' && <APIComponent />}
        {activeTab === 'security' && <SecurityComponent />}
      </div>
    </div>
  );
};

// Placeholder components for each tab's content
const ProfileComponent = () => <div>Profile Content</div>;
const IntegrationComponent = () => <div>Integration Content</div>;
const SubscriptionComponent = () => <div>Subscription Content</div>;
const APIComponent = () => <div>API Content</div>;
const SecurityComponent = () => <div>Security Content</div>;

export default ProfileSettings;
