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
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // ... any setup you need
  }, []);

  return (
    <>
    <Auth0Provider
    domain="dev-yt7nl1nw0qctdszp.us.auth0.com"
    clientId="OtG2A4ftdRYrcOe97G15NfGvNF0ebvSW"
    authorizationParams={{
      redirect_uri: typeof window !== 'undefined' ? window.location.origin : null
    }}
  >
      <NextUIProvider>
        <UserProvider>
          <SidebarProvider> {/* Add SidebarProvider here */}
            <PrelineScript />
            <Component {...pageProps} />
          </SidebarProvider>
        </UserProvider>
      </NextUIProvider>
      </Auth0Provider>
    </>
  );
}

export default MyApp;
