import React from 'react';
import Sidebar from '../components/dashboard/Sidebar'; // Importing Sidebar

function SequencePage() {
    return (
        <div className="flex h-screen bg-F3F6FC">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="border-b pb-6 mb-6">
                    <h1 className="text-2xl font-semibold">Sequences</h1>
                </div>

                {/* Create Sequence Button */}
                <div className="mb-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none shadow-lg">
                        Create Sequence
                    </button>
                </div>

                {/* List of Sequences */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Single Sequence Card */}
                    <div className="bg-white shadow-xl rounded-lg p-6">
                        <h2 className="text-xl font-medium mb-4">Sequence Name</h2>
                        <p className="text-gray-600 mb-4">Details about the sequence...</p>
                        <div className="mt-4">
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none">
                                View Sequence
                            </button>
                        </div>
                    </div>

                    {/* Add more cards as needed */}
                </div>
            </div>
        </div>
    );
}

export default SequencePage;
