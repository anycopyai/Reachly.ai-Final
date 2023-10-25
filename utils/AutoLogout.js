// components/AutoLogout.js

import React, { useEffect } from 'react';
import { auth } from '../lib/firebase'; // Adjust path according to your directory structure

const AutoLogout = ({ user, timeoutDuration }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
        if (user) {
            auth.signOut();
        }
    }, timeoutDuration);

    return () => clearTimeout(timeout); // Clear the timeout if the component is unmounted
  }, [user, timeoutDuration]);

  return null; // This component does not render any UI
};

export default AutoLogout;
