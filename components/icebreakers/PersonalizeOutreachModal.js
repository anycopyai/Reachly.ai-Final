// PersonalizeOutreachModal.js
import React from 'react';
import { IoMailOpen, IoCloudUpload, IoCloudUploadOutline } from 'react-icons/io5';

const PersonalizeOutreachModal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl w-3/4 lg:w-1/2">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Personalize Your Outreach</h3>
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={() => setShowModal(false)}>
              <span className="text-2xl">&times;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1: Personalize Mail One-by-One */}
            <div className="flex flex-col items-center p-6 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <IoMailOpen className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Create Personalized Mail</h4>
              <p className="text-sm text-gray-600 mb-5 text-center">Craft a unique, thoughtful message for each recipient to enhance connections.</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Get Started</button>
            </div>

            {/* Card 2: Upload CSV for Bulk Personalization */}
            <div className="flex flex-col items-center p-6 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <IoCloudUpload className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Upload CSV for Bulk Personalization</h4>
              <p className="text-sm text-gray-600 mb-5 text-center">Upload your CSV to personalize messages in bulk, saving time without sacrificing personal touch.</p>
              <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                <IoCloudUploadOutline className="mr-2" />
                Upload File
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizeOutreachModal;
