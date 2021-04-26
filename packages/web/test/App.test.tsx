import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../src/view/App';

describe('App', () => {
    test('renders learn react link', () => {
        const { queryAllByTestId } = render(
            <div id="root">
                <App />
            </div>
        );
        const ele = queryAllByTestId('App');
        expect(ele.length).toHaveLength(1);
    });
});
