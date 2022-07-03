import type { FC } from 'react';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import type { Medication } from '../types/medicine-types';

interface MedicineListItemProps {
    medication: Medication;
}

export const MedicineListItem: FC<MedicineListItemProps> = ({ medication }) => (
    <ListItem
        secondaryAction={
            <ButtonGroup variant="text">
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Add Dose">
                    <AddIcon />
                </IconButton>
            </ButtonGroup>
        }
    >
        <ListItemText primary={medication.name} secondary={medication.notes} />
    </ListItem>
);
