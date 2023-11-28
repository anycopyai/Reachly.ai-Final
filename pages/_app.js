import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../utils/fontawesome';
import { UserProvider } from '../contexts/UserContext';
import SkeletonLoader from '../components/SkeletonLoader';
import PrelineScript from '../components/PrelineScript';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);

  return (
    <>
     

      <NextUIProvider>
        <UserProvider>
          <PrelineScript />
          <Component {...pageProps} />
        </UserProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
