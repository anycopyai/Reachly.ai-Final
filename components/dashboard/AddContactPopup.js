import React from 'react';

function AddContactPopup({ onClose }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Contact</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                            Upload a CSV file or use the button below to add contacts.
                        </p>

                        <div className="mt-5">
                            <label className="flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-100">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 4.599a1 1 0 00-1.4-.202A5.99 5.99 0 0010 3a5.99 5.99 0 00-5.48 3.397 1 1 0 00.48 1.356 1 1 0 001.4-.201A3.99 3.99 0 0110 5a3.99 3.99 0 013.6 1.552 1 1 0 001.4.202 1 1 0 00.58-.393 1 1 0 00.3-.961zM10 13a1 1 0 11-2 0 1 1 0 012 0zm-6-1a1 1 0 011-1 1 1 0 011 1v2a1 1 0 01-1 1 1 1 0 01-1-1v-2zm11 0a1 1 0 011-1 1 1 0 011 1v2a1 1 0 01-1 1 1 1 0 01-1-1v-2z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a file</span>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            id="ok-btn"
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            onClick={onClose}
                        >
                            Add Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddContactPopup;
