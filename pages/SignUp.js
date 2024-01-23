import React, { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

function Signup() {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect({ screen_hint: "signup" });
  }, [loginWithRedirect]);

  return <main className="w-full max-w-md mx-auto p-6"></main>;
}

export default Signup;
