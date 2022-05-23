import type { FC, ReactNode } from 'react';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import type { MyTodosQuery } from '@nyoomy/graphql';
import TodoItem from './TodoItem';

type Todo = MyTodosQuery['getMyTodos'][number];

interface ITodoItemListProps {
    children?: ReactNode;
    filteredTodos: Todo[];
    loading?: boolean;
}

export const TodoItemList: FC<ITodoItemListProps> = ({
    children,
    filteredTodos,
    loading = false,
}) => (
    <List sx={{ width: '24em' }}>
        {loading ? (
            <CircularProgress />
        ) : (
            filteredTodos.map(
                ({
                    id,
                    title,
                    description,
                    isCompleted,
                    tags,
                    repeatWeekdays,
                }) => (
                    <TodoItem
                        key={id}
                        todoId={id}
                        title={title}
                        description={description}
                        isCompleted={isCompleted}
                        tags={tags}
                        doesRepeat={repeatWeekdays.length > 0}
                        repeatWeekdays={repeatWeekdays}
                    />
                )
            )
        )}
        {children}
    </List>
);
