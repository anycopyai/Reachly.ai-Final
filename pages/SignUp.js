import React from 'react';
import Header from './Header';  // Adjust the path based on your project structure
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../lib/firebase'; // Update the path based on your project structure

const SignUp = () => {
  const router = useRouter(); // Initialize useRouter

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Retrieve user input
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Firebase auth instance (use the imported 'auth' from firebase.js)
    const authInstance = getAuth(auth);

    try {
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);
      router.push('/dashboard'); // Redirect to dashboard or another route
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col">
      <Header />
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Sign Up Today!</h1>
            <p className="mt-4 text-gray-500">
              Create your account to get started. It's quick and easy!
            </p>
          </div>
          <form onSubmit={handleSignUp} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            {/* ... (rest of the form code) */}
          </form>
        </div>
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default SignUp;
