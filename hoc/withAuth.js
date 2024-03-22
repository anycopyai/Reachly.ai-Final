import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading, isAuthenticated } = useContext(UserContext);
    const router = useRouter();

    console.log(22222,user)
    console.log(33333,user?.metadata?.creationTime === user?.metadata?.lastSignInTime)
    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
      else if (user){
        if(user?.metadata?.creationTime === user?.metadata?.lastSignInTime)
        router.push('/onboard');
      }
    }, [user, loading, router]);

    // Removed the loading condition, directly rendering the WrappedComponent or null
    if (!user) {
      return null; // If not authenticated and not loading, render nothing
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withAuth;
