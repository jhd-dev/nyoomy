import type { FC } from 'react';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import {
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useUpdateTodoMutation } from '@nyoomy/graphql';
import { useNavigate, useParams } from 'react-router-dom';
import type { UpdateTodoMutation } from '../../../graphql/src/generated/graphql';
import type { ApolloError } from '@apollo/client';

const TodoDetailsRoute: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [updateTodo] = useUpdateTodoMutation();

    const [open, setOpen] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

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
