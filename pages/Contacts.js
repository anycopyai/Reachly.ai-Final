import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import ContactTable from '../components/Contacts/ContactTable'; // Import ContactTable
import withAuth from '../hoc/withAuth'; // Import the withAuth HOC

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [showAddPopup, setShowAddPopup] = useState(false);

    // ... [rest of your existing event handlers]

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                <div className="flex-1 p-10">
                    <div className="flex justify-between mb-5">
                        <h1 className="text-2xl font-bold text-gray-800">Contacts</h1>
                        <div>
                            
                            {selectedContacts.length > 0 && (
                                <button
                                    onClick={() => {} /* handleDeleteContacts logic */}
                                    className="px-6 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out ml-2"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                    <ContactTable contacts={contacts} />
                    {/* Removed Pagination, ContactViewPopup, and AddContactPopup components */}
                </div>
            </div>
        </div>
    );
}

export default withAuth(Contacts);
