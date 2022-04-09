import type { FC } from 'react';
import React from 'react';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import {
    Box,
    Checkbox,
    CircularProgress,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField,
    Tooltip,
} from '@mui/material';
import { useAddTodoMutation, useMyTodosQuery } from '@nyoomy/graphql';
import { Link, Outlet } from 'react-router-dom';

const TodoPage: FC = () => {
    const { data, loading, error } = useMyTodosQuery();
    const [addTodo] = useAddTodoMutation();

    if (error) return <div>Error.</div>;
    return (
        <Box>
            <List sx={{ width: '24em' }}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    data?.getMyTodos.map(({ id, title, description }) => (
                        <ListItem key={id}>
                            <Checkbox />
                            <ListItemText
                                primary={title}
                                secondary={description}
                            />
                            <Link to={`/todo/${String(id)}`}>
                                <IconButton color="info">
                                    <EditIcon />
                                </IconButton>
                            </Link>
                        </ListItem>
                    ))
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
        </Box>
    );
};

export default TodoPage;
