import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../lib/firebase.js'; // Adjust the path to your firebase.js file
import CSSLoader from '../components/LoadingSpinner.js'; // Import your CSS loader component
import LoadingSpinner from '../components/LoadingSpinner.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dbLoading, setDbLoading] = useState(false); // State for database loading
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, loading, dbLoading, setDbLoading }}>
      {loading || dbLoading ? <LoadingSpinner /> : children}
    </UserContext.Provider>
  );
};
