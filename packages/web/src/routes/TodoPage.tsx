import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import {
    useAddTodoMutation,
    useMyTagsQuery,
    useMyTodosQuery,
} from '@nyoomy/graphql';
import type { MyTagsQuery, Tag as TagDto, MyTodosQuery } from '@nyoomy/graphql';
import { Outlet } from 'react-router-dom';
import { TagFilterSelector } from '../components/TagFilterSelector';
import { TodoItemList } from '../components/TodoItemList';

type Tag = Omit<TagDto, 'user' | 'isArchived'>;
type Todo = MyTodosQuery['getMyTodos'][number];

const TodoPage: FC = () => {
    const [allTags, setAllTags] = useState<Tag[]>([]);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [allTodos, setAllTodos] = useState<Todo[]>([] as Todo[]);
    const [newTodoText, setNewTodoText] = useState<string>('');

    const [addTodo] = useAddTodoMutation({
        variables: { input: { title: newTodoText } },
        refetchQueries: ['MyTodos'],
        onCompleted() {
            setNewTodoText('');
        },
    });

    const { error: todosError } = useMyTodosQuery({
        onCompleted(data: MyTodosQuery) {
            if (data.getMyTodos == null) {
                return;
            }
            setAllTodos(data.getMyTodos);
        },
    });

    const { loading: tagsLoading, error: tagsError } = useMyTagsQuery({
        onCompleted(data: MyTagsQuery) {
            setAllTags((prev) => data.myTags ?? prev);
            setSelectedTags((prev) =>
                prev.filter((oldTag) =>
                    data.myTags.some((newTag) => newTag.id === oldTag.id)
                )
            );
        },
    });

    const filteredTodos = useMemo((): Todo[] => {
        const isTagSelected = (tag: typeof selectedTags[number]): boolean =>
            selectedTags.some((selectedTag) => selectedTag.id === tag.id);
        return selectedTags.length > 0
            ? allTodos.filter((todo) => todo.tags.some(isTagSelected))
            : allTodos;
    }, [selectedTags, allTodos]);

    const handleInputChange = (value: string): void => {
        setNewTodoText(value);
    };

    return (
        <Box sx={{ mt: 4 }}>
            {todosError || tagsError ? (
                <Alert severity="error">An error occurred.</Alert>
            ) : (
                <>
                    <TagFilterSelector
                        allTags={allTags}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                        loading={tagsLoading}
                    />
                    <TodoItemList filteredTodos={filteredTodos}>
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
                    </TodoItemList>
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
