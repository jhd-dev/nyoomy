import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';
import { Chat } from './models/chat.entity';
import { Message } from './models/message.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Chat, Message]), LoggerModule],
    providers: [ChatService, ChatResolver, LoggerService],
    exports: [ChatService],
})
export class ChatModule {}
