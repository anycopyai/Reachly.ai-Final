    import React, { useEffect, useState } from 'react';
    import { useRouter } from 'next/router';
    import { auth } from '../lib/firebase'; // Import from your lib directory

    const withAuth = (WrappedComponent) => {
      return function WithAuthComponent(props) {
        const router = useRouter();
        const [isLoading, setLoading] = useState(true);

        useEffect(() => {
          // Set an auth state observer and get user data
          const unregisterAuthObserver = auth.onAuthStateChanged(user => {
            if (!user) {
              // Redirect to SignIn page if user is not authenticated
              router.push('/SignIn');
            } else {
              setLoading(false);
            }
          });

          // Cleanup observer on unmount
          return () => unregisterAuthObserver();
        }, [router]);

        // Only render the wrapped component if user is authenticated
        return (!isLoading && <WrappedComponent {...props} />);
      };
    }

    export default withAuth;
