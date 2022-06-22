/* eslint-disable pii/no-email */
/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react-hooks';
import { useRegistrationForm } from '../useRegistrationForm';

const onSubmitMock = jest.fn();

const validValues = {
    displayName: 'John Doe',
    username: 'johndoe_123',
    email: 'johndoe123@email.com',
    password: 'PasswordAbc123!',
    termsAndConditions: true,
};

describe('useRegistrationForm', () => {
    afterEach(() => onSubmitMock.mockClear());

    it('initiates with empty values', () => {
        const { result } = renderHook(() =>
            useRegistrationForm({ onSubmit: onSubmitMock })
        );

        expect(result.current.values).toEqual(result.current.initialValues);
    });

    it("doesn't submit if a value is invalid", async () => {
        const { result } = renderHook(() =>
            useRegistrationForm({ onSubmit: onSubmitMock })
        );

        await act(async () => {
            await result.current.submitForm();
        });

        expect(onSubmitMock).toBeCalledTimes(0);
    });

    it('calls the given onSubmit function if values are valid', async () => {
        const { result } = renderHook(() =>
            useRegistrationForm({ onSubmit: onSubmitMock })
        );

        await act(async () => {
            await result.current.setValues(validValues);
            await result.current.submitForm();
        });

        expect(onSubmitMock).toBeCalledTimes(1);
    });
});
