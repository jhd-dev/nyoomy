import type { FC } from 'react';
import React from 'react';
import { CalendarContainer as ReactCalendarContainer } from 'react-datepicker';

interface ICalendarContainterProps {
    className?: string;
}

export const CalendarContainer: FC<ICalendarContainterProps> = ({
    className,
    children,
}) => {
    const n = className ? { className } : {};
    return (
        // <div
        //     style={{
        //         padding: '16px',
        //         background: '#216ba5',
        //         color: '#fff',
        //     }}
        // >
        <ReactCalendarContainer>
            <div>{children}</div>
        </ReactCalendarContainer>
        // </div>
    );
};
