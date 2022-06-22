import type { FC } from 'react';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { FieldProps } from 'formik';

type CustomCheckboxProps<T = any, U = any> = FieldProps<T, U> & CheckboxProps;

const CustomCheckbox: FC<CustomCheckboxProps> = ({
    field,
    form: { errors },
    ...props
}) => {
    // const isTouched = touched[field.name];
    // const hasErrors = isTouched && Boolean(errors[field.name]);
    const errorMessage = String(errors[field.name]);
    // Space required since helper text changes component height
    // const helperText = errorMessage ?? ' ';
    return (
        <Checkbox
            inputProps={{
                'aria-errormessage': errorMessage,
            }}
            {...field}
            {...props}
        />
    );
};

export default CustomCheckbox;
