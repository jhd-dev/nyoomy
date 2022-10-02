// @ts-check
import {
  serverSchema,
  validateEnvData,
  validateServerEnvKeys,
} from './validation.mjs';
import { env as validatedClientEnv } from './client.mjs';

const parsedServerEnv = serverSchema.safeParse(process.env);

const validatedServerEnv = validateEnvData(parsedServerEnv);

validateServerEnvKeys(validatedServerEnv);

export const env = { ...validatedServerEnv, ...validatedClientEnv };
