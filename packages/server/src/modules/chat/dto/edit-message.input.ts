import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EditMessageInput {
    @Field()
    public messageId: number;

    @Field()
    public content: string;
}
