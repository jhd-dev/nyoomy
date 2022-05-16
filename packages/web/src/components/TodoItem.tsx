import type { FC } from 'react';
import React from 'react';
import {
    Edit as EditIcon,
    Repeat as RepeatIcon,
    Tag as TagIcon,
} from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import type { Tag, Weekday } from '@nyoomy/graphql';
import { weekdaysMap } from './RepeatInput';
import { RouteLink } from './RouteLink';

interface ITodoItemProps {
    todoId: string;
    title: string;
    description: string;
    isCompleted: boolean;
    tags: Array<Omit<Tag, 'user' | 'isArchived'>>;
    doesRepeat: boolean;
    repeatWeekdays: Weekday[];
}

const TodoItem: FC<ITodoItemProps> = ({
    todoId,
    title,
    description,
    isCompleted,
    tags,
    doesRepeat,
    repeatWeekdays,
}) => (
    <ListItem key={todoId}>
        <Checkbox checked={isCompleted} />
        <ListItemText primary={title} secondary={description} />
        {doesRepeat && (
            <Tooltip
                title={`Repeats on: ${repeatWeekdays
                    .map((day) => weekdaysMap[day].label)
                    .join(', ')}`}
            >
                <IconButton
                    color="default"
                    sx={{ cursor: 'help', opacity: 0.7 }}
                >
                    <RepeatIcon />
                </IconButton>
            </Tooltip>
        )}
        {tags.length > 0 && (
            <Tooltip title={tags.map((tag) => tag.label).join(', ')}>
                <IconButton
                    color="default"
                    sx={{ cursor: 'help', opacity: 0.7 }}
                >
                    <TagIcon />
                </IconButton>
            </Tooltip>
        )}

        <RouteLink to={`/todo/${String(todoId)}`}>
            <Tooltip title="Edit To-do">
                <IconButton color="secondary">
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </RouteLink>
    </ListItem>
);

export default TodoItem;
