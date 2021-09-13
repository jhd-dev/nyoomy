import { Field, ArgsType } from '@nestjs/graphql';
import type { TimerMetricPayload } from '../TimerMetricPayload';

@ArgsType()
export class ToggleTimerInfo implements Partial<TimerMetricPayload> {
    @Field()
    public metricId!: string;

    @Field()
    public date!: string;
}
