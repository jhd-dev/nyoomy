import type { FC } from 'react';
import React from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import {
    Alert,
    Box,
    CircularProgress,
    Fab,
    IconButton,
    List,
    ListItem,
    TextField,
    Tooltip,
} from '@mui/material';
import { useAddTodoMutation, useMyTodosQuery } from '@nyoomy/graphql';
import { Outlet } from 'react-router-dom';
import TodoItem from '../components/TodoItem';

const TodoPage: FC = () => {
    const { data, loading, error } = useMyTodosQuery();
    const [addTodo] = useAddTodoMutation();

    return (
        <Box>
            {error ? (
                <Alert severity="error">An error occurred.</Alert>
            ) : (
                <>
                    <List sx={{ width: '24em' }}>
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            data?.getMyTodos.map(
                                ({ id, title, description, isCompleted }) => (
                                    <TodoItem
                                        key={id}
                                        todoId={id}
                                        title={title}
                                        description={description}
                                        isCompleted={isCompleted}
                                    />
                                )
                            )
                        )}
                        <ListItem>
                            <TextField variant="outlined" />
                            <Tooltip title="Add To-Do">
                                <IconButton
                                    onClick={async () => {
                                        await addTodo();
                                    }}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>
                        </ListItem>
                    </List>
                    <Fab
                        color="primary"
                        onClick={async () => {
                            await addTodo();
                        }}
                    >
                        <AddIcon />
                    </Fab>
                    <Outlet />
                </>
            )}
        </Box>
    );
};

export default TodoPage;
