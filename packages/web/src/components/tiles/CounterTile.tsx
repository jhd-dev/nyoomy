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
        setLabel(newLabel);
        await updateCounter({
            variables: {
                updateInput: {
                    metricId: metric.metricId,
                    date: metric.date,
                    label: newLabel,
                },
            },
        });
    };

    const updateCount = async (): Promise<void> => {
        const newCount = Math.min(
            Math.max(count + 1, metric.minimum),
            metric.maximum
        );
        console.log(`newCount: ${newCount}`);
        const response = await updateCounter({
            variables: {
                updateInput: {
                    metricId: metric.metricId,
                    date: metric.date,
                    count: newCount,
                },
            },
        });
        console.log(response);
        setCount(newCount);
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
            <button type="button" onClick={updateCount}>
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
