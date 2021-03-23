import { GraphQLScalarType } from "graphql";
import { Kind, ValueNode } from "graphql/language";

export const DateType = new GraphQLScalarType({
    name: "Date",
    description: "Custom date scalar since the JS Date type is not supported by default",
    parseValue(value: any): Date {
        return new Date(value);
    },
    serialize(value: any): string {
        return new Date(value).toDateString();
    },
    parseLiteral(ast: ValueNode): Date | null {
        switch (ast.kind) {
            case Kind.STRING:
                return new Date(ast.value);
            default:
                return null;
        }
    },
});
