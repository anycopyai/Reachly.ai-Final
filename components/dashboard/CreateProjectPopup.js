import React, { useState } from 'react';

function CreateProjectPopup({ onClose, onProjectCreated }) {
    const [projectName, setProjectName] = useState('');
    const [error, setError] = useState('');

    const isValidProjectName = (name) => {
        // Adjust the regex according to your needs for valid project names
        return /^[a-zA-Z0-9\s-]+$/.test(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidProjectName(projectName)) {
            setError('Project name can only contain letters, numbers, spaces, and hyphens.');
            return;
        }
        onProjectCreated(projectName.trim());
        onClose();
    };

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-6 m-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create New Project</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="projectName" className="block text-lg font-medium text-gray-700 mb-2">Project Name</label>
                        <input
                            id="projectName"
                            type="text"
                            placeholder="Enter project name"
                            value={projectName}
                            onChange={(e) => {
                                setError('');
                                setProjectName(e.target.value);
                            }}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800">Cancel</button>
                        <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProjectPopup;
