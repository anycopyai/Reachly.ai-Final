import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth';
import { Button, Link } from '@nextui-org/react'; // Import Link from NextUI for styled links
import { AiOutlineFileExcel, AiOutlineDownload } from 'react-icons/ai'; // Import icon for illustration
import Papa from 'papaparse';



function Contacts() {
    const [isCSVModalOpen, setIsCSVModalOpen] = useState(false);


    const openCSVModal = () => {
        setIsCSVModalOpen(true);
    };

    const closeCSVModal = () => setIsCSVModalOpen(false);

    const handleCSVUploadClick = () => {
        // Trigger file input click programmatically
        document.getElementById('file-upload').click();
    };

    const handleCSVUpload = (e) => {
        const file = e.target.files[0];

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
    };


    return (
        <div className="flex h-screen bg-reachly-bg"> {/* Updated background color */}
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DaisyUIMenu />

                {/* Centered Content */}
                <div className="flex-grow flex flex-col items-center justify-center p-10 space-y-6">
                    {/* Illustration or Image */}
                    <div className="text-purple-500 text-9xl">
                        <AiOutlineFileExcel />
                    </div>

                    {/* NextUI Button for CSV Upload */}
                    <Button color="primary" variant="shadow" size="large" onClick={handleCSVUploadClick}>
                        Upload CSV
                    </Button>

                    {/* File input for CSV upload */}
                    <input
                        id="file-upload"
                        type="file"
                        accept=".csv"
                        className="hidden"
                        onChange={handleCSVUpload}
                    />
                     <div className="pt-4"> {/* Added padding for spacing */}
                     <img
                            src="/images/chrome.png" // Replace with your icon image path
                            alt="Chrome Web Store"
                            className="mr-2" // Margin right for spacing
                            style={{ width: '24px', height: '24px' }} // Adjust size as needed
                        />
                        <Link
                            href="https://chrome.google.com/webstore/detail/your-extension-id" // Replace with your actual extension URL
                            color="primary" // Styling to match your theme
                            iconRight={<AiOutlineDownload />} // Optional icon
                            block
                        >
                            <span className="text-sm" style={{ color: '#4F46E5' }}> {/* Small text with color matching background */}
                                Download Our Chrome Extension for Lead Generation from LinkedIn
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(Contacts);
