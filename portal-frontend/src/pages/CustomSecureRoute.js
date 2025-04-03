import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useLocation } from 'react-router-dom';

const CustomSecureRoute = ({ children }) => {
  const { authState, oktaAuth } = useOktaAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Wait until authState is available.
  useEffect(() => {
    if (authState !== null) {
      setLoading(false);
    }
  }, [authState]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authState || !authState.isAuthenticated) {
    // Option A: Automatically trigger the sign-in redirect.
    oktaAuth.signInWithRedirect({ originalUri: location.pathname });
    return null;

    // Option B: Alternatively, you can redirect to a custom login route:
    // return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default CustomSecureRoute;