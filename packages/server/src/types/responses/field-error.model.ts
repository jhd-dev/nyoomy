import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FieldError {
    @Field()
    public field!: string;

    @Field()
    public message!: string;
}
