import { UserType } from "../types/UserType";
import { GraphQLString, GraphQLID } from 'graphql';
import { Users } from '../entities/Users';
import { MessageType } from '../types/MessageType';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(_parent: any, args: any) {
        const { name, username, password } = args;
        const now = new Date();
        await Users.insert({
            name,
            username,
            password,
            createdAt: now,
         });
        return args;
    },
};

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_parent: any, args: any) {
        const id = args.id;
        await Users.delete(id);
        return { success: true, message: "Successfully deleted user." };
    },
};

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(_parent: any, args: any) {
        const { username, oldPassword, newPassword } = args;

        const user = await Users.findOne({ username });
        if (!user) throw new Error("User does not exist.");

        const actualPassword = user?.password;
        if (oldPassword !== actualPassword) throw new Error("Incorrect password.")

        await Users.update({ username }, { password: newPassword });
        return { success: true, message: "Successfully changed password." };
    },
};
