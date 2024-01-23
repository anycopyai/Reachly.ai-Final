import React, { useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../lib/firebase.js';
import { useRouter } from 'next/router';
import { useAuth0 } from "@auth0/auth0-react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {
   user,
    isAuthenticated,
  
  } = useAuth0();
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // State to track authentication status
  const [dbLoading, setDbLoading] = useState(false); // State to track database loading status
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      // setUser(firebaseUser);
      setLoading(false); // Set loading to false once the authentication status is determined
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, loading, dbLoading, setDbLoading , isAuthenticated}}>
      {children}
    </UserContext.Provider>
  );
};
