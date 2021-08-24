import type { FC } from 'react';
import React, { useEffect } from 'react';
import type { JournalResponse } from '@nyoomy/graphql';
import { useMyJournalsQuery } from '@nyoomy/graphql';
import { AddJournalButton } from './AddJournalButton';
import { JournalTile } from './tiles/JournalTile';
import { Tile } from './tiles/Tile';

export const JournalListPanel: FC = () => {
    const { data, loading, error } = useMyJournalsQuery();

    useEffect(() => {
        if (loading) {
            console.log('Loading MyJournalsQuery...');
        }
        if (error != null) {
            console.error(`Error with MyJournalsQuery: ${error.message}`);
        }
    }, [loading, error]);

    return (
        <Tile>
            <h2>Journals</h2>
            {loading ?? <div>Loading...</div>}
            {data?.getMyJournals?.map((journal: JournalResponse) => (
                <JournalTile key={journal.journalId} journal={journal} />
            ))}
            <AddJournalButton />
        </Tile>
    );
};
