import React, { useEffect } from "react";
import { useOktaAuth, LoginCallback } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function PostLogin() {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      let roles = [];
      let userEmail = "";

      // Try to get roles and email from the ID Token first
      if (authState.idToken && authState.idToken.idToken) {
        const decodedIdToken = jwtDecode(authState.idToken.idToken);
        roles = decodedIdToken.roles || [];
        userEmail = decodedIdToken.email || "";
        console.log("ID Token:", authState.idToken.idToken);
        console.log("Decoded ID Token:", decodedIdToken);
      }

      // If not found in ID Token, try the Access Token
      if (
        (roles.length === 0 || !userEmail) &&
        authState.accessToken &&
        authState.accessToken.accessToken
      ) {
        const decodedAccessToken = jwtDecode(authState.accessToken.accessToken);
        roles = roles.length === 0 ? decodedAccessToken.roles || [] : roles;
        userEmail = userEmail || decodedAccessToken.email || "";
        console.log("Access Token:", authState.accessToken.accessToken);
        console.log("Decoded Access Token:", decodedAccessToken);
      }

      console.log("Roles:", roles);
      console.log("User Email:", userEmail);

      // Check if user is a client (not admin or staff)
      const isClient =
        roles.includes("client") &&
        !roles.includes("admin") &&
        !roles.includes("staff");

      if (isClient) {
        // For client users, fetch their products and redirect to products page
        const fetchProducts = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/getProductsByEmail/${userEmail}`
            );
            console.log("Products:", response.data);
            // Store products in localStorage or state management if needed
            localStorage.setItem("userProducts", JSON.stringify(response.data));
            // Redirect to the products page
            navigate("/products", { replace: true });
          } catch (error) {
            console.error("Error fetching products:", error);
            // Still redirect to products page even if fetch fails
            navigate("/products", { replace: true });
          }
        };
        fetchProducts();
      } else if (roles.includes("admin")) {
        // For admin users, redirect to client database
        navigate("/client-db", { replace: true });
      } else if (roles.includes("staff")) {
        // For staff users, redirect to staff dashboard
        navigate("/home/staff", { replace: true });
      } else {
        // Default fallback to home page
        navigate("/", { replace: true });
      }
    }
  }, [authState, navigate]);

  return <LoginCallback />;
}

export default PostLogin;
