import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/UserContext'; // Adjust the import path as needed

const redirectIfAuthenticated = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useContext(UserContext);
    const [isReadyToRender, setIsReadyToRender] = useState(false);
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (user) {
          // Redirect authenticated users to Dashboard
          router.push('/dashboard');
        } else {
          // Allow rendering of the component if user is not authenticated
          setIsReadyToRender(true);
        }
      }
    }, [user, loading, router]);

    if (loading || !isReadyToRender) {
      return <div className="flex justify-center items-center h-screen">
          {/* Replace with your preferred spinner/loader component */}
          <div className="loader"></div>
        </div>; // Or your custom loading component
    }

    // Proceed with the wrapped component if the user is not authenticated
    return <WrappedComponent {...props} />;
  };
};

export default redirectIfAuthenticated;
