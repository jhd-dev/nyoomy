import dotenv from "dotenv";
import { DEFAULT_PORT } from "./Constants";

dotenv.config();

export const NODE_ENV = getEnvVar("NODE_ENV");
export const PORT = parseInt(getEnvVar("PORT", String(DEFAULT_PORT)));
export const DB_NAME = getEnvVar("DB_NAME");
export const DB_USERNAME = getEnvVar("DB_USERNAME");
export const DB_PASSWORD = getEnvVar("DB_PASSWORD");

/**
 * @param prop The name of the environmental variable to retrieve
 * @param defaultVal (optional) The value to retrieve if the specified property is undefined
 * @param env (optional) The ProcessEnv object to read from (defaults to process.env)
 * @returns the value of the specified environmental variable, or otherwise a specified default value
 */
export function getEnvVar(prop: string, defaultVal?: string, env: object = process.env): string {
  if (!env) throw new Error("ProcessEnv not found.");
  const input = process.env.hasOwnProperty(prop) ? process.env[prop] : undefined;
  if (input !== undefined) return input.trim();
  if (defaultVal !== undefined) return defaultVal;
  throw new Error(`Environmental var ${prop} is missing.`);
}
