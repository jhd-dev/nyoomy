import { Field, ID, InputType, Int } from 'type-graphql';
import type { ScaleEntry } from '../../entities';

@InputType()
export class UpdateScaleEntryInput implements Partial<ScaleEntry> {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => Date, { nullable: true })
    public datetime?: Date;

    @Field(() => Int, { nullable: true })
    public chosenValue?: number;
}
