import type { FC } from 'react';
import React from 'react';
import { useDeleteCounterMutation } from '@nyoomy/graphql';

interface IProps {
    metricId: string;
}

export const DeleteCounterButton: FC<IProps> = ({ metricId }) => {
    const [deleteCounter, { loading }] = useDeleteCounterMutation({
        variables: { id: metricId },
        refetchQueries: ['Metrics'],
    });

    return (
        <button
            type="button"
            className="btn add-button"
            disabled={loading}
            onClick={async (e) => {
                e.preventDefault();
                await deleteCounter();
            }}
        >
            {loading ? '...' : 'X'}
        </button>
    );
};
