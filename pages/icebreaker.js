import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import ContactManagement from '../components/ContactManagement'; // Make sure the path is correct
import SkeletonLoader from '../components/SkeletonLoader';
import withAuth from '../hoc/withAuth';

import Link from 'next/link';

const Icebreaker = () => {
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        // Timer for skeleton loader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the time as needed

        return () => clearTimeout(timer);
    }, []);

    const handleUploadCsv = (file) => {
        // Handle CSV upload logic here
        console.log('Uploaded CSV file:', file);
    };

    // If the page is loading, return the SkeletonLoader
    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="flex h-screen bg-reachly-bg"> {/* Updated background color */}
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-auto">
                <DaisyUIMenu />
                <div className="p-10">
                    <ContactManagement onUpload={handleUploadCsv} />
                </div>
            </div>
        </div>
    );
};

export default withAuth(Icebreaker);
