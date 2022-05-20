import type { FC } from 'react';
import React, { useState } from 'react';
import { Clear as ClearIcon, Close as CloseIcon } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Tag as TagDto, Weekday } from '@nyoomy/graphql';
import { useMyTodosQuery, useUpdateTodoMutation } from '@nyoomy/graphql';
import { useNavigate, useParams } from 'react-router-dom';
import { RepeatInput } from '../components/RepeatInput';
import { TagSelector } from '../components/TagSelector';
import type { UpdateTodoMutation } from '../../../graphql/src/generated/graphql';
import type { MyTodosQuery } from '../../../graphql/src/generated/graphql-hooks';
import type { ApolloError } from '@apollo/client';

type Tag = Omit<TagDto, 'user' | 'isArchived'>;

const TodoDetailsRoute: FC = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [open, setOpen] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [doesRepeat, setDoesRepeat] = useState<boolean>(false);
    const [repeatedWeekdays, setRepeatedWeekdays] = useState<Weekday[]>([]);
    const [dueDate, setDueDate] = useState<Date | null>(null);

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

    const handleClose = () => {
        setOpen(true);
        navigate('..');
    };

    const handleSave = async () => {
        await updateTodo();
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
                <DatePicker
                    value={dueDate}
                    onChange={(val) => setDueDate(val)}
                    label="Due Date"
                    renderInput={(props) => <TextField {...props} />}
                    toolbarTitle="Select Due Date"
                    openTo="day"
                    InputProps={{
                        endAdornment: dueDate && (
                            <Tooltip title="Clear Date">
                                <IconButton
                                    onClick={() => setDueDate(null)}
                                    disabled={dueDate == null}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </Tooltip>
                        ),
                    }}
                />
                <RepeatInput
                    doesRepeat={doesRepeat}
                    onRepeatToggle={(val: boolean) => setDoesRepeat(val)}
                    repeatingWeekdays={repeatedWeekdays}
                    onRepeatingWeekdaysChange={(val: Weekday[]) =>
                        setRepeatedWeekdays(val)
                    }
                />
                <TagSelector
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                />
                {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
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
