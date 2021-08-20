// import type { FC } from 'react';
// import React from 'react';
// import MetricType from '../../../../server/src/types/MetricType';
// import { CounterTile } from './CounterTile';
// import type { IMetric } from '../../../../server/src/types/IMetric';

// interface IProps {
//     metric: IMetric;
// }

// export const MetricTile: FC<IProps> = ({ metric }) => {
//     switch (metric.metricType) {
//         case MetricType.COUNTER:
//             return <CounterTile metric={metric} />;
//             break;
//         case MetricType.TIMER:
//             return <TimerTile metric={metric} />;
//             break;
//         default:
//             console.error(`metricType '${metric.metricType}' not recognized.`);
//             return <></>;
//     }
// };
