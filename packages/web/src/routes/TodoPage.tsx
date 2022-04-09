import type { FC } from 'react';
import React from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import {
    Avatar,
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
                    data?.getMyTodos.map((chat) => (
                        <ListItem key={chat.title}>
                            <Checkbox />
                            <ListItemText
                                primary={chat.title}
                                secondary={chat.description}
                            />
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
        </Box>
    );
};

export default TodoPage;
