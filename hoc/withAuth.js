import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useContext(UserContext);
    const router = useRouter();
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
      if (!loading && !user) {
        router.push('/Login');
      } else if (!loading) {
        // Set a minimum display time for the loading circle
        const timer = setTimeout(() => {
          setIsInitialLoad(false);
        }, 1000); // Adjust the time as needed (1000ms = 1 second)

        return () => clearTimeout(timer);
      }
    }, [user, loading, router]);

    if (loading || isInitialLoad) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      );
    }

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withAuth;
