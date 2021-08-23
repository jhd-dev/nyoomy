import type { FC } from 'react';
import React, { useState } from 'react';
import { useUpdateTimerMutation } from '@nyoomy/graphql';
import type { TimerMetricPayload } from '@nyoomy/graphql';
import { DeleteTimerButton } from '../DeleteTimerButton';
import { Tile } from './Tile';

interface IProps {
    metric: TimerMetricPayload;
}

export const TimerTile: FC<IProps> = ({ metric }) => {
    const [updateTimer] = useUpdateTimerMutation({
        refetchQueries: ['Metrics'],
        onError(error: unknown) {
            console.error(error);
        },
    });

    const [label, setLabel] = useState(metric.label);
    const [description, setDescription] = useState(metric.description);

    const changeLabel = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newLabel = e.target.value;

        await updateTimer({
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

    const changeDescription = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newDescription = e.target.value;
        await updateTimer({
            variables: {
                updateInput: {
                    metricId: metric.metricId,
                    date: metric.date,
                    description: newDescription,
                },
            },
        });
        setDescription(newDescription);
    };

    return (
        <Tile>
            <input
                type="text"
                className="editable-text"
                onChange={changeLabel}
                value={isValidLabel(label) ? label : ''}
                placeholder="Click to add label"
            />
            <br />
            <input
                type="text"
                className="editable-text"
                onChange={changeDescription}
                value={isValidLabel(description) ? description : ''}
                placeholder="Click to add description"
            />
            <br />
            <DeleteTimerButton metricId={metric.metricId} />
        </Tile>
    );
};

function isValidLabel(label?: string): boolean {
    return typeof label === 'string' && label.length > 0;
}
