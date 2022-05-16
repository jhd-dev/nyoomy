import type { FC } from 'react';
import React, { useState } from 'react';
import { Close as CloseIcon, Delete as DeleteIcon } from '@mui/icons-material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import {
    CategoryColor,
    Tag as TagDto,
    useCreateTagMutation,
    useDeleteTagMutation,
    useMyTagsQuery,
    useMyTodosQuery,
    useUpdateTodoMutation,
    Weekday,
} from '@nyoomy/graphql';
import { useNavigate, useParams } from 'react-router-dom';
import type { UpdateTodoMutation } from '../../../graphql/src/generated/graphql';
import type { ApolloError } from '@apollo/client';
import { colorOptions, TagChip } from '../components/TagChip';
import { RepeatInput } from '../components/RepeatInput';
import { MyTodosQuery } from '../../../graphql/src/generated/graphql-hooks';

type Tag = Omit<TagDto, 'user' | 'isArchived'>;

const TodoDetailsRoute: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const filterOptions = createFilterOptions<Tag>({
        ignoreCase: true,
        trim: true,
        stringify: ({ label }) => label,
    });

    const [open, setOpen] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [doesRepeat, setDoesRepeat] = useState<boolean>(false);
    const [repeatedWeekdays, setRepeatedWeekdays] = useState<Weekday[]>([]);

    useMyTodosQuery({
        onCompleted(data: MyTodosQuery) {
            const currentTodo = data?.getMyTodos.find(
                (todo) => todo.id === params.todoId
            );
            if (currentTodo == null) {
                return;
            }
            setTitle((prev) => currentTodo.title ?? prev);
            setDescription((prev) => currentTodo.description ?? prev);
            setDoesRepeat((prev) =>
                currentTodo?.repeatWeekdays == null
                    ? prev
                    : currentTodo.repeatWeekdays.length > 0
            );
            setRepeatedWeekdays((prev) => currentTodo.repeatWeekdays ?? prev);
            setSelectedTags((prev) => currentTodo.tags ?? prev);
        },
    });
    const { data: myTagsData } = useMyTagsQuery();
    const [updateTodo] = useUpdateTodoMutation({
        variables: {
            updateInput: {
                id: String(params.todoId),
                date: new Date().toDateString(),
                title,
                description,
                tagUpdates: selectedTags.map((tag) => ({
                    id: tag.id,
                })),
                repeatWeekdays: repeatedWeekdays,
            },
        },
        onCompleted(data: UpdateTodoMutation): void {
            if (data?.updateTodo) {
                setErrorMsg('');
                handleClose();
            }
        },
        onError(error: ApolloError): void {
            setErrorMsg(error.message);
        },
        refetchQueries: ['MyTags', 'MyTodos'],
    });
    const [createTag] = useCreateTagMutation({
        refetchQueries: ['Me', 'MyTags', 'MyTodos'],
    });
    const [deleteTag] = useDeleteTagMutation({
        refetchQueries: ['Me', 'MyTags', 'MyTodos'],
    });

    const allTags: Tag[] = myTagsData?.myTags ?? [];

    const handleClose = () => {
        setOpen(true);
        navigate('..');
    };

    const handleSave = async () => {
        await updateTodo();
    };

    const sortTags = (tags: Tag[]): Tag[] =>
        tags
            .slice()
            .sort(
                (tag1, tag2) =>
                    -tag2.label[0]
                        .toLocaleUpperCase()
                        .localeCompare(tag1.label[0].toLocaleUpperCase())
            );

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                To-Do Details
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                    color="secondary"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Here, you can edit details such as title or description.
                </DialogContentText>
                <TextField
                    autoFocus
                    label="Title"
                    margin="dense"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Description"
                    margin="dense"
                    multiline
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Autocomplete
                    multiple
                    freeSolo
                    disableCloseOnSelect
                    value={selectedTags}
                    options={sortTags(allTags)}
                    groupBy={(tag) =>
                        /[0-9]/.test(tag.label[0])
                            ? '#'
                            : tag.label[0].toLocaleUpperCase()
                    }
                    filterOptions={filterOptions}
                    onChange={async (_e, newVal) => {
                        const newValTags: typeof allTags = newVal.filter(
                            (tag): tag is Tag => typeof tag !== 'string'
                        );
                        const newValStrings: string[] = newVal.filter(
                            (tag): tag is string => typeof tag === 'string'
                        );
                        for (const tagString of newValStrings) {
                            if (
                                newValTags.some(
                                    (tag) => tag.label === tagString
                                )
                            ) {
                                continue;
                            }
                            const { data } = await createTag({
                                variables: {
                                    input: {
                                        label: tagString ?? 'New Tag',
                                        color: CategoryColor.Default,
                                    },
                                },
                            });
                            if (data?.createTag)
                                newValTags.push(data.createTag);
                        }
                        setSelectedTags(
                            newValTags
                                .slice()
                                .reverse()
                                .filter(
                                    (tag, i, arr) =>
                                        arr.findIndex(
                                            (tag2) => tag2.id === tag.id
                                        ) === i
                                )
                                .reverse()
                        );
                    }}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                checked={selected}
                                style={{
                                    marginRight: 8,
                                    color: colorOptions[option.color].color,
                                }}
                            ></Checkbox>
                            <Typography>{option.label}</Typography>
                            <Tooltip title={`Delete tag "${option.label}"`}>
                                <IconButton
                                    color="warning"
                                    size="small"
                                    onClick={async (e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        setSelectedTags((prev) =>
                                            prev.filter(
                                                (tag) => tag.id !== option.id
                                            )
                                        );
                                        await deleteTag({
                                            variables: { id: option.id },
                                        });
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </li>
                    )}
                    renderInput={(inputParams) => (
                        <TextField
                            label="Tags"
                            placeholder="Tags"
                            {...inputParams}
                        />
                    )}
                    renderTags={(value: Tag[], getTagProps) =>
                        value.map((option: Tag, index: number) => (
                            <TagChip
                                tagId={option.id}
                                label={option.label}
                                color={option.color}
                                handleDelete={(_e) => {
                                    setSelectedTags((prev) =>
                                        prev.filter(
                                            (tag) => tag.id !== option.id
                                        )
                                    );
                                }}
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    limitTags={10}
                />
                {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                <RepeatInput
                    doesRepeat={doesRepeat}
                    onRepeatToggle={(val: boolean) => setDoesRepeat(val)}
                    repeatingWeekdays={repeatedWeekdays}
                    onRepeatingWeekdaysChange={(val: Weekday[]) =>
                        setRepeatedWeekdays(val)
                    }
                ></RepeatInput>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button color="primary" onClick={handleSave}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TodoDetailsRoute;
