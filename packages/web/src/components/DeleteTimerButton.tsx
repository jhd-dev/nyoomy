import type { FC } from 'react';
import React from 'react';
import { useDeleteTimerMutation } from '@nyoomy/graphql';

interface IProps {
    metricId: string;
}

export const DeleteTimerButton: FC<IProps> = ({ metricId }) => {
    const [deleteTimer, { loading, error }] = useDeleteTimerMutation({
        variables: { id: metricId },
        refetchQueries: ['Metrics'],
    });

    if (error) console.error(error);

    return (
        <button
            type="button"
            className="btn add-button"
            disabled={loading}
            onClick={async (e) => {
                e.preventDefault();
                console.log('deleting timer...');
                const response = await deleteTimer();
                console.log(response);
            }}
        >
            {loading ? '...' : 'X'}
        </button>
    );
};
