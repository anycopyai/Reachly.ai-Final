import React, { useState } from 'react';
import axios from 'axios';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false); // Added state for showToast
  const [toastClass, setToastClass] = useState(''); // Added state for toastClass

  const backendAPI = 'https://api.elixcent.com/auth';
  const router = useRouter();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError("Invalid Email");
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();

      const response = await axios.post(backendAPI, {}, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 200) {
        setShowToast(true);
        setToastClass('slide-in'); // Assuming you have 'slide-in' class defined in your CSS
        router.push('/dashboard');
      } else {
        setError('Could not authenticate with the server');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      handleFirebaseError(error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        setEmailError('Invalid Email');
        break;
      case 'auth/user-disabled':
        setError('Account is disabled');
        break;
      case 'auth/user-not-found':
        setError('No account found for this email');
        break;
      case 'auth/wrong-password':
        setPasswordError('Wrong password');
        break;
      default:
        setError('Invalid Email ID or Password, Please Try Again');
    }
  };

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    setError('');
    setEmailError('');
    setPasswordError('');

    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      setShowToast(true);
      setToastClass('slide-in'); // Assuming you have 'slide-in' class defined in your CSS
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-12">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-700">Sign In</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email-signin" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              id="email-signin" 
              name="email-signin" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password-signin" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password-signin" 
              name="password-signin" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              className="mt-2 p-3 w-full rounded-md border focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
            />
            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mb-4 transition duration-300 ease-in-out">
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
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
          Don't have an account? <Link href="/SignUp"><a className="text-blue-500 hover:underline">Sign Up</a></Link>
        </div>
        {showToast && (
          <div className={`toast-container ${toastClass}`}>
            Sign-in was successful! Redirecting...
          </div>
        )}
        <div className="text-center text-sm text-gray-600">
          <Link href="/ForgotPassword"><a className="text-blue-500 hover:underline">Forgot Password?</a></Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
