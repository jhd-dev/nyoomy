import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendMessageToChatInput {
    @Field()
    public chatId: number;

    @Field()
    public content: string;
}
