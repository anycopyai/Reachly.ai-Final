import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import withAuth from '../hoc/withAuth';
import PersonalizeOutreachModal from '../components/icebreakers/PersonalizeOutreachModal';

import { Button } from '@nextui-org/react';

const Icebreaker = () => {
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        // Timer for skeleton loader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the time as needed

        return () => clearTimeout(timer);
    }, []); // Add an empty dependency array

    const Loader = () => {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="gradient-spinner"></div>
            </div>
        );
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-auto">
                <DaisyUIMenu />
                <div className="flex justify-between items-center p-10">
                    {/* Your existing content */}
                    {/* Button to open the modal */}
                    <Button color="primary" variant="shadow"  auto ghost onClick={() => setModalVisible(true)}>
                        Open Personalize Outreach
                    </Button>
                </div>
                {/* Modal Component */}
                <PersonalizeOutreachModal showModal={isModalVisible} setShowModal={setModalVisible} />
            </div>
        </div>
    );
};

export default withAuth(Icebreaker);
