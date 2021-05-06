/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param */
import type { MiddlewareFn } from 'type-graphql';
import type { IContext } from '../types/IContext';

/**
 * Verifies that the client's context has a valid access token.
 *
 * @throws when the user is not authenticated
 */
export const isAuthorized: MiddlewareFn<IContext> = ({ context }, next) => {
    if (!context.req.session?.userId)
        throw new Error('User is not authenticated.');
    return next();
};
