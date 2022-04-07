import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendMessageToUserInput {
    @Field()
    public recipientId: string;

    @Field()
    public content: string;
}
