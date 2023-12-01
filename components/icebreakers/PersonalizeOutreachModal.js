import React, { useState, useEffect, useCallback } from 'react';
import { IoMailOpen, IoCloudUpload } from 'react-icons/io5';
import CsvUploadForm from '../../components/icebreakers/CsvUploadForm'; // Make sure to provide the correct path to the component
import IndividualPersonalizationForm from '../../components/icebreakers/IndividualPersonalizationForm';
import { Button as NextUIButton } from '@nextui-org/react';


const PersonalizeOutreachModal = ({ isModalVisible, setModalVisible, setActiveForm, activeForm }) => {
    
    if (!isModalVisible) return null;
    const handleFileLoaded = (data) => {
         // Handle the loaded data here
         console.log('Loaded CSV data:', data);
         // You can perform further actions with the loaded data
     };



    const handleClose = (e) => {
        if (e.target.id === "modalBackdrop") {
            setModalVisible(false);
            setActiveForm(null);
        }
    };

    

    const renderForm = () => {
        console.log("Active Form:", activeForm); // Debugging log
        switch (activeForm) {
            case 'individual':
                return <IndividualPersonalizationForm setActiveForm={setActiveForm} />;
            case 'csv':
                return <CsvUploadForm onFileLoaded={handleFileLoaded} />; // Pass the onFileLoaded prop
            default:
                return renderOptions();
        }
    };

    const renderOptions = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center p-6 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out" onClick={() => setActiveForm('individual')}>
                <IoMailOpen className="text-4xl text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Create Personalized Mail</h4>
                <p className="text-sm text-gray-600 mb-5 text-center">Craft a unique, thoughtful message for each recipient to enhance connections.</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Get Started</button>
            </div>
            <div className="flex flex-col items-center p-6 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out" onClick={() => setActiveForm('csv')}>
                <IoCloudUpload className="text-4xl text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Upload CSV for Bulk Personalization</h4>
                <p className="text-sm text-gray-600 mb-5 text-center">Upload your CSV to personalize messages in bulk, saving time without sacrificing personal touch.</p>
                <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Upload File
                </button>
            </div>
        </div>
    );
   
    return (
        <div  id="modalBackdrop" className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex justify-center items-center pt-10 lg:pt-20" onClick={handleClose}>
            <div className="bg-white rounded-2xl shadow-lg w-3/4 md:w-2/3 lg:w-1/2 2xl:w-2/5 max-h-3/4 overflow-auto mx-auto relative">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">Personalize Your Outreach</h3>
                        <button className="text-gray-600 hover:text-gray-800 focus:outline-none absolute top-3 right-3" onClick={() => { setModalVisible(false); setActiveForm(null); }}>
                            <span className="text-2xl">&times;</span>
                        </button>
                    </div>
                    {renderForm()}
                </div>
            </div>
        </div>
    );
};

export default PersonalizeOutreachModal;