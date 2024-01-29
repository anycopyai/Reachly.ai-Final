import React, { useState } from 'react';

// Adjust the path based on where your firebase.js file is located
import { useRouter } from 'next/router';  // <-- Import useRouter
import Link from 'next/link';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter(); // <-- Instantiate the router

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null); // Clear any existing errors
    setMessage(null); // Clear any existing messages

  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-12"style={{ marginTop: 0 }}>
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-700">Forgot Password</h1>

        {/* Display Error Message */}
        {error && <p className="mb-4 text-red-500">{error}</p>}
        {/* Display Success Message */}
        {message && <p className="mb-4 text-green-500">{message}</p>}

        <div className="mb-4">
          <label htmlFor="email-reset" className="block text-sm font-medium text-gray-600">Email</label>
          <input 
            type="email" 
            id="email-reset" 
            name="email-reset" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>

        <button onClick={handleResetPassword} className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mb-4 transition duration-300 ease-in-out">Send Reset Link</button>

        <div className="text-center text-sm text-gray-600">
          Remembered your password? <a href="/Login" className="text-blue-500 hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
