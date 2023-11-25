import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ContactTable = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedRows, setSelectedRows] = useState(new Set());

    // Structure for dynamic columns
    const columns = [
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email' },
        // Add more columns as needed
    ];

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

    const handleAddContact = () => {
        // Dummy function to add a new contact
        const newContact = { id: contacts.length + 1, name: `Contact ${contacts.length + 1}`, email: `contact${contacts.length + 1}@example.com` };
        setContacts([...contacts, newContact]);
    };

    return (
        <>
            <div className="flex justify-end mb-4">
                <button className="btn btn-primary" onClick={handleAddContact}>Add Contact</button>
            </div>
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
                            {columns.map(column => (
                                <th key={column.id}>{column.label}</th>
                            ))}
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
                                {columns.map(column => (
                                    <td key={`${contact.id}-${column.id}`}>{contact[column.id]}</td>
                                ))}
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
        </>
    );
};

export default ContactTable;
