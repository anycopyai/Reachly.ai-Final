import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { FaPlus } from 'react-icons/fa'; // importing icon from react-icons

function EmailWarmupDashboard() {
    const [warmups, setWarmups] = useState([
        // Mock data
        { id: 1, email: 'sample1@email.com', status: 'In Progress', startedAt: '10/20/2023' },
        { id: 2, email: 'sample2@email.com', status: 'Completed', startedAt: '09/15/2023' },
    ]);

    const totalEmailAccounts = 100; // Mock data
    const usedEmailAccounts = warmups.length;

    return (
        <div className="flex h-screen bg-F3F6FC">
            <Sidebar />

            <div className="flex-1 p-10">
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-700">Email Warmup</h1>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none shadow-lg flex items-center">
                        <FaPlus className="mr-2" /> New Warmup
                    </button>
                </div>

                <div className="mb-6 bg-white shadow-xl rounded-lg p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Email Accounts Usage</h2>
                        <p className="text-gray-600">{usedEmailAccounts} / {totalEmailAccounts} Used</p>
                    </div>
                    <div className="text-4xl font-bold text-gray-700">{totalEmailAccounts - usedEmailAccounts} Remaining</div>
                </div>

                <div className="bg-white shadow-xl rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700">Previously Initiated Warmups</h2>

                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4">Email</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4">Started At</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {warmups.map(warmup => (
                                <tr key={warmup.id}>
                                    <td className="py-2 px-4 border-b">{warmup.email}</td>
                                    <td className="py-2 px-4 border-b">{warmup.status}</td>
                                    <td className="py-2 px-4 border-b">{warmup.startedAt}</td>
                                    <td className="py-2 px-4 border-b">
                                        <a href={`/warmup/${warmup.id}`} className="text-blue-600 hover:underline">Details</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmailWarmupDashboard;
