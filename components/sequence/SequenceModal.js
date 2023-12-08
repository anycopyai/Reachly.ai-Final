import React from 'react';

// Placeholder for illustration URLs
const cardIllustrations = {
  aiAssisted: '/path-to-ai-assisted-illustration.svg', // Replace with your image path
  preFormatted: '/path-to-pre-formatted-illustration.svg', // Replace with your image path
  fromScratch: '/path-to-from-scratch-illustration.svg', // Replace with your image path
};

const SequenceModal = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden" style={{ height: 'auto' }}>
        <div className="px-6 py-4 bg-gray-50 rounded-t-xl flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Create a Sequence</h2>
          {/* Close button */}
          {/* Insert close icon SVG here */}
        </div>

        <div className="px-6 py-2">
          <p className="text-gray-600 text-center">Choose a sequence type to get started:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* AI-assisted card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out p-4 flex flex-col items-center justify-center cursor-pointer">
            <img src={cardIllustrations.aiAssisted} alt="AI-assisted" className="h-12 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">AI-assisted</h3>
            <p className="text-sm text-gray-600 text-center">Create a simple outbound sequence with one click.</p>
          </div>

          {/* Pre-formatted card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out p-4 flex flex-col items-center justify-center cursor-pointer">
            <img src={cardIllustrations.preFormatted} alt="Pre-formatted" className="h-12 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Pre-formatted</h3>
            <p className="text-sm text-gray-600 text-center">Start with one of our sequence templates.</p>
          </div>

          {/* From scratch card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out p-4 flex flex-col items-center justify-center cursor-pointer">
            <img src={cardIllustrations.fromScratch} alt="From scratch" className="h-12 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">From scratch</h3>
            <p className="text-sm text-gray-600 text-center">Create a new sequence from scratch.</p>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 rounded-b-xl flex justify-end">
          <button className="text-gray-500 hover:bg-gray-100 font-semibold py-2 px-4 rounded transition-colors duration-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SequenceModal;
