import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import ContactManagement from '../components/ContactManagement'; // Make sure the path is correct
import Link from 'next/link';
const Icebreaker = () => {
    const handleUploadCsv = (file) => {
        // Handle CSV upload logic here
        console.log('Uploaded CSV file:', file);
    };

    return (
        <div className="flex h-screen bg-reachly-bg"> {/* Updated background color */}
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-auto">
                <DaisyUIMenu />
                <div className="p-10">
                    <ContactManagement
                        onUpload={handleUploadCsv}
                    />
                </div>
            </div>
        </div>
    );
};

export default Icebreaker;
