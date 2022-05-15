import type { FC } from 'react';
import React from 'react';
import { Edit as EditIcon, Tag as TagIcon } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import type { Tag } from '@nyoomy/graphql';
import { RouteLink } from './RouteLink';

interface ITodoItemProps {
    todoId: string;
    title: string;
    description: string;
    isCompleted: boolean;
    tags: Array<Omit<Tag, 'user' | 'isArchived'>>;
}

const TodoItem: FC<ITodoItemProps> = ({
    todoId,
    title,
    description,
    isCompleted,
    tags,
}) => (
    <ListItem key={todoId}>
        <Checkbox checked={isCompleted} />
        <ListItemText primary={title} secondary={description} />
        {tags.length > 0 && (
            <Tooltip title={tags.map((tag) => tag.label).join(', ')}>
                <IconButton color="info">
                    <TagIcon />
                </IconButton>
            </Tooltip>
        )}
        <Tooltip title="Edit To-do">
            <RouteLink to={`/todo/${String(todoId)}`}>
                <IconButton color="secondary">
                    <EditIcon />
                </IconButton>
            </RouteLink>
        </Tooltip>
    </ListItem>
);

export default TodoItem;
