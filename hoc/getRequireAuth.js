import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const getRequireAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
    const router = useRouter();
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    useEffect(() => {
      if (!isAuthenticated && !isLoading) {
        setRedirectToLogin(true);
      }
    }, [isAuthenticated, isLoading]);

    useEffect(() => {
      if (redirectToLogin) {
        loginWithRedirect({
          returnTo: window.location.pathname,
        });
      }
    }, [redirectToLogin]);

    useEffect(() => {
      if (isAuthenticated) {
        router.replace(window.location.pathname);
      }
    }, [isAuthenticated]);

    if (isAuthenticated ) {
      return <WrappedComponent {...props} />;
    }

    return <p>Redirecting to login...</p>;
  };
};

export default getRequireAuth;