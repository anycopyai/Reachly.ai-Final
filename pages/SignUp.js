import React from 'react';
import Header from './Header';  // Adjust the path based on your project structure
import firebase from '../lib/firebase'; // Update the path based on your project structure
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const router = useRouter(); // Initialize useRouter

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Retrieve user input
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Firebase auth instance
    const auth = getAuth(firebase);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already have an account?
                <a className="underline" href="/SignIn">Sign in</a>
              </p>
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign Up
              </button>
            </div>
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
