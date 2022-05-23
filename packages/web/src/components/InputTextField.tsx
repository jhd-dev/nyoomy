import type { FC, ReactNode } from 'react';
import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { IInputEvent } from '@nyoomy/common';
import type { FieldError } from '@nyoomy/graphql';

interface InputTextFieldProps {
    field: string;
    inputType: 'text' | 'email' | 'password';
    label: ReactNode;
    handleChange: (e: IInputEvent) => void | Promise<void>;
    errors?: FieldError[];
    placeholder?: string;
    required?: boolean;
    autoFocus?: boolean;
    children?: ReactNode;
}

const InputTextField: FC<InputTextFieldProps> = ({
    field,
    inputType,
    label,
    errors,
    handleChange,
    placeholder,
    required,
    autoFocus,
    children,
}) => (
    <Grid item xs={12} sm={6}>
        {children ?? null}
        <TextField
            type={inputType}
            id={field}
            label={label}
            onChange={(e: IInputEvent) => handleChange(e)}
            placeholder={placeholder ?? ''}
            required={required ?? false}
            autoFocus={autoFocus ?? false}
        />
        {errors?.map((err, i) => (
            <Typography key={err.field + String(i)}>{err.message}</Typography>
        ))}
    </Grid>
);

export default InputTextField;
