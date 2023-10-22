import React from 'react';
import { FaUserCircle, FaLock, FaCloud, FaReceipt, FaSignOutAlt } from 'react-icons/fa';

function Sidebar({ activeTab, setActiveTab }) {
    const tabs = [
        { name: 'Profile', icon: <FaUserCircle />, id: 'profile' },
        { name: 'Security', icon: <FaLock />, id: 'security' },
        { name: 'API', icon: <FaCloud />, id: 'api' },
        { name: 'Subscription', icon: <FaReceipt />, id: 'subscription' }
    ];

    const handleTabClick = (tabId) => {
        console.log("Tab clicked:", tabId);  // Debugging line
        setActiveTab(tabId);
    };

    return (
        <div className="fixed left-0 top-0 h-screen w-1/5 p-6 bg-gray-100 flex flex-col">
            <div className="mb-6">
                <span className="text-2xl font-bold">Reachly</span>
                <span className="ml-2 text-xs text-red-500 border-red-500 border px-1 rounded">Beta</span>
            </div>
            <ul className="menu bg-base-200 w-56 rounded-box flex-grow space-y-4">
                {tabs.map(tab => (
                    <li key={tab.id}>
                        <a 
                            className={activeTab === tab.id ? 'bg-reachly-blue text-white' : ''}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.icon}
                            {tab.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-auto">
                <button 
                    onClick={() => { /* Add logout functionality here */ }} 
                    className="p-4 w-full text-left flex items-center text-reachly-blue hover:bg-gray-200 transition-colors duration-200 rounded"
                >
                    <FaSignOutAlt className="mr-2" /> Logout
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
