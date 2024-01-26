import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Spin } from 'antd';
import SplashScreen from "../components/SplashScreen";

const getRequireAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
      useAuth0();
    const [token, setToken] = useState(null);

    useEffect(() => {
      const accessToken = async () => {
        try {
          if (isAuthenticated) {
            const accessTokens = await getAccessTokenSilently();
            if (accessTokens) {
              localStorage.setItem("accessToken", accessTokens);
              setToken(accessTokens);
            }
          }
        } catch (error) {
          console.error("Error fetching access token:", error);
        }
      };
      accessToken();
    }, [isAuthenticated, getAccessTokenSilently]);

    useEffect(() => {
      const checkAccessToken = async () => {
        try {
          setTimeout(()=>{
            if (typeof window !== "undefined") {
              const storedAccessToken = localStorage.getItem("accessToken");
              setToken(storedAccessToken);
                if (storedAccessToken || token) {
                  setToken(storedAccessToken);
                } else {
                  console.log("login again");
                  // Redirect to login page if no access token is present
                  loginWithRedirect();
                }
            }
          },2000)
        
        } catch (error) {
          console.error("Error checking access token:", error);
        }
      };

      checkAccessToken();
    }, [token]);

    if (token) {
      return <WrappedComponent {...props} />;
    }

    // You may choose to render a loading indicator or a login redirect message here
    return <> 
    <div style={{textAlign:'center', alignItems:'center'}}>
     <SplashScreen size={'large'}/>
     
     </div>
     
     </>;
  };
};

export default getRequireAuth;
