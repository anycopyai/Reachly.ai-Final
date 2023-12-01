import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DaisyUIMenu from '../components/dashboard/DaisyUIMenu';
import PersonalizeOutreachModal from '../components/icebreakers/PersonalizeOutreachModal';
import IndividualPersonalizationForm from '../components/icebreakers/IndividualPersonalizationForm';
import withAuth from '../hoc/withAuth';
import { Button } from '@nextui-org/react';
import CsvUploadForm from '../components/icebreakers/CsvUploadForm'; // Make sure to provide the correct path to the component
import Papa from 'papaparse';


const Icebreaker = () => {
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const [activeForm, setActiveForm] = useState(null);
    const [csvData, setCsvData] = useState([]);

   
    useEffect(() => {
        console.log("Current active form:", activeForm);
    }, [activeForm]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);



 

    return (
        <div className="flex h-screen bg-reachly-bg">
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-auto">
                <DaisyUIMenu />
                <div className="flex justify-between items-center p-10">
                    <Button color="primary" variant="shadow" auto ghost onClick={() => setModalVisible(true)}>
                        Open Personalize Outreach
                    </Button>
                </div>
                <PersonalizeOutreachModal 
                    isModalVisible={isModalVisible} 
                    setModalVisible={setModalVisible} 
                    setActiveForm={setActiveForm} 
                    activeForm={activeForm} 
                />
            </div>
        </div>
    );
};

export default Icebreaker;