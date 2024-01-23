import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading, isAuthenticated } = useContext(UserContext);
    const router = useRouter();
console.log(isAuthenticated, user)
    useEffect(() => {
      if (!loading && !user) {
        router.push('/Login');
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
