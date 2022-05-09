import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { EmailService } from './email.service';

@Module({
    imports: [LoggerModule],
    providers: [EmailService, LoggerService],
    exports: [EmailService],
})
export class EmailModule {}
