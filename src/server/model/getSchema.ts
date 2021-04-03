import { buildSchema } from "type-graphql";
import { UserResolver } from './resolvers/UserResolver';

const getSchema = async () => {
    return await buildSchema({
        resolvers: [UserResolver],
    });
};

export default getSchema;
