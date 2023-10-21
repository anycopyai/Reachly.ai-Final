import { useState, useEffect } from 'react';

export default function MailModal({ mailContent, setMailContent, onClose }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyContent = () => {
        navigator.clipboard.writeText(mailContent);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    };

    const handleSendMail = () => {
        // TODO: Add logic to send mail here
        console.log("Mail sent!");
    };

    useEffect(() => {
        document.getElementById('my_modal_4').showModal();
    }, []);

    return (
        <dialog id="my_modal_4" className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
            <div className="modal-box w-11/12 max-w-5xl bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-xl font-bold mb-4">Edit & Send Mail</h2>
                <div className="relative border rounded-md p-4">
                    <textarea
                        value={mailContent}
                        onChange={(e) => setMailContent(e.target.value)}
                        className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm resize-none"
                        rows="10"
                    ></textarea>
                    <button 
                        onClick={handleCopyContent}
                        className="absolute top-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                    >
                        {isCopied ? "Copied!" : "Copy"}
                    </button>
                </div>
                <div className="flex mt-4 justify-end modal-action space-x-2">
                    <button 
                        onClick={handleSendMail}
                        className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    >
                        Send Mail
                    </button>
                    <button 
                        onClick={onClose}
                        className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
}
