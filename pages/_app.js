import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../utils/fontawesome';
import { UserProvider } from '../contexts/UserContext';
import { SidebarProvider } from '../contexts/SidebarContext'; // Import SidebarProvider
import SkeletonLoader from '../components/SkeletonLoader';
import PrelineScript from '../components/PrelineScript';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // ... any setup you need
  }, []);

  return (
    <>
      <NextUIProvider>
        <UserProvider>
          <SidebarProvider> {/* Add SidebarProvider here */}
            <PrelineScript />
            <Component {...pageProps} />
          </SidebarProvider>
        </UserProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
