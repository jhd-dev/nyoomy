import type { FC } from 'react';
import React, { useState } from 'react';
import type { CounterMetricDailyEntry } from '@nyoomy/graphql';
// import type { CounterMetric, CountersQueryHookResult } from '@nyoomy/graphql';
import { Tile } from './Tile';

interface IProps {
    metric: CounterMetricDailyEntry;
}

export const CounterTile: FC<IProps> = ({ metric }) => {
    const [label, setLabel] = useState(metric.label);
    const [count, setCount] = useState(metric.count);
    return (
        <Tile>
            <input
                type="text"
                className="editable-text"
                onChange={(e) => setLabel(e.target.value)}
                value={isValidLabel(label) ? label : ''}
            />
            <br />
            <button
                type="button"
                onClick={() => setCount(Math.round(count - 1))}
            >
                -
            </button>
            <input
                type="text"
                className="editable-text"
                onChange={(e) => {
                    const val = attemptParseInt(e.target.value);
                    // syncCount(val);
                    setCount(val);
                }}
                value={count}
            />
            <button
                type="button"
                onClick={() => setCount(Math.round(count + metric.interval))}
            >
                +
            </button>
        </Tile>
    );
};

function attemptParseInt(
    str: string,
    radix: number = 10,
    defaultInt: number = 0
): number {
    const attempt = parseInt(str, radix);
    return isNaN(attempt) ? defaultInt : attempt;
}

function isValidLabel(label?: string): boolean {
    return typeof label === 'string' && label.length > 0;
}

// function syncCount(newCount: number) {}
