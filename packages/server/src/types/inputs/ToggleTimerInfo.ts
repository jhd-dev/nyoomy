import { Field, ArgsType } from 'type-graphql';
import type { TimerMetricPayload } from '../TimerMetricPayload';

@ArgsType()
export class ToggleTimerInfo implements Partial<TimerMetricPayload> {
    @Field()
    public metricId!: string;

    @Field()
    public date!: string;
}
