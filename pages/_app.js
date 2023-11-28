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
      <Head>
        {/* Existing Google Fonts links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />

        {/* Favicon link */}
        
      </Head>

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
