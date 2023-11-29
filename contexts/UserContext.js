import React, { useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../lib/firebase.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import { useRouter } from 'next/router';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dbLoading, setDbLoading] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  // Logic to determine if the loading spinner should be shown
  const shouldShowLoading = (loading || dbLoading) && router.pathname !== '/';

  return (
    <UserContext.Provider value={{ user, loading, dbLoading, setDbLoading }}>
      {shouldShowLoading ? <LoadingSpinner /> : children}
    </UserContext.Provider>
  );
};
