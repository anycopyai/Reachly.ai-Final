import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import Image from 'next/image';


function Integration() {
    const [webhookUrl, setWebhookUrl] = useState('');



    const integrations = [
        {
            name: 'Google Sheet',
            icon: <Image src="/images/google-sheets.png" alt="Google Sheet" width={48} height={48} className="w-12 h-12" />,
            description: 'Import data from and export data to your Google Sheets.'
        },
        {
            name: 'Zapier',
            icon: <Image src="/images/zapier.png" alt="Zapier" width={48} height={48} className="w-12 h-12" />,
            description: 'Automate workflows by connecting with thousands of apps on Zapier.'
        },
        {
            name: 'Webhook',
            icon: <Image src="/images/webhook.png" alt="Webhook" width={48} height={48} className="w-12 h-12" />, // Replace with actual Webhook icon
            description: 'Integrate with custom Webhook for real-time data exchange.',
            isWebhook: true
        },

    ];

    return (
        <div className="flex h-screen" style={{ background: "#e0eaff" }}>
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* DaisyUI Top Navigation */}
                <DaisyUIMenu />

                <div className="w-11/12 max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden lg:max-w-6xl lg:w-full">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">Integrate with Your Favorite Tools</h3>
                        <div className="mt-4 space-y-4">
                            {integrations.map(integration => (
                                <div key={integration.name} className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                                    <div className="flex items-center space-x-4">
                                        {integration.icon}
                                        <h2 className="text-sm font-semibold text-gray-900">{integration.name}</h2>
                                    </div>
                                    {integration.isWebhook && (
                                        <input
                                            type="text"
                                            value={webhookUrl}
                                            onChange={(e) => setWebhookUrl(e.target.value)}
                                            placeholder="Enter your webhook URL here"
                                            className="px-3 py-2 mr-4 text-gray-700 bg-blue-50 border-2 border-blue-300 rounded-xl focus:ring focus:ring-blue-200 focus:border-blue-300 shadow-inner"
                                        />
                                    )}
                                    <Button size="small" color="primary" variant="flat" auto>
                                        Activate
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(Integration);