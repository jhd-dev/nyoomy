import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatService } from './chat.service';
import { Chat } from './models/chat.entity';
import { Message } from './models/message.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Chat, Message])],
    providers: [ChatService],
    exports: [ChatService],
})
export class ChatModule {}
