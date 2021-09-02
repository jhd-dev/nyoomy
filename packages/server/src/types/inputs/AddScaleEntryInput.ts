import { Field, ID, InputType, Int } from 'type-graphql';
import type { ScaleEntry } from '../../entities';

@InputType()
export class AddScaleEntryInput implements Partial<ScaleEntry> {
    @Field(() => ID)
    public metricId: string;

    @Field(() => Int)
    public chosenValue: number;
}
