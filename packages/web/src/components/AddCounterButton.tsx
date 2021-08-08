import type { FC } from 'react';
import React, { useEffect } from 'react';
import {
    refetchCountersQuery,
    // refetchDayCountersQuery,
    useAddCounterMutation,
} from '@nyoomy/graphql';

export const AddCounterButton: FC = () => {
    const [addCounter, { data, loading, error }] = useAddCounterMutation();

    useEffect(() => {
        console.log(data);
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
                console.log('Adding counter');
                await addCounter();
                refetchCountersQuery();
                // void refetchDayCountersQuery();
            }}
        >
            {loading ? '...' : '+'}
        </button>
    );
};
