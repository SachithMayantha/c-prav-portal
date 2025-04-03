import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

function HomePage() {
  const { authState, oktaAuth } = useOktaAuth();

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const logout = async () => {
    await oktaAuth.signOut();
  };

  if (authState && !authState.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>You are logged in.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;