import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useDeleteTodoMutation } from '@nyoomy/graphql';

interface IProps {
    todoId: string;
}

export const DeleteTodoButton: FC<IProps> = ({ todoId }) => {
    const [deleteTodo, { loading, error }] = useDeleteTodoMutation({
        variables: { id: todoId },
        refetchQueries: ['MyTodos'],
    });

    useEffect(() => {
        if (error) console.error(error);
    }, [loading, error]);

    return (
        <button
            type="button"
            className="btn add-button"
            disabled={loading}
            onClick={async (e) => {
                e.preventDefault();
                await deleteTodo();
            }}
        >
            {loading ? 'Deleting...' : 'Delete task'}
        </button>
    );
};
