import { Auth0Client } from "@auth0/nextjs-auth0/server";

//export const auth0 = new Auth0Client();
export const auth0 = new Auth0Client({
    authorizationParameters: {
      scope: "openid profile email",
      audience: "https://51lyy4n8z0.execute-api.us-east-2.amazonaws.com/dev",
    },
  })