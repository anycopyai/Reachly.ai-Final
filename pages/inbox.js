import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';

function inbox() {
    return (
        <div className="flex h-screen bg-F3F6FC">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="border-b pb-6 mb-6">
                    <h1 className="text-2xl font-semibold">Unified Inbox</h1>
                </div>

                {/* Inbox Filters and Actions */}
                <div className="mb-6 flex justify-between items-center">
                    <div>
                        <button className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-l focus:outline-none shadow-md border-r">
                            All
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 focus:outline-none shadow-md border-r">
                            Unread
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-r focus:outline-none shadow-md">
                            Starred
                        </button>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none shadow-lg">
                        Compose
                    </button>
                </div>

                {/* Inbox Messages List */}
                <div className="bg-white shadow-xl rounded-lg p-6">
                    {/* Single Message */}
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <div className="flex items-center">
                            <span className="mr-4">
                                <input type="checkbox" className="form-checkbox text-blue-600 h-5 w-5" />
                            </span>
                            <h2 className="text-lg font-medium">Sender Name</h2>
                            <p className="ml-4 text-gray-600">Message preview...</p>
                        </div>
                        <div className="text-gray-500">Date/Time</div>
                    </div>

                    {/* More Messages ... */}
                </div>
            </div>
        </div>
    );
}

export default inbox;
