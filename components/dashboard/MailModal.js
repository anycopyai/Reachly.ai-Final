import { useState } from 'react';

export default function MailModal({ mailContent, setMailContent, onClose }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyContent = () => {
    navigator.clipboard.writeText(mailContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 1 seconds
  };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div onClick={e => e.stopPropagation()} className="bg-white p-8 rounded-lg shadow-xl max-w-5xl w-full">
        <div className="text-xl font-bold mb-4">Generated Mail</div>
        <div className="relative border rounded-md p-4">
          {mailContent}
          <button 
            onClick={handleCopyContent}
            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex mt-4 justify-end">
          <button className="mx-2 py-2 px-4 bg-blue-600 text-white rounded-md" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
