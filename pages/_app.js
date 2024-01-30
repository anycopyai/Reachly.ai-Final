import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../utils/fontawesome";
import { SidebarProvider } from "../contexts/SidebarContext"; // Import SidebarProvider
import { SnackbarProvider } from "notistack";
import PrelineScript from "../components/PrelineScript";
import { Auth0Provider } from "@auth0/auth0-react";
import Sidebar from "../components/sidebar";

function MyApp({ Component, pageProps }) {
  const isProduction = process.env.NODE_ENV === "production";

  const authConfig = {
    domain: isProduction
      ? `dev-yt7nl1nw0qctdszp.us.auth0.com`
      : `dev-yt7nl1nw0qctdszp.us.auth0.com`,
    clientId: isProduction
      ? `OtG2A4ftdRYrcOe97G15NfGvNF0ebvSW`
      : `h8ebu0vL7FUwzKbsodEOvCYwuLVdYYpo`,
    redirectUri: typeof window !== "undefined" && window.location.origin,
  };

  return (
    <>
      <SnackbarProvider
        autoHideDuration={1500}
        maxSnack={2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Auth0Provider {...authConfig}>
          <NextUIProvider>
            <SidebarProvider>
          
              <PrelineScript />
              <Component {...pageProps} />
         
            </SidebarProvider>
          </NextUIProvider>
        </Auth0Provider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
