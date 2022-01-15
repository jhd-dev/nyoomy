// import 'reflect-metadata';
// import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
// import { TimerEntry } from '../entities';
// import MetricType from './MetricType';
// import type { TimerMetric } from '../entities';

// @ObjectType()
// export class TimerMetricResponse implements Partial<TimerMetric> {
//     @Field(() => ID)
//     public readonly id: string;

//     @Field(() => MetricType)
//     public readonly metricType: MetricType = MetricType.TIMER;

//     @Field()
//     public label: string;

//     @Field()
//     public description: string;

//     @Field(() => [TimerEntry])
//     public entries: TimerEntryResponse[];

//     @Field(() => Int)
//     public goalLength: number;

//     @Field(() => Int)
//     public goalPerDay: number;
// }
