import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './models/feedback.entity';
import type { CreateFeedbackInput } from './dto/create-feedback.input';
import type { EditFeedbackDto } from './dto/edit-feedback.dto';

@Injectable()
export class FeedbackService {
    public constructor(
        @InjectRepository(Feedback)
        private readonly feedbackRepo: Repository<Feedback>
    ) {}

    public async createFeedback(
        input: CreateFeedbackInput
    ): Promise<EditFeedbackDto> {
        const feedback = this.feedbackRepo.create({ ...input });
        await this.feedbackRepo.save(feedback);
        return { success: true };
    }
}
