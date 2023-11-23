'use client';
import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../utils/fontawesome';
import { UserProvider } from '../contexts/UserContext'; // Import the UserProvider

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);

  return (
    <NextUIProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NextUIProvider>
  );
}

export default MyApp;
