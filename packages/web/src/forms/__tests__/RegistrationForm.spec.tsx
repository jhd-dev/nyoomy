/* eslint-disable import/order */
/* eslint-disable pii/no-email */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RegistrationForm } from '../RegistrationForm';
import type { MockedResponse } from '@apollo/client/testing';
import { MockedProvider } from '@apollo/client/testing';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

const onSubmitMock = jest.fn();

const mocks: MockedResponse[] = [];

describe('RegistrationPage', () => {
    beforeEach(() => {
        mockedUseNavigate.mockClear();
        onSubmitMock.mockClear();
        render(
            <MockedProvider mocks={mocks}>
                <RegistrationForm onSubmit={onSubmitMock} />
            </MockedProvider>
        );
    });

    it('initiates with empty fields', async () => {
        await waitFor(() => {
            expect(getTextbox('Name')).toHaveValue('');
            expect(getTextbox('Username')).toHaveValue('');
            expect(getTextbox('Email Address')).toHaveValue('');
            expect(getPassword()).toHaveValue('');
            expect(getTermsAndConditions()).not.toBeChecked();
        });
    });

    it('displays changes to fields', async () => {
        const nameInput = 'John Doe';
        await user.type(getTextbox('Name'), nameInput);
        await waitFor(async () => {
            expect(await findTextbox('Name')).toHaveValue(nameInput);
        });

        const usernameInput = 'johndoe_123';
        await user.type(getTextbox('Username'), usernameInput);
        await waitFor(async () => {
            expect(await findTextbox('Username')).toHaveValue(usernameInput);
        });

        const emailInput = 'johndoe123@email.com';
        await user.type(getTextbox('Email Address'), emailInput);
        await waitFor(async () => {
            expect(await findTextbox('Email Address')).toHaveValue(emailInput);
        });

        const passwordInput = 'PasswordAbc123!';
        await user.type(getPassword()!, passwordInput);
        await waitFor(() => {
            expect(getPassword()).toHaveValue(passwordInput);
        });
    });

    it('shows no error messages on untouched fields', () => {
        expect(getTextbox('Name')).not.toHaveErrorMessage();
        expect(getTextbox('Username')).not.toHaveErrorMessage();
        expect(getTextbox('Email Address')).not.toHaveErrorMessage();
        expect(getPassword()).not.toHaveErrorMessage();
        expect(getTermsAndConditions()).not.toHaveErrorMessage();
    });

    it('shows no error messages on valid inputs', async () => {
        const validName = 'John Doe';
        await user.type(getTextbox('Name'), validName);
        await waitFor(async () => {
            expect(await findTextbox('Name')).not.toHaveErrorMessage();
        });

        const validUsername = 'johndoe_123';
        await user.type(getTextbox('Username'), validUsername);
        await waitFor(async () => {
            expect(await findTextbox('Username')).not.toHaveErrorMessage();
        });

        const validEmail = 'johndoe123@email.com';
        await user.type(getTextbox('Email Address'), validEmail);
        await waitFor(async () => {
            expect(await findTextbox('Email Address')).not.toHaveErrorMessage();
        });

        const validPassword = 'PasswordAbc123!';
        await user.type(getPassword()!, validPassword);
        await waitFor(() => {
            expect(getPassword()).not.toHaveErrorMessage();
        });
    });

    xit('shows error messages on skipped inputs', async () => {
        await user.click(getTextbox('Username'));
        await user.click(getTextbox('Email Address'));
        await waitFor(() => {
            expect(getTextbox('Username')).toHaveErrorMessage(
                'Username is required'
            );
        });
    });

    xit('shows error messages on invalid inputs', async () => {
        const invalidEmail = 'aaaaaaaaaa@';
        await user.type(getTextbox('Email Address'), invalidEmail);
        await user.click(getTextbox('Username'));
        await waitFor(async () => {
            expect(await findTextbox('Email Address')).toHaveErrorMessage(
                'Enter a valid email address'
            );
        });
    });

    it('submits if all inputs are valid', async () => {
        const validName = 'John Doe';
        await user.type(getTextbox('Name'), validName);

        const validUsername = 'johndoe_123';
        await user.type(getTextbox('Username'), validUsername);

        const validEmail = 'johndoe123@email.com';
        await user.type(getTextbox('Email Address'), validEmail);

        const validPassword = 'PasswordAbc123!';
        await user.type(getPassword()!, validPassword);

        await user.click(getTermsAndConditions());
        await user.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(onSubmitMock).toBeCalledTimes(1);
        });
    });

    it("won't submit if any input is invalid", async () => {
        const validName = 'John Doe';
        await user.type(getTextbox('Name'), validName);

        await user.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(onSubmitMock).not.toBeCalled();
        });

        const validUsername = 'johndoe_123';
        await user.type(getTextbox('Username'), validUsername);

        await user.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(onSubmitMock).not.toBeCalled();
        });

        const validEmail = 'johndoe123@email.com';
        await user.type(getTextbox('Email Address'), validEmail);

        await user.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(onSubmitMock).not.toBeCalled();
        });

        const validPassword = 'PasswordAbc123!';
        await user.type(getPassword()!, validPassword);

        await user.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(onSubmitMock).not.toBeCalled();
        });

        await user.click(getTermsAndConditions());

        await user.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(onSubmitMock).toBeCalledTimes(1);
        });
    });
});

function getTextbox(name: string) {
    return screen.getByRole('textbox', { name });
}

function findTextbox(name: string) {
    return screen.findByRole('textbox', { name });
}

function getPassword() {
    return screen.queryByPlaceholderText('********');
}

function getTermsAndConditions() {
    return screen.getByRole('checkbox');
}
