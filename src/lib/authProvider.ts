import { StaticAuthProvider } from "@twurple/auth";
import { env } from "../env";

const clientId = env.CLIENT_ID;
const accessToken = env.ACCESS_TOKEN

// As a minor optimization, you may pass the scopes of the token, but be sure they're correct in that case!
export const authProvider = new StaticAuthProvider(clientId, accessToken, [
  "channel:read:redemptions",
  "channel:manage:redemptions",
]);
