import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { FieldError } from '@nyoomy/graphql';
import { IInputEvent } from '@nyoomy/common';

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

const InputTextField: React.FC<InputTextFieldProps> = ({
    field,
    inputType,
    label,
    errors,
    handleChange,
    placeholder,
    required,
    autoFocus,
    children,
}) => {
    return (
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
                            onChange={(e) => handleChange(e)}
                            placeholder={placeholder ?? ''}
                            required={required ?? false}
                            autoFocus={autoFocus ?? false}
                        />
                    </InputGroup>
                </Col>
            </Row>
            {errors != null &&
                errors.map((err, i) => (
                    <Form.Control.Feedback
                        type="invalid"
                        key={err.field + String(i)}
                    >
                        {err.message}
                    </Form.Control.Feedback>
                ))}
        </Form.Group>
    );
};

export default InputTextField;
