import type { FC, SyntheticEvent } from 'react';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import {
    Alert,
    Autocomplete,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import {
    CategoryIcon,
    useCreateTagMutation,
    useMyTagsQuery,
    useUpdateTodoMutation,
} from '@nyoomy/graphql';
import { useNavigate, useParams } from 'react-router-dom';
import type { UpdateTodoMutation } from '../../../graphql/src/generated/graphql';
import type { ApolloError } from '@apollo/client';
import { colorOptions, TagChip } from '../components/TagChip';
import Checkbox from '@mui/material/Checkbox';
import { CategoryColor } from '@nyoomy/graphql';

// const tags: ITag[] = [
//     { id: 28987142, label: 'productivity', colorName: 'Default' },
//     { id: 2173892, label: 'daily', colorName: 'Green' },
// ];

type Tag = {
    __typename?: 'Tag' | undefined;
    id: string;
    label: string;
    description: string;
    color: CategoryColor;
    icon?: CategoryIcon | null | undefined;
};

const TodoDetailsRoute: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [updateTodo] = useUpdateTodoMutation();
    const { data: myTagsData } = useMyTagsQuery();
    const [createTag] = useCreateTagMutation();

    const [open, setOpen] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const [allTags, setAllTags] = useState(myTagsData?.myTags ?? []);

    const handleClose = () => {
        setOpen(true);
        navigate('..');
    };

    const handleSave = async () => {
        await updateTodo({
            variables: {
                updateInput: {
                    id: String(params.todoId),
                    date: new Date().toDateString(),
                    title,
                    description,
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
        });
    };

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
                    options={allTags}
                    onChange={async (_e, newVal) => {
                        const newValTags: typeof allTags = newVal.filter(
                            (tag): tag is Tag => typeof tag !== 'string'
                        );
                        const newValStrings: string[] = newVal.filter(
                            (tag): tag is string => typeof tag === 'string'
                        );
                        for (const tagString of newValStrings) {
                            const { data } = await createTag({
                                variables: {
                                    input: {
                                        label: tagString ?? 'New Tag',
                                        color: CategoryColor.Default,
                                    },
                                },
                                refetchQueries: ['MyTags', 'MyTodos'],
                            });
                            // const newTag = {
                            //     id: Math.random(),
                            //     label: tagString ?? 'New Tag',
                            //     colorName: 'Default',
                            // };
                            if (data?.createTag)
                                newValTags.push(data.createTag);
                        }
                        setSelectedTags(newValTags);
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
                            {option.label}
                        </li>
                    )}
                    renderInput={(inputParams) => (
                        <TextField
                            label="Tags"
                            placeholder="Tags"
                            {...inputParams}
                        />
                    )}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index: number) => (
                            <TagChip
                                tagId={option.id}
                                label={option.label}
                                color={option.color}
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    limitTags={10}
                />
                {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            </DialogContent>
            <DialogActions>
                <Button color="secondary">Cancel</Button>
                <Button color="primary" onClick={handleSave}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TodoDetailsRoute;
