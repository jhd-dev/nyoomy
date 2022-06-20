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
