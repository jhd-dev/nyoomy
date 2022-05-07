import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EditFeedbackDto {
    @Field()
    public success: boolean;
}
