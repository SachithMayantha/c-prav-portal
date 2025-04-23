import React, { useEffect } from "react";
import { useOktaAuth, LoginCallback } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function PostLogin() {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      let roles = [];

      // Try to get roles from the ID Token first
      if (authState.idToken && authState.idToken.idToken) {
        const decodedIdToken = jwtDecode(authState.idToken.idToken);
        roles = decodedIdToken.roles || [];
        console.log("ID Token:", authState.idToken.idToken);
        console.log("Decoded ID Token:", decodedIdToken);
      }

      // If not found in ID Token, try the Access Token
      if (
        roles.length === 0 &&
        authState.accessToken &&
        authState.accessToken.accessToken
      ) {
        const decodedAccessToken = jwtDecode(authState.accessToken.accessToken);
        roles = decodedAccessToken.roles || [];
        console.log("Access Token:", authState.accessToken.accessToken);
        console.log("Decoded Access Token:", decodedAccessToken);
      }

      // Filter out the default "Everyone" role
      const filteredRoles = roles.filter((role) => role !== "Everyone");
      console.log("Roles:", roles);
      console.log("Filtered roles:", filteredRoles);

      // Redirect based on role
      if (filteredRoles.includes("staff")) {
        navigate("/home/staff");
      } else if (filteredRoles.includes("admin")) {
        navigate("/home/admin");
      } else if (filteredRoles.includes("client")) {
        navigate("/home/client");
      } else {
        navigate("/");
      }
    }
  }, [authState, navigate]);

  return <LoginCallback />;
}

export default PostLogin;
