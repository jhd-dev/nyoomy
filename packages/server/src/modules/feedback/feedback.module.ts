import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/models/user.entity';
import { FeedbackResolver } from './feedback.resolver';
import { FeedbackService } from './feedback.service';
import { Feedback } from './models/feedback.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Feedback, User])],
    providers: [FeedbackService, FeedbackResolver],
    exports: [FeedbackService],
})
export class FeedbackModule {}
