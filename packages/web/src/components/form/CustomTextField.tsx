import type { FC } from 'react';
import React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import type { FieldProps } from 'formik';

type CustomTextFieldProps<T = any, U = any> = FieldProps<T, U> & TextFieldProps;

const CustomTextField: FC<CustomTextFieldProps> = ({
    field,
    form: { touched, errors },
    ...props
}) => {
    const isTouched = touched[field.name];
    const hasErrors = isTouched && Boolean(errors[field.name]);
    const errorMessage = String(errors[field.name]);
    // Space required since helper text changes component height
    const helperText = errorMessage ?? ' ';
    return (
        <TextField
            inputProps={{
                'role': 'textbox',
                'aria-errormessage': errorMessage,
            }}
            error={hasErrors}
            helperText={helperText}
            {...field}
            {...props}
        />
    );
};

export default CustomTextField;
