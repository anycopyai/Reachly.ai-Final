import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import PersonalizeOutreachModal from '../components/icebreakers/PersonalizeOutreachModal';
import withAuth from '../hoc/withAuth';
import CsvUploadForm from '../components/icebreakers/CsvUploadForm'; // Assuming correct path
import Papa from 'papaparse';

const Icebreaker = () => {
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const [activeForm, setActiveForm] = useState(null);
    const [csvData, setCsvData] = useState([]);
    const [sidebarWidth, setSidebarWidth] = useState('250px'); // Example width for the sidebar

    useEffect(() => {
        console.log("Current active form:", activeForm);
    }, [activeForm]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const toggleSidebar = () => {
        setSidebarWidth(sidebarWidth === '250px' ? '80px' : '250px');
    };

    return (
        <div className="flex h-screen bg-reachly-bg">
            <div style={{ width: sidebarWidth }}>
                <Sidebar />
            </div>
            <div className="flex flex-col flex-grow overflow-auto">
                <div className="flex justify-between items-center p-10">
                    <button 
                        className="btn btn-primary" 
                        onClick={() => setModalVisible(true)}>
                        Open Personalize Outreach
                    </button>
                    {/* Optional: Button to toggle sidebar */}
                    <button 
                        className="btn btn-secondary" 
                        onClick={toggleSidebar}>
                        Toggle Sidebar
                    </button>
                </div>
                <PersonalizeOutreachModal 
                    isModalVisible={isModalVisible} 
                    setModalVisible={setModalVisible} 
                    setActiveForm={setActiveForm} 
                    activeForm={activeForm} 
                />
                {/* Additional content can be added here */}
            </div>
        </div>
    );
};

export default Icebreaker;
