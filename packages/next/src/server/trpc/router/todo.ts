import { z } from 'zod';
import { t, authedProcedure } from '../trpc';

export const todoRouter = t.router({
  getTodoItems: authedProcedure.query(async ({ ctx }) => {
    const occurrences = await ctx.prisma.todoOccurrence.findMany({
      include: { todo: true },
      orderBy: { todoId: 'desc' },
    });

    return occurrences;
  }),
  createTodoItem: authedProcedure.mutation(async ({ ctx }) => {
    const newTodo = await ctx.prisma.todo.create({
      data: {
        ownerId: ctx.session.user.id,
        title: 'New Todo',
        description: '',
      },
    });

    const newTodoOccurrence = await ctx.prisma.todoOccurrence.create({
      data: { todoId: newTodo.id },
      include: { todo: true },
    });

    return newTodoOccurrence;
  }),
  deleteTodo: authedProcedure
    .input(z.string())
    .mutation(async ({ input: id, ctx }) => {
      const userId = ctx.session.user.id;
      const { ownerId } = await ctx.prisma.todo.findUniqueOrThrow({
        where: { id },
        select: { ownerId: true },
      });

      if (ownerId !== userId) {
        throw new Error(
          `User ${userId} does not have access to Owner ${ownerId}'s data.`
        );
      }

      return await ctx.prisma.todoOccurrence.delete({
        where: { id },
        include: { todo: true },
      });
    }),
});
