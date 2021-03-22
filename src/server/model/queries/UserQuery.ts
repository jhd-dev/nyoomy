import { GraphQLList } from "graphql";
import { UserType } from "../types/UserType";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(): string {
        return "John";
    }
}