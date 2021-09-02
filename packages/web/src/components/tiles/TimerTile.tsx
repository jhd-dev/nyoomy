import type { FC } from 'react';
import React, { useState } from 'react';
import { useUpdateTimerMutation } from '@nyoomy/graphql';
import type { TimerMetricPayload } from '@nyoomy/graphql';
import { attemptParseInt, isValidLabel } from '../../utils/format-safety';
import { DeleteTimerButton } from '../DeleteTimerButton';
import { TimerDisplay } from '../TimerDisplay';
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
    const [goalLength, setGoalLength] = useState(metric.goalLength);

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

    const changeGoalLength = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newGoalLength = Math.abs(attemptParseInt(e.target.value));
        await updateTimer({
            variables: {
                updateInput: {
                    metricId: metric.metricId,
                    date: metric.date,
                    goalLength: newGoalLength,
                },
            },
        });
        setGoalLength(newGoalLength);
    };

    const changeStartTime = async (): Promise<void> => {
        const newStartTime = e.target.value;
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
            <TimerDisplay
                sessionStarted={metric.startTime ?? null}
                isRunning={metric.startTime != null}
                goalSeconds={metric.goalLength * 60}
            />
            <br />
            <span>Goal: </span>
            <input
                type="text"
                className="editable-text"
                onChange={changeGoalLength}
                value={goalLength}
            />
            <button type="button">
                {metric.startTime == null ? 'Start' : 'Stop'}
            </button>
            <DeleteTimerButton metricId={metric.metricId} />
        </Tile>
    );
};
