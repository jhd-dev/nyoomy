import type { FC } from 'react';
import React from 'react';
import { Edit as EditIcon } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

interface ITodoItemProps {
    todoId: string;
    title: string;
    description: string;
    isCompleted: boolean;
}

const TodoItem: FC<ITodoItemProps> = ({
    todoId,
    title,
    description,
    isCompleted,
}) => (
    <ListItem key={todoId}>
        <Checkbox checked={isCompleted} />
        <ListItemText primary={title} secondary={description} />
        <Link to={`/todo/${String(todoId)}`}>
            <IconButton color="info">
                <EditIcon />
            </IconButton>
        </Link>
    </ListItem>
);

export default TodoItem;
