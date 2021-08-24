import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useAddJournalMutation } from '@nyoomy/graphql';

export const AddJournalButton: FC = () => {
    const [addJournal, { loading, error }] = useAddJournalMutation();

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
                await addJournal();
            }}
        >
            {loading ? '...' : 'Add journal'}
        </button>
    );
};
