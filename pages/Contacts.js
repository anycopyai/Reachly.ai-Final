import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import axios from 'axios';

import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import ContactTable from '../components/Contacts/ContactTable';
import CSVUploadModal from '../components/Contacts/CSVUploadModal'; // Adjust the import path as needed
import withAuth from '../hoc/withAuth';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(false);

    // CSV Upload handler
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        Papa.parse(file, {
            complete: (result) => {
                console.log('Parsed CSV Data:', result.data);
                // Send data to backend for processing
                axios.post('/api/upload-csv', { data: result.data })
                    .then(response => {
                        // Handle the response here, like updating contacts state
                    })
                    .catch(error => {
                        // Handle errors
                        console.error('Error uploading CSV data:', error);
                    });
            },
            header: true
        });
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />
                <div className="flex-1 p-10">
                    <button className="btn" onClick={() => setIsModalOpen(true)}>Add Contacts</button>

                    <CSVUploadModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onDrop={onDrop}
                    />

                    {isTableVisible && <ContactTable contacts={contacts} />}
                </div>
            </div>
        </div>
    );
}

export default withAuth(Contacts);
