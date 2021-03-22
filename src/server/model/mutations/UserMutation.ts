import { UserType } from "../types/UserType";
import { GraphQLString } from 'graphql';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(_parent: any, args: any) {
        const { name, username, password } = args;
        return args;
    },
};
