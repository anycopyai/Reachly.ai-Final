import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../utils/fontawesome";
import { SidebarProvider } from "../contexts/SidebarContext";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "../contexts/UserContext";
import PrelineScript from "../components/PrelineScript";
import { useEffect } from "react";
import Head from 'next/head'; // Import Head from next/head

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Google Tag Manager
    const script = document.createElement("script");
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+'GTM-N3M9SB3P'+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N3M9SB3P');`;
    document.body.appendChild(script);

    // Google Tag Manager (noscript)
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N3M9SB3P" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }, []);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <SnackbarProvider
        autoHideDuration={1500}
        maxSnack={2}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <UserProvider>
          <SidebarProvider>
            <PrelineScript />
            <Component {...pageProps} />
          </SidebarProvider>
        </UserProvider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
