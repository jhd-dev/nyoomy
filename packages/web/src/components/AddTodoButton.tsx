import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useAddTodoMutation } from '@nyoomy/graphql';

export const AddTodoButton: FC = () => {
    const [addTodo, { loading, error }] = useAddTodoMutation();

    useEffect(() => {
        if (error) {
            console.error(error);
        }
    });

    return (
        <button
            type="button"
            className="btn add-button"
            disabled={loading}
            onClick={async (e) => {
                e.preventDefault();
                await addTodo();
            }}
        >
            {loading ? '...' : 'Add to-do'}
        </button>
    );
};
