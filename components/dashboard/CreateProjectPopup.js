// CreateProjectPopup.js

import React, { useState } from 'react';

function CreateProjectPopup({ onClose, onProjectCreated }) {
    const [projectName, setProjectName] = useState('');

    const handleSubmit = () => {
        console.log('Creating a new project:', projectName);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white p-8 rounded-lg w-1/3 max-h-2/3 overflow-y-auto shadow-xl transition-transform transform duration-300">
                <h2 className="text-xl mb-5 font-semibold">Create New Project</h2>
                <div className="mb-5">
                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-600 mb-2">Project Name</label>
                    <input
                        id="projectName"
                        type="text"
                        placeholder="Enter Project Name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="btn mr-3">Cancel</button>
                    <button onClick={handleSubmit} className="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectPopup;
