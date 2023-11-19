import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth'; // Import the withAuth HOC

function EmailWarmup() {
    // Define any state or functions needed for the Email Warmup feature

    return (
        <div className="flex h-screen bg-reachly-bg">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* DaisyUI Top Navigation */}
                <DaisyUIMenu />

                {/* Main content */}
                <div className="flex-1 p-10">
                    <h1 className="text-2xl font-bold mb-5 text-reachly-blue">Email Warmup</h1>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <p className="mb-4">Improve your email deliverability by gradually increasing the volume of emails sent from your new email account.</p>
                        <button className="btn btn-primary" onClick={() => { /* Handle Email Warmup activation or configuration */ }}>
                            Activate/Configure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(EmailWarmup); // Wrap the component with withAuth HOC
