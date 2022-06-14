/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageTitle } from '../PageTitle';
import '@testing-library/jest-dom';

it('renders the given children', () => {
    const exampleText = 'Hello';
    render(<PageTitle>{exampleText}</PageTitle>);
    expect(screen.getByText(exampleText)).toHaveTextContent(exampleText);
});
