import { config } from "dotenv";
import { parseEnv } from "znv";
import { z } from "zod";

config();

export const { CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN } = parseEnv(process.env, {
  CLIENT_ID: z.string().min(1),
  CLIENT_SECRET: z.string().min(1),
  ACCESS_TOKEN: z.string().min(1),
});
