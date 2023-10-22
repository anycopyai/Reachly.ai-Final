import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';

function Integration() {
    const integrations = [
        {
            name: 'HubSpot',
            icon: <img src="your_hubspot_icon_url.png" alt="HubSpot" className="w-12 h-12" />,
            description: 'Connect with your HubSpot account to manage leads more efficiently.'
        },
        {
            name: 'Pipedrive',
            icon: <img src="your_pipedrive_icon_url.png" alt="Pipedrive" className="w-12 h-12" />,
            description: 'Sync your Pipedrive sales data and automate your sales workflow.'
        },
        {
            name: 'Google Sheet',
            icon: <img src="your_google_sheet_icon_url.png" alt="Google Sheet" className="w-12 h-12" />,
            description: 'Import data from and export data to your Google Sheets.'
        },
        {
            name: 'Zapier',
            icon: <img src="your_zapier_icon_url.png" alt="Zapier" className="w-12 h-12" />,
            description: 'Automate workflows by connecting Reachly with thousands of apps on Zapier.'
        },
    ];

    return (
        <div className="flex h-screen bg-reachly-bg">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col">  
                {/* DaisyUI Top Navigation */}
                <DaisyUIMenu />
                
                {/* Main content */}
                <div className="flex-1 p-10">
                    <h1 className="text-2xl font-bold mb-5 text-reachly-blue">Integrations</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {integrations.map(integration => (
                            <div key={integration.name} className="border p-5 rounded-lg shadow-sm bg-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {integration.icon}
                                        <h2 className="ml-3 text-xl font-semibold">{integration.name}</h2>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => { /* Handle integration activation */ }}>
                                        Activate
                                    </button>
                                </div>
                                <p className="mt-4 text-gray-600">{integration.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Integration;
