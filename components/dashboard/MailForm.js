import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function MailForm({ onGenerate }) {
    const [website, setWebsite] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!website.trim()) {
            setError('Please enter a website.');
            return;
        }
        setError(''); // Clear any previous error messages
        onGenerate(website);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6 w-[768px]">
                <h2 className="text-3xl font-semibold text-gray-800">Personalized Mail</h2>

                <div className="flex flex-col space-y-4">
                    <label htmlFor="website" className="text-lg font-medium text-gray-600">Website URL:</label>
                    <div className="relative border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all">
                        <input 
                            type="text" 
                            id="website" 
                            value={website} 
                            onChange={(e) => setWebsite(e.target.value)} 
                            placeholder="Enter website URL..." 
                            className="block w-full pl-10 pr-4 py-2 bg-transparent focus:outline-none"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>

                <button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring focus:ring-blue-300 transition-all transform hover:scale-105"
                >
                    Generate Personalized Mail
                </button>
            </div>
        </div>
    );
}

export default MailForm;
