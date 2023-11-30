import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth';
import { Button, Link, Modal } from '@nextui-org/react';
import { AiOutlineFileExcel, AiOutlineDownload, AiOutlineUserAdd } from 'react-icons/ai';
import Papa from 'papaparse';

function Contacts() {
    const [isCSVModalOpen, setIsCSVModalOpen] = useState(false);
    const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false);
   
    const handleCSVUploadClick = () => {
        // Programmatically clicks the hidden file input element
        document.getElementById('file-upload').click();
    };

    const handleCSVUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Use PapaParse or another library to parse the CSV file
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    // Handle the parsed data here
                    console.log('Parsed CSV data:', results.data);
                    // You can process the data or set it in your state as needed
                },
                error: (error) => {
                    console.error('Error parsing CSV:', error);
                },
            });
        }
    };


    // Rest of your existing functions...

    const openAddContactModal = () => {
        setIsAddContactModalOpen(true);
    };

    const closeAddContactModal = () => {
        setIsAddContactModalOpen(false);
    };

    // Function to handle adding a new contact...
    const handleAddContact = (contactData) => {
        // Logic to add the new contact
        console.log('New Contact Data:', contactData);
    };

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />

                <div className="flex-grow flex flex-col items-center justify-center p-10 space-y-6">
                    <div className="text-purple-500 text-9xl">
                        <AiOutlineFileExcel />
                    </div>

                    <Button color="primary" variant="shadow" size="large" onClick={handleCSVUploadClick}>
                        Upload CSV
                    </Button>

                    <Button color="secondary" variant="flat" size="large" onClick={openAddContactModal}>
                        <AiOutlineUserAdd className="mr-2" /> Add Contact Manually
                    </Button>

                    <input id="file-upload" type="file" accept=".csv" className="hidden" onChange={handleCSVUpload} />

                    {/* Rest of your component */}

                </div>
            </div>

            {/* Modal for Adding Contact Manually */}
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={isAddContactModalOpen}
                onClose={closeAddContactModal}
            >
                <Modal.Header>
                    <h3 className="text-lg font-bold">Add New Contact</h3>
                </Modal.Header>
                <Modal.Body>
                    {/* Form for adding new contact */}
                    {/* Include input fields for name, email, phone, etc. */}
                    {/* On submission, call handleAddContact */}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default withAuth(Contacts);
