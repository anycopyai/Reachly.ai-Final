import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import Head from 'next/head'; // Import Head
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../utils/fontawesome';
import { UserProvider } from '../contexts/UserContext'; 
import SkeletonLoader from '../components/SkeletonLoader';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);

  return (
    <>
      <Head>
        {/* Add Google Fonts links here */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      
      <NextUIProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
