// withAuth.js
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext'; // Adjust the import path as needed

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/Login');
      }
    }, [user, loading, router]);

    if (loading) {
      return   <div className="flex justify-center items-center h-screen">
          {/* Replace with your preferred spinner/loader component */}
          <div className="loader"></div>
        </div>; // Or your custom loading component
    }

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withAuth;
