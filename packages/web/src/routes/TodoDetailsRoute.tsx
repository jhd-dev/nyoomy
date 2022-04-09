import type { FC } from 'react';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import {
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

const TodoDetailsRoute: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [updateTodo] = useUpdateTodoMutation();
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(true);
        navigate('todo');
    };

    const handleSave = async () => {
        await updateTodo({
            variables: {
                updateInput: {
                    id: String(params.todoId),
                    date: Date.now().toString(),
                },
            },
        });
        handleClose();
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
                <TextField autoFocus label="Title" margin="dense" />
                <TextField label="Description" margin="dense" />
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
