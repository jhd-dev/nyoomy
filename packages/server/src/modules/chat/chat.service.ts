import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './models/chat.entity';
import { Message } from './models/message.entity';

@Injectable()
export class ChatService {
    @InjectRepository(Chat)
    private readonly chatRepo: Repository<Chat>;

    @InjectRepository(Message)
    private readonly messageRepo: Repository<Message>;

    public async getUserChats(
        userId: string,
        excludingArchived: boolean = false
    ): Promise<Chat[]> {
        return (
            await this.chatRepo.find({
                where: {
                    isArchived: excludingArchived ? false : undefined,
                },
                // relations: ['users'],
            })
        ).filter((chat) => this.doesChatHaveMember(userId, chat));
    }

    public createChat(memberIds: string[]): Promise<Chat> {
        const chat = this.chatRepo.create({
            members: memberIds.map((id) => ({ id })),
        });
        return this.chatRepo.save(chat);
    }

    public async sendMessageToUser(
        senderId: string,
        recipientId: string,
        content: string
    ): Promise<Message | null> {
        const existingChat = (await this.chatRepo.find()).find(
            (chat) =>
                this.doesChatHaveMember(senderId, chat) &&
                this.doesChatHaveMember(recipientId, chat)
        );
        if (existingChat == null) {
            const newChat = await this.createChat([senderId, recipientId]);
            return this.sendMessageToChat(senderId, newChat.id, content);
        }
        return this.sendMessageToChat(senderId, existingChat.id, content);
    }

    public async sendMessageToChat(
        userId: string,
        chatId: string,
        content: string
    ): Promise<Message | null> {
        const chat = await this.chatRepo.findOne(chatId);
        if (this.doesChatHaveMember(userId, chat)) {
            const message = this.messageRepo.create({
                sender: { id: userId },
                content,
            });
            return this.messageRepo.save(message);
        }
        return null;
    }

    public async editMessage(
        userId: string,
        messageId: string,
        newContent: string
    ): Promise<Message> {
        const message = await this.messageRepo.findOneOrFail({
            where: { id: messageId, sender: { id: userId } },
        });
        message.content = newContent;
        return this.messageRepo.save(message);
    }

    public async deleteMessage(
        userId: string,
        messageId: string
    ): Promise<boolean> {
        const message = await this.findMessageFromUser(userId, messageId);
        if (message == null) return false;
        await this.messageRepo.remove(message);
        return true;
    }

    public doesChatHaveMember(userId: string, chat: Chat | undefined): boolean {
        return chat?.members.some((member) => member.id === userId) ?? false;
    }

    private findMessageFromUser(
        userId: string,
        messageId: string
    ): Promise<Message | undefined> {
        return this.messageRepo.findOne({
            where: { id: messageId, sender: { id: userId } },
        });
    }

    private findMessageFromUserOrFail(
        userId: string,
        messageId: string
    ): Promise<Message> {
        return this.messageRepo.findOneOrFail({
            where: { id: messageId, sender: { id: userId } },
        });
    }
}
