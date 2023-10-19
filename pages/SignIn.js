import React, { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from '../lib/firebase'; // Update the path based on your project structure
import Header from './Header'; // Replace this with the actual path to your Header component

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const googleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
            <p className="mt-4 text-gray-500">
              Sign in to continue to your account.
            </p>
          </div>

          <form onSubmit={signIn} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <a className="underline" href="/SignUp">Sign up</a>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
            <button
              onClick={googleSignIn}
              className="inline-block rounded-lg bg-white border border-gray-300 px-5 py-3 text-sm font-medium text-gray-500 mt-4"
            >
              Sign in with Google
            </button>
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
    </>
  );
};

export default SignIn;
