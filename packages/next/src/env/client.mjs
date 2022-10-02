// @ts-check
import { z } from 'zod';
import {
  clientSchema,
  validateClientEnvKeys,
  validateEnvData,
} from './validation.mjs';

/**
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
const clientEnv = {};

const parsedEnv = clientSchema.safeParse(clientEnv);

const validatedEnvData = validateEnvData(parsedEnv);

validateClientEnvKeys(validatedEnvData);

export const env = validatedEnvData;
