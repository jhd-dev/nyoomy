import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { Session } from 'next-auth';
import { getServerAuthSession } from '../common/get-server-auth-session';
import { prisma } from '../db/client';

type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 * - testing, so we don't have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (options: CreateContextOptions) => ({
  session: options.session,
  prisma,
});

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (
  options: trpcNext.CreateNextContextOptions
) => {
  const { req, res } = options;
  const session = await getServerAuthSession({ req, res });

  return await createContextInner({ session });
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
