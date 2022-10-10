import { NextPage } from 'next';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import { trpc } from '../utils/trpc';
import { FC } from 'react';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nyoomy: Login</title>
      </Head>
      <div>
        <AuthShowcase />
      </div>
    </>
  );
};

export default LoginPage;

const AuthShowcase: FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-3xl">Login</div>
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="px-4 py-2 border border-black text-xl rounded-md bg-violet-50 hover:bg-violet-100 shadow-lg'"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};
