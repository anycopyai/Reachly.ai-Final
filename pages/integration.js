import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth'; // Import the withAuth HOC
import Link from 'next/link';
import { Button } from '@nextui-org/react'; // Import NextUI Button component



function Integration() {
    const integrations = [
        {
            name: 'HubSpot',
            icon: <img src="/images/hubspot.png" alt="HubSpot" className="w-12 h-12" />,
            description: 'Connect with your HubSpot account to manage leads more efficiently.'
        },
        {
            name: 'Outreach',
            icon: <img src="/images/outreach.png" alt="Outreach" className="w-12 h-12" />,
            description: 'Sync your Outreach sales data and automate your sales workflow.'
        },
        {
            name: 'Google Sheet',
            icon: <img src="/images/google-sheets.png" alt="Google Sheet" className="w-12 h-12" />,
            description: 'Import data from and export data to your Google Sheets.'
        },
        {
            name: 'Zapier',
            icon: <img src="/images/zapier.png" alt="Zapier" className="w-12 h-12" />,
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
                    <h1 className="text-3xl font-bold mb-8 text-reachly-blue">Integrate with Your Favorite Tools</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
                        {integrations.map(integration => (
                            <div key={integration.name} className="border p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {integration.icon}
                                        <h2 className="ml-3 text-xl font-semibold">{integration.name}</h2>
                                    </div>
                                    <Button color="primary" variant="flat" auto>
                                        Activate
                                    </Button>
                                </div>
                                <p className="mt-3 text-gray-600">{integration.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(Integration);