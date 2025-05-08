export const oktaConfig = {
  issuer: "https://dev-53619571.okta.com/oauth2/default",
  clientId: "0oao22kgjajFszUXs5d7",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email", "c-prav"],
  pkce: true,
};
