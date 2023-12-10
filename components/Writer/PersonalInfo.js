import React, { useState } from 'react';

const personalinfo = () => {
  const [email, setEmail] = useState('info@rdmi.in'); // should be fetched from user data
  const [password, setPassword] = useState('********'); // For display only, actual password should never be stored like this

  // Placeholder functions for updating email and password
  const handleUpdateEmail = () => {/* ... */};
  const handleUpdatePassword = () => {/* ... */};

  return (
    <div className="space-y-6 bg-white shadow rounded-lg p-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input 
                id="email" 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                disabled
                className="bg-gray-100 block w-full pl-3 sm:text-sm border-gray-300 rounded-md" 
              />
            </div>
          </div>
          <button 
            onClick={handleUpdateEmail} 
            className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update email
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                disabled
                className="bg-gray-100 block w-full pl-3 sm:text-sm border-gray-300 rounded-md" 
              />
            </div>
          </div>
          <button 
            onClick={handleUpdatePassword} 
            className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update password
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <p className="text-sm font-medium text-gray-700">
          Questions? Email 
          <a href="mailto:smartcopy-help@unbounce.com" className="text-blue-600 hover:text-blue-700 pl-1">
            smartcopy-help@unbounce.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default personalinfo;
