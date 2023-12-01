// Contacts.js
import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth';
import { Button } from '@nextui-org/react';
import { AiOutlineFileExcel } from 'react-icons/ai';
import Papa from 'papaparse';

function Contacts() {
    // Function to handle CSV upload...
    const handleCSVUploadClick = () => {
        document.getElementById('file-upload').click();
    };

    const handleCSVUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    console.log('Parsed CSV data:', results.data);
                    // Add your logic to process the parsed CSV data here
                },
                error: (error) => {
                    console.error('Error parsing CSV:', error);
                },
            });
        }
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

                    <input id="file-upload" type="file" accept=".csv" className="hidden" onChange={handleCSVUpload} />
                </div>
            </div>
        </div>
    );
}

export default withAuth(Contacts);
