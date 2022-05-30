import type { FC, ReactNode } from 'react';
import React from 'react';
import { Circle } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import { ValidateAdornmentIcon } from './ValidateAdornmentIcon';
import type { IconButtonProps } from '@mui/material/IconButton';
import type { InputAdornmentProps } from '@mui/material/InputAdornment';

export type ValidateAdornmentState =
    | 'inactive'
    | 'loading'
    | 'success'
    | 'warning'
    | 'error';

interface IStateProps {
    color: IconButtonProps['color'];
}

const statePropsMap: Record<ValidateAdornmentState, IStateProps> = {
    inactive: { color: 'inherit' },
    loading: { color: 'inherit' },
    success: { color: 'success' },
    warning: { color: 'warning' },
    error: { color: 'error' },
};

export interface IValidateAdornmentProps {
    children?: ReactNode;
    state: ValidateAdornmentState;
    adornmentProps?: Partial<Omit<InputAdornmentProps, 'children'>>;
}

export const ValidateAdornment: FC<IValidateAdornmentProps> = ({
    children,
    state,
    adornmentProps = {},
}) => {
    const { color } = statePropsMap[state];
    return (
        <InputAdornment {...(adornmentProps || {})} position="end">
            <Tooltip title="Refresh">
                <IconButton color={color}>
                    <ValidateAdornmentIcon state={state}>
                        {children}
                    </ValidateAdornmentIcon>
                </IconButton>
            </Tooltip>
        </InputAdornment>
    );
};
