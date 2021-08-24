import type { FC } from 'react';
import React, { useEffect } from 'react';
import type { TodoResponse } from '@nyoomy/graphql';
import { useMyTodosQuery } from '@nyoomy/graphql';
import { AddTodoButton } from './AddTodoButton';
import { TodoItem } from './TodoItem';
import { Tile } from './tiles/Tile';

export const TodoListPanel: FC = () => {
    const { data, loading, error } = useMyTodosQuery();

    useEffect(() => {
        if (loading) {
            console.log('Loading MyTodosQuery...');
        }
        if (error != null) {
            console.error(`Error with MyTodosQuery: ${error.message}`);
        }
    }, [loading, error]);

    return (
        <Tile>
            <h2>To-Do</h2>
            {loading ?? <div>Loading...</div>}
            {data?.getMyTodos?.map((todo: TodoResponse) => (
                <TodoItem key={todo.todoId} todo={todo} />
            ))}
            <AddTodoButton />
        </Tile>
    );
};
