import type { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions as nextAuthOptions } from '../../pages/api/auth/[...nextauth]';

export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => await unstable_getServerSession(ctx.req, ctx.res, nextAuthOptions);
