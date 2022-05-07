import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { FeedbackService } from './feedback.service';

@Injectable()
@Resolver()
export class FeedbackResolver {
    public constructor(private readonly feedbackService: FeedbackService) {}

    @Mutation(() => Boolean, { name: 'sendFeedback' })
    public createFeedback(
        @Args('input') input: CreateFeedbackInput
    ): Promise<boolean> {
        return this.feedbackService.createFeedback(input);
    }
}
