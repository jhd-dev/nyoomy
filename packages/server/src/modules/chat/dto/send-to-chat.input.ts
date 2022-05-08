import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendMessageToChatInput {
    @Field()
    public chatId: string;

    @Field()
    public content: string;
}
