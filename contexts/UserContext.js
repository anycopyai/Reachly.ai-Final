import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../lib/firebase.js'; // Adjust the path to your firebase.js file

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially true, indicating loading
  const auth = getAuth(app);

  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts or auth changes
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // Set loading to false once we get the user data
    }, (error) => {
      console.error('Auth state changed error:', error);
      setLoading(false); // Also set loading to false in case of an error
    });

    return () => {
      unsubscribe();
      setLoading(false); // Ensure loading is set to false when the component unmounts
    };
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
