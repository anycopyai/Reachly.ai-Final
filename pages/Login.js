import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Login() {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
      // Call loginWithRedirect when the component mounts
      loginWithRedirect();
    }, [loginWithRedirect]);
    return (
        
        <main className="w-full max-w-md mx-auto p-6 ">

        </main>
    );
}

export default Login;
