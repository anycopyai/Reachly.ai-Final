import { useState } from 'react';

const IcebreakerUI = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full transition duration-500 ease-in-out transform">
                <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Personalize Your Icebreaker</h3>
                    <div className="mt-4 space-y-4">
                        {/* Icebreaker Items */}
                        <div className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                            <div className="flex items-center space-x-4">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-200 rounded-full">Icebreaker 1</span>
                                <p className="text-gray-700 text-sm flex-1">Hi there! How can I help you today?</p>
                            </div>
                            <button className="px-3 py-1 bg-gray-200 text-black text-sm rounded-full hover:bg-gray-300">
                                Copy
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                            <div className="flex items-center space-x-4">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-200 rounded-full">Icebreaker 2</span>
                                <p className="text-gray-700 text-sm flex-1">Hi there! 👋 I hope you're having a great day.</p>
                            </div>
                            <button className="px-3 py-1 bg-gray-200 text-black text-sm rounded-full hover:bg-gray-300">
                                Copy
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <textarea id="icebreaker-input" rows="3" className="block w-full text-sm text-gray-700 bg-blue-50 border-2 border-blue-300 rounded-xl focus:ring focus:ring-blue-200 focus:border-blue-300 shadow-inner" placeholder="Craft your icebreaker..."></textarea>
                    </div>
                    <div className="mt-6">
                        <button className="inline-flex justify-center w-full rounded-xl bg-blue-600 text-white py-2 px-4 border border-transparent shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Generate Icebreaker
                        </button>
                    </div>
                </div>
            </div>
        </div>
                    {/* Close Button */}
                    <button onClick={onClose} className="text-black absolute top-4 right-4">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IcebreakerUI;
