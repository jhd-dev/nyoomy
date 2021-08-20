import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useAddTimerMutation } from '@nyoomy/graphql';

export const AddTimerButton: FC = () => {
    const [addTimer, { data, loading, error }] = useAddTimerMutation();

    useEffect(() => {
        if (error) {
            console.error(error);
        }
    });

    return (
        <button
            type="button"
            className="btn add-button"
            disabled={loading}
            onClick={async (e) => {
                e.preventDefault();
                await addTimer();
            }}
        >
            {loading ? '...' : 'Add timer'}
        </button>
    );
};
