import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useDeleteJournalMutation } from '@nyoomy/graphql';

interface IProps {
    journalId: string;
}

export const DeleteJournalButton: FC<IProps> = ({ journalId }) => {
    const [deleteJournal, { loading, error }] = useDeleteJournalMutation({
        variables: { id: journalId },
        refetchQueries: ['MyJournals'],
    });

    useEffect(() => {
        if (error) console.error(error);
    }, [loading, error]);

    return (
        <button
            type="button"
            className="btn add-button"
            disabled={loading}
            onClick={async (e) => {
                e.preventDefault();
                await deleteJournal();
            }}
        >
            {loading ? 'Deleting...' : 'Delete journal'}
        </button>
    );
};
