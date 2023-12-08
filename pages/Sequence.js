import React from 'react';
import Sidebar from '../components/dashboard/Sidebar'; // Adjust the path as necessary
import { useSidebarContext } from '../contexts/SidebarContext'; // Import useSidebarContext from its file

function SequencePage() {
    // State from the Sidebar to determine its current width
    const { isExpanded } = useSidebarContext(); // Ensure this is correctly imported

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className={`flex flex-col flex-1 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
                <header className="p-4 shadow bg-white">
                    <h1 className="text-xl font-semibold">Sequence Management</h1>
                </header>

                <main className="flex-1 overflow-y-auto p-4">
                    <p>Welcome to the Sequence page. Here you can manage your sequences.</p>
                    {/* The rest of your sequence page content */}
                </main>
            </div>
        </div>
    );
}

export default SequencePage;
