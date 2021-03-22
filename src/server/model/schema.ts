import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./queries/UserQuery";
import { CREATE_USER } from './mutations/UserMutation';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});