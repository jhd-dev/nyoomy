import { Field, ID, InputType, Int } from '@nestjs/graphql';
import type { SelectionMetric } from '../../entities/selection-metric.entity';

@InputType()
export class UpdateSelectionMetricInput implements Partial<SelectionMetric> {
    @Field(() => ID)
    public readonly id: string;

    @Field({ nullable: true })
    public title?: string;

    @Field({ nullable: true })
    public description?: string;

    @Field({ nullable: true })
    public isArchived?: boolean;

    @Field(() => Int, { nullable: true })
    public minSelections?: number;

    @Field(() => Int, { nullable: true })
    public maxSelections?: number;
}
