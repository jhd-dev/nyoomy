import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useUpdateJournalMutation } from '@nyoomy/graphql';
import type { JournalResponse } from '@nyoomy/graphql';
import { DeleteJournalButton } from '../DeleteJournalButton';

interface IProps {
    journal: JournalResponse;
}

export const JournalTile: FC<IProps> = ({ journal }) => {
    const [updateJournal, { loading, error }] = useUpdateJournalMutation({
        refetchQueries: ['MyJournals'],
    });

    const baseInput = {
        journalId: journal.journalId,
        date: journal.date,
    };

    const [title, setTitle] = useState(journal.title);
    const [text, setText] = useState(journal.text);
    const [dailyWordGoal, setDailyWordGoal] = useState(journal.dailyWordGoal);

    useEffect(() => {
        if (loading) {
            console.log('Loading UpdateJournalMutation...');
        }
        if (error != null) {
            console.error(`Error with UpdateJournalMutation: ${error.message}`);
        }
    }, [loading, error]);

    const changeTitle = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newTitle = e.target.value;

        await updateJournal({
            variables: {
                updateInput: { title: newTitle, ...baseInput },
            },
        });
        setTitle(newTitle);
    };

    const changeText = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newText = e.target.value;
        await updateJournal({
            variables: {
                updateInput: { text: newText, ...baseInput },
            },
        });
        setText(newText);
    };

    const changeDailyWordGoal = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newGoal = Math.abs(attemptParseInt(e.target.value));
        await updateJournal({
            variables: {
                updateInput: { dailyWordGoal: newGoal, ...baseInput },
            },
        });
        setDailyWordGoal(newGoal);
    };

    return (
        <div className="journal-item">
            <input
                type="text"
                className="editable-text"
                onChange={changeTitle}
                value={isValidLabel(title) ? title : ''}
                placeholder="Click to add title"
            />
            <br />
            <textarea
                className="editable-text"
                onChange={(e) => setText(e.target.value)}
                onBlur={changeText}
                value={isValidLabel(text) ? text : ''}
                placeholder="Enter journal entry here"
            />
            <input
                type="text"
                className="editable-text"
                onChange={changeDailyWordGoal}
                value={dailyWordGoal <= 0 ? '' : dailyWordGoal}
                placeholder="Words per day"
            />
            words
            <DeleteJournalButton journalId={journal.journalId} />
        </div>
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
