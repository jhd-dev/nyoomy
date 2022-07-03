import type { FC } from 'react';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { getMedications } from '../types/medicine-types';

export const MedicationDialog: FC = () => {
    const medicationId = '';
    const medication = getMedications().data.find((m) => m.id === medicationId);
    return (
        <Dialog open>
            <FormControlLabel control={<TextField />} label="Name" />
        </Dialog>
    );
};
