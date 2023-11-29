import React from 'react';
import { Button } from '@nextui-org/react';

const APISettingsTab = ({ showApiKey, handleApiKeyVisibility, copyToClipboard, copySuccess }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5">API Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">Use the API key below to integrate your applications with our services. Please keep your API key confidential.</p>
                <div className="flex items-center space-x-4">
                    <input
                        type={showApiKey ? "text" : "password"}
                        value="YourAPIKey123456789" // Replace with actual API key
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <Button onClick={handleApiKeyVisibility} className="flex-1">
                        {showApiKey ? 'Hide' : 'Show'}
                    </Button>
                    <Button onClick={copyToClipboard} className="flex-1">
                        {copySuccess ? 'Copied!' : 'Copy'}
                    </Button>
                </div>
                {copySuccess && <p className="text-green-500 text-sm mt-2">{copySuccess}</p>}
            </div>
        </div>
    );
};

export default APISettingsTab;
