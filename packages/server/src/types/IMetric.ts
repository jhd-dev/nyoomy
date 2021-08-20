import 'reflect-metadata';
import { InterfaceType, Field, ID } from 'type-graphql';
import MetricType from './MetricType';
import { User } from '../entities/User';

@InterfaceType()
export abstract class IMetric {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => MetricType)
    public readonly metricType: MetricType;

    @Field(() => User)
    public user: User;

    @Field(() => String)
    public label: string;

    @Field(() => String)
    public description: string;
}
