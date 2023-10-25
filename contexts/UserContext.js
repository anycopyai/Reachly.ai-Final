import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true); // New state to track loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoadingAuthState(false); // Set the loading state to false once auth state is determined
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={{ user, loadingAuthState }}>{children}</UserContext.Provider>; // Pass both user and loading state
};

export const useUser = () => {
  return useContext(UserContext);
};
