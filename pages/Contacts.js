import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import ContactRow from '../components/dashboard/ContactRow'; // Corrected here
import ContactViewPopup from '../components/dashboard/ContactViewPopup';
import Pagination from '../components/dashboard/Pagination';
import AddContactPopup from '../components/dashboard/AddContactPopup';
import withAuth from '../hoc/withAuth'; // Import the withAuth HOC


function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [viewingContact, setViewingContact] = useState(null);
    const [showAddPopup, setShowAddPopup] = useState(false);

    const handleViewContact = (contact) => {
        setViewingContact(contact);
        setShowPopup(true);
    };

    const handleSelectContact = (contact) => {
        setSelectedContacts([...selectedContacts, contact]);
    };

    const handleDeselectContact = (contactId) => {
        setSelectedContacts(selectedContacts.filter(c => c.id !== contactId));
    };

    const handleDeleteContacts = () => {
        // Logic to delete the selected contacts
    };

    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setShowAddPopup(false);
    };

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                <div className="flex-1 p-10">
                    <div className="flex justify-between mb-5">
                        <h1 className="text-2xl font-bold text-reachly-blue">Contacts</h1>
                        <div>
                            <button 
                                onClick={() => setShowAddPopup(true)}
                                className="btn btn-success mr-2"
                            >
                                Add Contact
                            </button>
                            {selectedContacts.length > 0 && (
                                <button
                                    onClick={handleDeleteContacts}
                                    className="btn btn-error"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                  <div className="divide-y divide-gray-200">
                      {contacts.map(contact => (
                          <ContactRow 
                              key={contact.id} 
                              contact={contact} 
                              onView={handleViewContact}
                              onSelect={handleSelectContact}
                              onDeselect={handleDeselectContact}
                          />
                      ))}
                  </div>
                  <Pagination />
                </div>
                {showPopup && 
                    <ContactViewPopup 
                        contact={viewingContact} 
                        onClose={() => setShowPopup(false)}
                    />}
                {showAddPopup && 
                    <AddContactPopup 
                        onAdd={handleAddContact} 
                        onClose={() => setShowAddPopup(false)}
                    />}
            </div>
        </div>
    );
}

export default withAuth(Contacts); // Wrap the component with withAuth HOC
