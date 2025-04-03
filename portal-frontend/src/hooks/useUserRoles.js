import { useOktaAuth } from "@okta/okta-react";
import { jwtDecode } from "jwt-decode";

export const useUserRoles = () => {
  const okta = useOktaAuth();
  if (!okta || !okta.authState) return [];

  const { authState } = okta;

  if (!authState.isAuthenticated) return [];

  let roles = [];

  if (authState.idToken?.idToken) {
    const decodedId = jwtDecode(authState.idToken.idToken);
    roles = decodedId.roles || [];
  }

  if (!roles.length && authState.accessToken?.accessToken) {
    const decodedAccess = jwtDecode(authState.accessToken.accessToken);
    roles = decodedAccess.roles || [];
  }

  return roles.filter((r) => r !== "Everyone");
};