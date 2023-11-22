import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext'; // Adjust the import path as needed
import { CircularProgress } from "@nextui-org/react"; // Importing CircularProgress

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
      return (
        <div className="flex justify-center items-center h-screen">
          {/* Using NextUI CircularProgress loader */}
          <CircularProgress size="lg" aria-label="Loading..."/>
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
