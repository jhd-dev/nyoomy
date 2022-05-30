import type { FC, ReactNode } from 'react';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { ValidateAdornment } from './ValidateAdornment';
import type { ValidateAdornmentState } from './ValidateAdornment';
import type { TextFieldProps } from '@mui/material/TextField';

export enum ValidateTextFieldState {
    Inactive = 'inactive',
    Success = 'success',
    Invalid = 'invalid',
    Error = 'error',
}

interface IFieldStateProps {
    color?: string;
}

const ValidateTextFieldStateMap: Record<
    ValidateTextFieldState,
    IFieldStateProps
> = {
    [ValidateTextFieldState.Inactive]: {},
    [ValidateTextFieldState.Success]: {},
    [ValidateTextFieldState.Invalid]: {},
    [ValidateTextFieldState.Error]: {},
};

interface IValidateTextFieldProps {
    children?: ReactNode;
    value: string;
    loading?: boolean;
    handleChange?: (value: string) => void;
    isValid: boolean;
    helperText?: string;
    textFieldProps?: TextFieldProps;
}

export const ValidateTextField: FC<IValidateTextFieldProps> = ({
    children,
    value,
    loading = false,
    handleChange: handleChangeCb = () => {},
    textFieldProps = {},
}) => {
    const [state, setState] = useState<ValidateTextFieldState>(
        ValidateTextFieldState.Inactive
    );

    const handleChange = (value: string) => {
        // if (state === ValidateTextFieldState.Inactive) {
        //     setState(ValidateTextFieldState.)
        // }
        handleChangeCb(value);
    };

    return (
        <TextField
            variant="outlined"
            value={value}
            InputProps={{
                endAdornment: (
                    <ValidateAdornment
                        state={
                            loading
                                ? 'loading'
                                : (String(state) as ValidateAdornmentState)
                        }
                    />
                ),
            }}
            onChange={(e) => handleChange(e.target.value)}
            {...textFieldProps}
        >
            {children}
        </TextField>
    );
};
