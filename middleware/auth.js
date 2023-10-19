// auth.js

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase authentication functions

// Initialize Firebase Auth
const auth = getAuth();

// Custom hook to check if the user is authenticated
function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuth;
