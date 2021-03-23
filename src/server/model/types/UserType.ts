import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";
import { DateType } from "./DateType";

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        createdAt: { type: DateType },
    }),
});
