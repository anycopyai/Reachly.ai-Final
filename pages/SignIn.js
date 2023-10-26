import React, { useState } from 'react';
import firebase from 'firebase/app';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Adjust the path based on where your firebase.js file is located
import { useRouter } from 'next/router';  // <-- Import useRouter
import Link from 'next/link';  // Importing Link from Next.js


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter(); // <-- Instantiate the router
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null); // Clear any existing errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or do other actions after successful sign in
      router.push('/dashboard');  // <-- Redirect after successful sign-in

    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    setError(null); // Clear any existing errors
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');  // <-- Redirect after successful sign-in with Google

      // Redirect or do other actions after successful sign in with Google
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-12"style={{ marginTop: 0 }}>
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-700">Sign In</h1>

        {/* Display Error Message */}
        {error && <p className="mb-4 text-red-500">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email-signin" className="block text-sm font-medium text-gray-600">Email</label>
          <input 
            type="email" 
            id="email-signin" 
            name="email-signin" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="password-signin" className="block text-sm font-medium text-gray-600">Password</label>
          <input 
            type="password" 
            id="password-signin" 
            name="password-signin" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <button onClick={handleSignIn} className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mb-4 transition duration-300 ease-in-out">Sign In</button>
        <div className="text-center text-sm text-gray-600 mb-2">
          Or
        </div>
        <div className="flex items-center justify-between mb-4">
          <button onClick={handleSignInWithGoogle} className="bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-md border w-full flex items-center justify-center transition duration-300 ease-in-out">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
            Sign In with Google
          </button>
        </div>
        <div className="text-center text-sm text-gray-600">
          Don't have an account? <a href="/SignUp" className="text-blue-500 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
