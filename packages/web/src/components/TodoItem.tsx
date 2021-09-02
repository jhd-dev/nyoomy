import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useUpdateTodoMutation } from '@nyoomy/graphql';
import type { TodoResponse } from '@nyoomy/graphql';
import { isValidLabel } from '../utils/format-safety';
import { DeleteTodoButton } from './DeleteTodoButton';

interface IProps {
    todo: TodoResponse;
}

export const TodoItem: FC<IProps> = ({ todo }) => {
    const [updateTodo, { loading, error }] = useUpdateTodoMutation({
        refetchQueries: ['MyTodos'],
    });

    const baseInput = {
        todoId: todo.todoId,
        date: todo.date,
    };

    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

    useEffect(() => {
        if (loading) {
            console.log('Loading UpdateTodoMutation...');
        }
        if (error != null) {
            console.error(`Error with UpdateTodoMutation: ${error.message}`);
        }
    }, [loading, error]);

    const changeTitle = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newTitle = e.target.value;

        await updateTodo({
            variables: {
                updateInput: { title: newTitle, ...baseInput },
            },
        });
        setTitle(newTitle);
    };

    const changeDescription = async (e: {
        target: { value: string };
    }): Promise<void> => {
        const newDescription = e.target.value;
        await updateTodo({
            variables: {
                updateInput: { description: newDescription, ...baseInput },
            },
        });
        setDescription(newDescription);
    };

    const updateIsCompleted = async (): Promise<void> => {
        const nowCompleted = !isCompleted;
        await updateTodo({
            variables: {
                updateInput: { isCompleted: nowCompleted, ...baseInput },
            },
        });
        setIsCompleted(nowCompleted);
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={updateIsCompleted}
            />
            <input
                type="text"
                className="editable-text"
                onChange={changeTitle}
                value={isValidLabel(title) ? title : ''}
                placeholder="Click to add title"
            />
            <br />
            <input
                type="text"
                className="editable-text"
                onChange={changeDescription}
                value={isValidLabel(description) ? description : ''}
                placeholder="Click to add description"
            />
            <DeleteTodoButton todoId={todo.todoId} />
        </div>
    );
};
