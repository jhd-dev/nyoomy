/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, Mutation, Arg, Query, Args, Ctx } from 'type-graphql';
import { User } from '../entities/User';

/**
 * GraphQL resolver for the user table.
 *
 * @exports
 * @class UserResolver
 */
@Resolver()
export class UserResolver {}
