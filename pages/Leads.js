import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import AlertBadge from '../components/dashboard/AlertBadge'; // Import the AlertBadge component

function Leads() {
    const leads = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            status: 'New',
        },
        {
            name: 'Jane Doe',
            email: 'jane@example.com',
            status: 'In Progress',
        },
        // ... more leads
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
                    <h1 className="text-2xl font-bold mb-5 text-reachly-blue">Leads</h1>
                    
                    {/* Alert Badge */}
                    <AlertBadge />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {leads.map(lead => (
                            <div key={lead.email} className="border p-5 rounded-lg shadow-sm bg-white">
                                <h2 className="text-xl font-semibold">{lead.name}</h2>
                                <p className="mt-2 text-gray-600">{lead.email}</p>
                                <p className="mt-4 text-gray-600">{lead.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leads;
