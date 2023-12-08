import React from 'react';
import Sidebar from '../components/dashboard/Sidebar'; // Adjust the path as necessary
import { useSidebarContext } from '../contexts/SidebarContext'; // Import useSidebarContext

const EmailVerificationPage = () => {
  const { isExpanded } = useSidebarContext(); // Use the isExpanded state from the context

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className={`flex flex-col flex-1 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <header className="p-4 shadow bg-white">
          <h1 className="text-xl font-semibold">Email Verification</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <div className="bg-white rounded-lg shadow overflow-hidden max-w-4xl mx-auto my-8">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Verify Your Emails</h2>
            </div>

            {/* Content of Email Verification Page */}
            <div className="px-6 py-4">
              <p>Place your email verification functionalities here.</p>
              {/* You can add forms, tables, or any other components necessary for email verification */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
