import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
    description: 'Info on the availability of a unique input (i.e. username)',
})
export class AvailabilityDto {
    @Field({ nullable: true })
    public attemptedInput?: string;

    @Field()
    public fieldName: string;

    @Field()
    public isAvailable: boolean;

    @Field(() => [String], { nullable: true })
    public alternatives?: string[];

    @Field(() => Date)
    public timeChecked: Date;
}
