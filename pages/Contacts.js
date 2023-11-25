import React, { useState, useCallback } from 'react';
import Papa from 'papaparse';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import ContactTable from '../components/Contacts/ContactTable';
import CSVUploadModal from '../components/Contacts/CSVUploadModal';
import withAuth from '../hoc/withAuth';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'; // Import the icons
import AddContactModal from '../components/Contacts/AddContactModal'; // Adjust path as necessary
import { AiOutlineFileExcel } from 'react-icons/ai';



function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [isCSVModalOpen, setIsCSVModalOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const addNewContact = (contact) => {
        setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    };

    const handleSelectRow = (id) => {
        const newSelectedRows = new Set(selectedRows);
        newSelectedRows.has(id) ? newSelectedRows.delete(id) : newSelectedRows.add(id);
        setSelectedRows(newSelectedRows);
    };

    const handleSelectAll = () => {
        if (selectedRows.size === contacts.length) {
            setSelectedRows(new Set());
        } else {
            setSelectedRows(new Set(contacts.map(contact => contact.id)));
        }
    };
    const handleCSVUploadClick = () => {
        // Logic to handle CSV upload
    };
    const handleCSVUpload = useCallback(acceptedFiles => {
        Papa.parse(acceptedFiles[0], {
            header: true,
            complete: (results) => {
                setContacts([...contacts, ...results.data]);
                setIsCSVModalOpen(false);
            },
            error: (error) => {
                console.error('Error parsing CSV:', error);
            }
        });
    }, [contacts]);

    const openCSVModal = () => {
        setIsCSVModalOpen(true);
        setDropdownOpen(false);
    };

    const closeCSVModal = () => setIsCSVModalOpen(false);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1 relative">
                <DaisyUIMenu />

                {/* Table and Add Contact Button */}
                <div className="p-4">
                <button className="btn btn-primary mb-4" onClick={openAddModal}>Add Contact</button>
                <button className="btn btn-outline btn-primary" onClick={handleCSVUploadClick}>
                    <AiOutlineFileExcel className="text-lg mr-2" />
                    Upload CSV
                </button>
{/* Add Contact Modal */}
<AddContactModal 
    isOpen={isAddModalOpen} 
    onClose={closeAddModal} 
    onAddContact={addNewContact} 
/>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* Table header */}
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={selectedRows.size === contacts.length}
                                            onChange={handleSelectAll}
                                        />
                                    </th>
                                    <th>Name</th>
                                    {/* Add more headers as needed */}
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody>
                                {contacts.map(contact => (
                                    <tr key={contact.id} className={selectedRows.has(contact.id) ? 'bg-blue-200' : ''}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={selectedRows.has(contact.id)}
                                                onChange={() => handleSelectRow(contact.id)}
                                            />
                                        </td>
                                        <td>{contact.name}</td>
                                        {/* Add more cells as needed */}
                                        <td>
                                            <button className="btn btn-ghost btn-xs">
                                                <AiOutlineEdit />
                                            </button>
                                            <button className="btn btn-ghost btn-xs">
                                                <AiOutlineDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Button to Open CSV Modal */}
                <button onClick={openCSVModal} className="contact-button">Upload CSV</button>

                {/* CSV Upload Modal */}
                <CSVUploadModal isOpen={isCSVModalOpen} onClose={closeCSVModal} onDrop={handleCSVUpload} />
            </div>
        </div>
    );
}

export default withAuth(Contacts);
