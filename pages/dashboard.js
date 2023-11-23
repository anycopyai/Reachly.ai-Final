import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import AutoLogout from '../utils/AutoLogout';
import withAuth from '../hoc/withAuth';
import DashboardStats from '../components/dashboard/DashboardStats'; // Import the DashboardStats component

function Dashboard({ user }) {
    return (
        <div className="flex min-h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DaisyUIMenu />
                <div className="flex justify-between items-center p-4">
                    <div></div> {/* Placeholder for left alignment */}
                    <button className="btn btn-primary">
                        New Project
                    </button>
                </div>
                <div className="flex flex-1 justify-center items-start p-10">
                    <div className="w-full max-w-4xl">
                        <DashboardStats /> {/* DashboardStats component */}
                    </div>
                </div>
                <AutoLogout user={user} timeoutDuration={1800000} />
            </div>
        </div>
    );
}

export default withAuth(Dashboard);
