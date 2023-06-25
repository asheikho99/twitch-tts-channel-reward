import { StaticAuthProvider } from "@twurple/auth";
import { CLIENT_ID, ACCESS_TOKEN } from "../env";

// As a minor optimization, you may pass the scopes of the token, but be sure they're correct in that case!
export const authProvider = new StaticAuthProvider(CLIENT_ID, ACCESS_TOKEN, [
  "channel:read:redemptions",
  "channel:manage:redemptions",
]);
