// _app.tsx or _app.js
'use client';
import {NextUIProvider} from '@nextui-org/react'

import { useEffect } from 'react';
import '../styles/globals.css'; // Your global styles
import '@fortawesome/fontawesome-free/css/all.css'; // Import the FontAwesome CSS
import '../utils/fontawesome';
import { UserProvider } from '../contexts/UserContext'; // Import the UserProvider

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('preline'); // Import Preline UI
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
