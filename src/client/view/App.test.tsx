import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
    test('renders learn react link', () => {
        render(<App />);
        const ele = screen.getByTestId('App');
        expect(ele).toBeDefined();
    });
});
