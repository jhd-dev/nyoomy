import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { padNumber } from '../utils/format-safety';

interface IProps {
    sessionStarted: string | null;
    isRunning: boolean;
    goalSeconds: number;
}

export const TimerDisplay: FC<IProps> = ({
    sessionStarted,
    isRunning,
    goalSeconds,
}) => {
    const currentSecond = Math.ceil(new Date().getTime() / 1000);
    const firstSecond = Math.floor(
        sessionStarted == null
            ? currentSecond
            : new Date(sessionStarted).getTime() / 1000
    );
    const secondsLeft = Math.max(0, firstSecond + goalSeconds - currentSecond);

    const [seconds, setSeconds] = useState(secondsLeft);

    const minutesLeft = Math.floor(secondsLeft / 60);
    const minutesDisplay = padNumber(minutesLeft, 2);
    const secondsDisplay = padNumber(secondsLeft - minutesLeft * 60, 2);
    const shouldColonFlicker = secondsLeft % 2 === 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setSeconds(seconds - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds, isRunning]);

    return (
        <div>
            <span>
                {minutesDisplay}
                {shouldColonFlicker && ':'}
                {secondsDisplay}
            </span>
        </div>
    );
};
