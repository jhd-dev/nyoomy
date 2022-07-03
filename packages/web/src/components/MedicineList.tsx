import type { FC } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { getMedications } from '../types/medicine-types';
import { MedicineListItem } from './MedicineListItem';

export const MedicineList: FC = () => {
    const { data: medications, loading } = getMedications();
    return (
        <Box>
            {medications.map((medication) => (
                <MedicineListItem key={medication.id} medication={medication} />
            ))}
            {loading && <Skeleton />}
        </Box>
    );
};
