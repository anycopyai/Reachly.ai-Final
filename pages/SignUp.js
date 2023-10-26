import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase'; 
import { useRouter } from 'next/router';
import Link from 'next/link';  // Importing Link from Next.js


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  
  const handleSignUp = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        console.error("Passwords don't match");
        // Inform the user that passwords don't match
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Save the username to the user's Firestore document or the Realtime Database
        // Redirect to the dashboard after successful signup
        router.push('/dashboard');
      } catch (error) {
        console.error('Error signing up:', error.message);
        // Display error message to the user
      }
  };


  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      setError(''); // Clear any previous error messages
    } catch (error) {
      setError('Error signing up with Google: ' + error.message);
    }
  };

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-12">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-6 text-gray-700">Sign Up</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirm-password" 
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          {/* Display error message here */}
          {error && (
            <div className="text-red-500 mt-4 mb-4">
              {error}
            </div>
          )}
          <button 
              onClick={handleSignUp} 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mb-4 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-between mb-4">
            <button 
                onClick={handleSignUpWithGoogle} 
                className="bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-md border w-full flex items-center justify-center transition duration-300 ease-in-out"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
              Sign Up with Google
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            Already have an account? <a href="SignIn" className="text-blue-500 hover:underline">Sign In</a>
            
          </div>
          
        </div>
        
      </div>
    
  );
}

export default SignUp;
