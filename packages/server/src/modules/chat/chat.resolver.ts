import { Injectable, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { User } from '../user/models/user.entity';
import { ChatService } from './chat.service';
import { EditMessageInput } from './dto/edit-message.input';
import { SendMessageToChatInput } from './dto/send-to-chat.input';
import { SendMessageToUserInput } from './dto/send-to-user.input';
import { Chat } from './models/chat.entity';
import { Message } from './models/message.entity';

@Injectable()
@Resolver(() => Chat)
export class ChatResolver {
    public constructor(private readonly chatService: ChatService) {}

    @Query(() => [Chat], { name: 'myChats' })
    @UseGuards(AuthenticatedGuard)
    public getUserChats(
        @CurrentUser() user: User,
        @Args('excludeArchived') excludeArchived: boolean
    ): Promise<Chat[]> {
        return this.chatService.getUserChats(user.id, excludeArchived);
    }

    @Mutation(() => Message, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public sendMessageToUser(
        @CurrentUser() sender: User,
        @Args('input') { recipientId, content }: SendMessageToUserInput
    ): Promise<Message | null> {
        return this.chatService.sendMessageToUser(
            sender.id,
            recipientId,
            content
        );
    }

    @Mutation(() => Message, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public sendMessageToChat(
        @CurrentUser() sender: User,
        @Args('input') { chatId, content }: SendMessageToChatInput
    ): Promise<Message | null> {
        return this.chatService.sendMessageToChat(sender.id, chatId, content);
    }

    @Mutation(() => Message, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public editMessage(
        @CurrentUser() sender: User,
        @Args('input') { messageId, content }: EditMessageInput
    ): Promise<Message | null> {
        return this.chatService.editMessage(sender.id, messageId, content);
    }

    @Mutation(() => Boolean, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public deleteMessage(
        @CurrentUser() sender: User,
        @Args('messageId') messageId: number
    ): Promise<boolean> {
        return this.chatService.deleteMessage(sender.id, messageId);
    }
}
