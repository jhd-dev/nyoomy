import { registerEnumType } from 'type-graphql';

enum MetricType {
    COUNTER = 'COUNTER',
    TIMER = 'TIMER',
}

registerEnumType(MetricType, {
    name: 'MetricType',
    description: 'The types of metrics a user can create',
});

export default MetricType;
