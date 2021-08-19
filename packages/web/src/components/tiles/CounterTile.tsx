import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useUpdateCounterMutation } from '@nyoomy/graphql';
import type { CounterMetricDailyEntry } from '@nyoomy/graphql';
import { Tile } from './Tile';

interface IProps {
    metric: CounterMetricDailyEntry;
}

export const CounterTile: FC<IProps> = ({ metric }) => {
    const [updateCounter, { loading, error }] = useUpdateCounterMutation({
        refetchQueries: ['Counters'],
    });

    const [label, setLabel] = useState(metric.label);
    const [count, setCount] = useState(metric.count);

    useEffect(() => {
        if (loading) {
            console.log('Loading UpdateCounterMutation...');
        }
        if (error != null) {
            console.error(`Error with UpdateCounterMutation: ${error.message}`);
        }
    });

    const updateLabel = async (newLabel: string): Promise<void> => {
        await updateCounter({
            variables: {
                updateInput: {
                    metricId: metric.metricId,
                    date: metric.date,
                    label: newLabel,
                },
            },
        });
        setLabel(newLabel);
    };

    const updateCount = async (newCount: number): Promise<void> => {
        const response = await updateCounter({
            variables: {
                updateInput: {
                    metricId: metric.metricId,
                    date: metric.date,
                    count: newCount,
                },
            },
        });
        setCount(newCount);
    };

    const incrementCount = async (): Promise<void> => {
        const newCount = Math.min(
            Math.max(count + 1, metric.minimum),
            metric.maximum
        );
        await updateCount(newCount);
    };

    const decrementCount = async (): Promise<void> => {
        const newCount = Math.min(
            Math.max(count - 1, metric.minimum),
            metric.maximum
        );
        await updateCount(newCount);
    };

    return (
        <Tile>
            <input
                type="text"
                className="editable-text"
                onChange={(e) => updateLabel(e.target.value)}
                value={isValidLabel(label) ? label : ''}
            />
            <br />
            <button type="button" onClick={decrementCount}>
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
            <button type="button" onClick={incrementCount}>
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
