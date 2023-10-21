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
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Generate Personalized Mail
                </h1>
                <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <div>
                        <label htmlFor="website" className="sr-only">Website URL</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="website" 
                                value={website} 
                                onChange={(e) => setWebsite(e.target.value)} 
                                placeholder="Enter website URL..." 
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
                            </span>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button 
                        type="submit" 
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Generate
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MailForm;
