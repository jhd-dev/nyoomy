import { registerEnumType } from '@nestjs/graphql';

enum MetricType {
    COUNTER = 'COUNTER',
    TIMER = 'TIMER',
    JOURNAL = 'JOURNAL',
    SCALE = 'SCALE',
    SELECTION = 'METRIC',
    FLOAT = 'FLOAT',
    STRING = 'STRING',
}

registerEnumType(MetricType, {
    name: 'MetricType',
    description: 'The types of metrics a user can create',
});

export default MetricType;
