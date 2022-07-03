import type { FC } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import { MedicineList } from '../components/MedicineList';

export const MedicinePage: FC = () => {
    console.log('');
    return (
        <Box>
            <MedicineList />
        </Box>
    );
};
