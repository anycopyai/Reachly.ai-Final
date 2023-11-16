import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Adjust the path
import { FcGoogle } from 'react-icons/fc'; // Ensure you have react-icons installed
import Link from 'next/link';

// Assume Google login function is defined elsewhere
// import { signInWithGoogle } from '../path-to-auth-functions';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to dashboard or home page after successful login
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Login Form - Stacked on top on small screens */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-4 py-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                <p className="mb-8 text-gray-600">Enter your details below to continue</p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-12 px-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <a href="/reset-password" className="text-sm text-indigo-600 hover:text-indigo-800 float-right mt-2">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out mb-4">Login</button>
                    {/* Login with Google */}
                    <button 
                        type="button" 
                        className="w-full px-4 py-2 border rounded-md hover:bg-gray-50 transition duration-300 ease-in-out mb-4 flex items-center justify-center"
                    >
                        <FcGoogle className="text-xl mr-2" /> Login with Google
                    </button>
                    {/* Create a New Account */}
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account? 
                        <a href="/signup" className="text-indigo-600 hover:text-indigo-800"> Create a New Account</a>
                    </p>
                </form>
            </div>

            {/* Full Height Image - Displayed below on small screens */}
            <div className="w-full h-64 md:h-auto md:w-1/2 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://static.getprospect.com/img/help-center/outreach.jpg")' }}>
                {/* Optional: Overlay or additional content here */}
            </div>
        </div>
    );
}
