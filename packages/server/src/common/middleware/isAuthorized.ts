/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param */
// import { getRepository } from 'typeorm';
// import { User } from '../entities/User';
import type { IContext } from '../../types/interfaces/context.interface';
import type { MiddlewareFn } from '@nestjs/graphql';

/**
 * Verifies that the client's context has a valid access token.
 *
 * @throws when the user is not authenticated
 */
export const isAuthorized: MiddlewareFn<IContext> = async (
    { context },
    next
) => {
    const userId = context.req.session?.userId;
    if (!userId) {
        throw new Error('User is not authenticated.');
    }
    if (context.req.session?.user?.id !== userId) {
        const user = null; // await getCurrentUser(userId);
        if (user == null) {
            throw new Error(`User with ID '${userId}' could not be found.`);
        }
    }
    return next();
};

// async function getCurrentUser(userId?: string): Promise<User | null> {
//     if (typeof userId !== 'string' || userId.length === 0) return null;
//     return (await getRepository(User).findOne({ id: userId })) ?? null;
// }
