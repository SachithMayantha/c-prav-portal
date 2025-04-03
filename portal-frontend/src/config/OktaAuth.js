// src/config/OktaAuth.js
import { OktaAuth } from '@okta/okta-auth-js';
import { oktaConfig } from './OktaConfig';

export const oktaAuth = new OktaAuth({
  issuer: oktaConfig.issuer,
  clientId: oktaConfig.clientId,
  redirectUri: oktaConfig.redirectUri,
  scopes: oktaConfig.scopes,
  pkce: oktaConfig.pkce,
  tokenManager: {
    storage: 'localStorage', // Optional: use 'sessionStorage' if preferred
    autoRenew: true,
    secure: false,
  },
});
