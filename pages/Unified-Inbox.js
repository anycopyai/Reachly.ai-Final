import React from 'react';
import Sidebar from '../components/dashboard/Sidebar'; // Adjust the path as necessary
import { useSidebarContext } from '../contexts/SidebarContext'; // Import useSidebarContext

const UnifiedInbox = () => {
  const { isExpanded } = useSidebarContext(); // Use the isExpanded state from the context

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className={`flex flex-col flex-1 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <header className="p-4 shadow bg-white">
          <h1 className="text-xl font-semibold">Unified Inbox</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <div className="bg-white rounded-lg shadow overflow-hidden max-w-4xl mx-auto my-8">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Your Messages</h2>
            </div>

            {/* Content of Unified Inbox */}
            <div className="px-6 py-4">
              <p>Here you can view all your messages from various sources in one place.</p>
              {/* Sample list of messages */}
              <ul className="list-disc pl-6">
                <li>Message 1</li>
                <li>Message 2</li>
                <li>Message 3</li>
                {/* Add more messages or functionalities as required */}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UnifiedInbox;
