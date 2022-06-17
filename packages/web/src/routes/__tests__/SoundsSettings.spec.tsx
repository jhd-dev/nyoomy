/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SoundsSettings } from '../SoundsSettings';
import type { MockedResponse } from '@apollo/client/testing';
import { MockedProvider } from '@apollo/client/testing';
import { MySettingsDocument } from '@nyoomy/graphql';

const mocks: MockedResponse[] = [
    {
        request: {
            query: MySettingsDocument,
        },
        result: {
            data: {
                mySettings: {
                    audioEnabled: false,
                    globalVolume: 100,
                },
            },
        },
    },
    {
        request: {
            query: MySettingsDocument,
        },
        result: {
            data: {
                mySettings: {
                    audioEnabled: false,
                    globalVolume: 100,
                },
            },
        },
    },
];

it('accurately displays values', () => {
    render(
        <MockedProvider mocks={mocks}>
            <SoundsSettings />
        </MockedProvider>
    );
    expect(screen.getByLabelText('Enable Audio')).toBeChecked();
    expect(screen.getByRole('slider')).toHaveValue('100');
});

it('prevents editting volume if audio is disabled', async () => {
    render(
        <MockedProvider mocks={mocks}>
            <SoundsSettings />
        </MockedProvider>
    );

    expect(screen.getByRole('slider')).not.toBeDisabled();

    fireEvent.click(screen.getByLabelText('Enable Audio'));
    await waitFor(() => screen.getByLabelText('Enable Audio'));
    await waitFor(() => screen.getByRole('slider'));
    expect(screen.getByLabelText('Enable Audio')).not.toBeChecked();
    expect(screen.getByRole('slider')).toBeDisabled();

    fireEvent.click(screen.getByLabelText('Enable Audio'));
    await waitFor(() => screen.getByRole('slider'));
    expect(screen.getByRole('slider')).not.toBeDisabled();
});
