import type { FC } from 'react';
import React, { useState } from 'react';
import { Tile } from './Tile';

export const CounterTile: FC = () => {
    const [label, setLabel] = useState('Click to set label');
    const [count, setCount] = useState(0);
    return (
        <Tile>
            <input
                type="text"
                className="editable-text"
                onChange={(e) => setLabel(e.target.value)}
                value={isValidLabel(label) ? label : ''}
            />
            <br />
            <button
                type="button"
                onClick={() => setCount(Math.round(count - 1))}
            >
                -
            </button>
            <input
                type="text"
                className="editable-text"
                onChange={(e) => setCount(attemptParseInt(e.target.value))}
                value={count}
            />
            <button
                type="button"
                onClick={() => setCount(Math.round(count + 1))}
            >
                +
            </button>
        </Tile>
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

function isValidLabel(label: string): boolean {
    return typeof label === 'string' && label.length > 0;
}
