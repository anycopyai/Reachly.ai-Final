import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Adjust the path if necessary
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'; // Ensure you have react-icons installed
import { FaMicrosoft } from 'react-icons/fa'; // For Microsoft icon

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoggingIn(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/Browse'); // Redirect to dashboard
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoggingIn(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsLoggingIn(true);
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
            router.push('/Browse');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoggingIn(false);
        }
    };

    const handleMicrosoftSignIn = async () => {
        setIsLoggingIn(true);
        try {
            await signInWithPopup(auth, new OAuthProvider('microsoft.com'));
            router.push('/Browse');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoggingIn(false);
        }
    };

    return (
        
        <main className="w-full max-w-md mx-auto p-6 ">
<div className="mt-7  border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">

                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account yet?
                            <Link href="/SignUp">
                                <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign up here</a>
                            </Link>
                        </p>
                    </div>
                    <div className="mt-5">
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <FcGoogle className="w-4 h-auto" />
                            Sign in with Google
                        </button>
                        <button
                            type="button"
                            onClick={handleMicrosoftSignIn}
                            className="w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            <FaMicrosoft className="w-4 h-auto" />
                            Sign in with Microsoft
                        </button>
                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                            Or
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                        <Link href="/ForgotPassword">
                                            <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Forgot password?</a>
                                        </Link>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                    />
                                    <label htmlFor="remember-me" className="text-sm dark:text-white ms-3">Remember me</label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    disabled={isLoggingIn}
                                >
                                    {isLoggingIn ? 'Logging in...' : 'Sign in'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
