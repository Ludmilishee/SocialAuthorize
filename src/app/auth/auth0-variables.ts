interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ABNuDjeTPNHuBQ2-enTP1R2Yn0-i1NJ8',
  domain: 'karoon.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
