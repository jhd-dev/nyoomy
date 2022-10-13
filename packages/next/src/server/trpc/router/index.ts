import { router } from '../trpc';
import { exampleRouter } from './example';
import { authRouter } from './auth';
import { todoRouter } from './todo';

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
