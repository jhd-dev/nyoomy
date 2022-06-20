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
}) => (
    <TextField
        InputProps={{ role: 'textbox' }}
        error={touched[field.name] && Boolean(errors[field.name])}
        helperText={touched[field.name] && String(errors[field.name])}
        {...field}
        {...props}
    />
);

export default CustomTextField;
