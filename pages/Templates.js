import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth'; // Import the withAuth HOC

function Templates() {
    // State and functions for handling template actions can be defined here

    return (
        <div className="flex h-screen bg-reachly-bg">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* DaisyUI Top Navigation */}
                <DaisyUIMenu />

                {/* Main content */}
                <div className="flex-1 p-10">
                    <h1 className="text-2xl font-bold mb-5 text-reachly-blue">Templates</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Map through templates and display them */}
                        {/* Example template card */}
                        <div className="border p-5 rounded-lg shadow-sm bg-white">
                            <h2 className="text-xl font-semibold mb-3">Template Name</h2>
                            <p className="text-gray-600 mb-4">Short description of the template...</p>
                            <div className="flex justify-between">
                                <button className="btn btn-secondary" onClick={() => { /* Handle template editing */ }}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => { /* Handle template deletion */ }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                        {/* Repeat for other templates */}
                    </div>
                    <button className="btn btn-primary mt-5" onClick={() => { /* Handle creating a new template */ }}>
                        Create New Template
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withAuth(Templates); // Wrap the component with withAuth HOC
