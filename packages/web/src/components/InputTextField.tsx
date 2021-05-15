import type { FC } from 'react';
import React from 'react';
import type { IInputEvent } from '@nyoomy/common';
import type { FieldError } from '@nyoomy/graphql';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

interface InputTextFieldProps {
    field: string;
    inputType: 'text' | 'email' | 'password';
    label: string | Element;
    handleChange: (e: IInputEvent) => void | Promise<void>;
    errors?: FieldError[];
    placeholder?: string;
    required?: boolean;
    autoFocus?: boolean;
    children?: Partial<Element>;
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
    <Form.Group>
        <Row>
            <Col md>
                <Form.Label>{label}: </Form.Label>
            </Col>
            <Col xs={12} md={9}>
                <InputGroup>
                    {children ?? null}
                    <Form.Control
                        type={inputType}
                        id={field}
                        onChange={(e: IInputEvent) => handleChange(e)}
                        placeholder={placeholder ?? ''}
                        required={required ?? false}
                        autoFocus={autoFocus ?? false}
                    />
                </InputGroup>
            </Col>
        </Row>
        {errors?.map((err, i) => (
            <Form.Control.Feedback type="invalid" key={err.field + String(i)}>
                {err.message}
            </Form.Control.Feedback>
        ))}
    </Form.Group>
);

export default InputTextField;
