import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditMessageInput {
    @Field()
    public messageId: string;

    @Field()
    public content: string;
}
