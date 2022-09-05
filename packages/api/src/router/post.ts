import { z } from 'zod';
import { t } from '../trpc';

export const postRouter = t.router({
  all: t.procedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  byId: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.example.findFirst({ where: { id: input } });
  }),
});
