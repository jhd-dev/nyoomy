import type { FC, ReactNode } from 'react';
import React from 'react';
import { FieldSuggestion } from './FieldSuggestion';

interface IFieldSuggestionListProps {
    suggestions: string[];
    delimitter?: ReactNode;
    delimitLastSuggestion?: boolean;
    handleClick?: (val: string) => void;
}

export const FieldSuggestionList: FC<IFieldSuggestionListProps> = ({
    suggestions,
    delimitter = ', ',
    delimitLastSuggestion = false,
    handleClick = () => {},
}) => (
    <>
        {suggestions.map((suggestion, i, arr) => {
            const isLast = i === arr.length - 1;
            const conditionalDelimitter: ReactNode =
                isLast && delimitLastSuggestion ? null : delimitter;
            return (
                <>
                    <FieldSuggestion
                        key={suggestion}
                        text={suggestion}
                        onClick={() => handleClick(suggestion)}
                        useTooltip
                    />
                    {conditionalDelimitter}
                </>
            );
        })}
    </>
);
