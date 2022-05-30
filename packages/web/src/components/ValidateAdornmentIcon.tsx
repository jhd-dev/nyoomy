import type { FC, ReactNode } from 'react';
import React from 'react';
import {
    CheckCircleOutline,
    Circle,
    ErrorRounded,
    WarningRounded,
} from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import type { ValidateAdornmentState } from './ValidateAdornment';

interface IValidateAdornmentIconProps {
    children?: ReactNode;
    state: ValidateAdornmentState;
}

export const ValidateAdornmentIcon: FC<IValidateAdornmentIconProps> = ({
    children,
    state,
}) => {
    switch (state) {
        case 'inactive':
            return <Circle />;
        case 'success':
            return <CheckCircleOutline />;
        case 'loading':
            return <CircularProgress />;
        case 'warning':
            return <WarningRounded />;
        case 'error':
            return <ErrorRounded />;
        default:
            return <>{children}</>;
    }
};
