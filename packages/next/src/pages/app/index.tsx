import { NextPage } from 'next';
import Link from 'next/link';

const AppPage: NextPage = () => {
  return (
    <main>
      <Link href="app/tasks">Tasks</Link>
    </main>
  );
};

export default AppPage;
