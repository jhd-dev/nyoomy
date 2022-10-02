// @ts-check
import { z } from 'zod';

export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

export const clientSchema = z.object({});

/**
 * @template {object} T
 * @template {object} U
 * @param {z.SafeParseReturnType<T, U>} parsedEnv
 */
export const validateEnvData = (parsedEnv) => {
  if (!parsedEnv.success) {
    console.error(
      '❌ Invalid environment variables:\n',
      ...formatErrors(parsedEnv.error.format())
    );
    throw new Error('Invalid environment variables');
  }
  return parsedEnv.data;
};

const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) =>
  Object.entries(errors)
    .map(
      ([name, value]) =>
        value && '_errors' in value && `${name}: ${value._errors.join(', ')}\n`
    )
    .filter(Boolean);

export const validateClientEnvKeys = (
  /** @type {Record<string, unknown>} */ clientEnv
) => {
  const invalidKeys = Object.keys(clientEnv).filter(
    (key) => !key.startsWith('NEXT_PUBLIC_')
  );

  for (const key of invalidKeys) {
    console.warn(
      `❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`
    );
    throw new Error('Invalid public environment variable name');
  }
};

export const validateServerEnvKeys = (
  /** @type {Record<string, unknown>} */ serverEnv
) => {
  const invalidKeys = Object.keys(serverEnv).filter((key) =>
    key.startsWith('NEXT_PUBLIC_')
  );

  for (const key of invalidKeys) {
    console.warn('❌ You are exposing a server-side env-variable:', key);
    throw new Error('You are exposing a server-side env-variable');
  }
};
