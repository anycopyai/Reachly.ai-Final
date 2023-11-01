import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../lib/firebase'; 
import { doc, setDoc } from "firebase/firestore"; 
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';  // Use ES6 import for Axios

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const router = useRouter();

  const resetErrors = () => {
    setError('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    resetErrors();

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });

      // Initialize user with 15 free credits via Flask API
      await axios.post('http://your_flask_api_url/initialize_user', { uid: user.uid });

      // Call your Next.js API route to forward data to your Flask backend
      const response = await axios.post('/api/handlesignup', {
        email,
        password,
        name
      });

      if (response.data.success) {
        router.push('/dashboard');
        setIsSuccessful(true);
        setShowToast(true);
      } else {
        setError("Failed to authenticate with the backend service");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message); // More generalized error message
    }
  };

  const handleSignUpWithGoogle = async () => {
    setIsLoading(true);
    resetErrors();
    try {
      const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = userCredential.user;

      // Initialize user with 15 free credits via Flask API
      await axios.post('http://your_flask_api_url/initialize_user', { uid: user.uid });

      // Similarly, you can also forward Google auth info to your Flask backend if needed

      router.push('/dashboard');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };



return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-12">
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-semibold mb-6 text-gray-700">Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
       


        {error && (
          <div className="text-red-500 mt-4 mb-4">
            {error}
          </div>
        )}
        <button 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mb-4 transition duration-300 ease-in-out"
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <button 
        onClick={handleSignUpWithGoogle} 
        className="bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-md border w-full flex items-center justify-center transition duration-300 ease-in-out"
      >
        Sign Up with Google
      </button>
    </div>
    {showToast && (
      <div className="fixed bottom-0 right-0 m-6 bg-green-500 text-white py-2 px-4 rounded">
        Signup was successful! Redirecting...
      </div>
    )}
  </div>
);
};
export default SignUp;
