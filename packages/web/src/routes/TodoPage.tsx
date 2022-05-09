import type { FC } from 'react';
import React, { useState } from 'react';
import { Add as AddIcon, ClearAll } from '@mui/icons-material';
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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {
    useAddTodoMutation,
    useMyTagsQuery,
    useMyTodosQuery,
} from '@nyoomy/graphql';
import { Outlet } from 'react-router-dom';
import { colorOptions } from '../components/TagChip';
import TodoItem from '../components/TodoItem';

const TodoPage: FC = () => {
    const { data, loading, error } = useMyTodosQuery();
    const {
        data: tagsData,
        loading: tagsLoading,
        error: tagsError,
    } = useMyTagsQuery();

    const [newTodoText, setNewTodoText] = useState<string>('');
    const handleInputChange = (value: string): void => {
        setNewTodoText(value);
    };

    const [addTodo] = useAddTodoMutation({
        variables: { input: { title: newTodoText } },
        refetchQueries: ['MyTodos'],
    });

    const allTags = tagsData?.myTags;
    const [selectedTags, setSelectedTags] = useState(allTags?.slice() ?? []);

    const isTagSelected = (tag: typeof selectedTags[number]): boolean =>
        selectedTags.some((selectedTag) => selectedTag.id === tag.id);

    const toggleTag = (tag: typeof selectedTags[number]): void =>
        setSelectedTags((prev) =>
            prev.some((selectedTag) => selectedTag.id === tag.id)
                ? prev.filter((selectedTag) => selectedTag.id !== tag.id)
                : prev.concat(tag)
        );

    const clearTags = () => setSelectedTags([]);

    const allTodos = data?.getMyTodos ?? [];
    const filteredTodos =
        selectedTags.length > 0
            ? allTodos.filter((todo) => todo.tags.some(isTagSelected))
            : allTodos;

    return (
        <Box sx={{ mt: 4 }}>
            {error || tagsError ? (
                <Alert severity="error">An error occurred.</Alert>
            ) : (
                <>
                    <Stack direction="row" spacing={0.5}>
                        {allTags?.map((tag) => (
                            <Chip
                                key={tag.id}
                                label={tag.label}
                                size="small"
                                variant={
                                    isTagSelected(tag) ? 'filled' : 'outlined'
                                }
                                onClick={() => toggleTag(tag)}
                                sx={
                                    tag.color === 'DEFAULT'
                                        ? {
                                              opacity: isTagSelected(tag)
                                                  ? 1
                                                  : 0.5,
                                          }
                                        : {
                                              backgroundColor:
                                                  colorOptions[tag.color].color,
                                              opacity: isTagSelected(tag)
                                                  ? 1
                                                  : 0.5,
                                          }
                                }
                            />
                        ))}
                        {selectedTags.length > 0 && (
                            <Tooltip title="Clear Filters">
                                <IconButton onClick={clearTags} size="small">
                                    <ClearAll />
                                </IconButton>
                            </Tooltip>
                        )}
                        {tagsLoading && <CircularProgress />}
                    </Stack>
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
                                }) => (
                                    <TodoItem
                                        key={id}
                                        todoId={id}
                                        title={title}
                                        description={description}
                                        isCompleted={isCompleted}
                                        tags={tags}
                                    />
                                )
                            )
                        )}
                        <ListItem>
                            <TextField
                                variant="outlined"
                                value={newTodoText}
                                onChange={(e) =>
                                    handleInputChange(e.target.value)
                                }
                                label="New To-Do"
                                placeholder="To-Do Title"
                            />
                            <Tooltip title="Add To-Do">
                                <IconButton onClick={() => addTodo()}>
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>
                        </ListItem>
                    </List>
                    <Fab color="primary" onClick={() => addTodo()}>
                        <AddIcon />
                    </Fab>
                    <Outlet />
                </>
            )}
        </Box>
    );
};

export default TodoPage;
