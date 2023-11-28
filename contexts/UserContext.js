import React, { useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../lib/firebase.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import { useRouter } from 'next/router';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially true for the first load
  const [dbLoading, setDbLoading] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // Set to false once auth state is confirmed
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const handleStart = () => {
      // Hide spinner during client-side navigation
      setLoading(false);
    };

    const handleComplete = () => {
      // Reset loading state when navigation is complete
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  // Logic to determine if the loading spinner should be shown
  const shouldShowLoading = (loading || dbLoading) && router.pathname !== '/';

  return (
    <UserContext.Provider value={{ user, loading, dbLoading, setDbLoading }}>
      {shouldShowLoading ? <LoadingSpinner /> : children}
    </UserContext.Provider>
  );
};
