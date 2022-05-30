import type { FC, ReactNode } from 'react';
import React from 'react';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

interface IFieldSuggestionProps {
    children?: ReactNode;
    useTooltip?: boolean;
    text: string;
    onClick?: () => void;
}

export const FieldSuggestion: FC<IFieldSuggestionProps> = ({
    children = null,
    useTooltip = false,
    text,
    onClick = () => {},
}) => {
    const link = (
        <Link onClick={onClick} underline="hover">
            {children ?? text}
        </Link>
    );
    return useTooltip ? (
        <Tooltip title={`Use "${text}" instead`}>{link}</Tooltip>
    ) : (
        link
    );
};
