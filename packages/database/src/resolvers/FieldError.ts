import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class FieldError {
    @Field()
    public field!: string;

    @Field()
    public message!: string;
}
