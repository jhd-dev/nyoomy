import type { FC, ReactNode } from 'react';
import React from 'react';
import Typography from '@mui/material/Typography';

interface IPageTitleProps {
    children?: ReactNode;
}

export const PageTitle: FC<IPageTitleProps> = ({ children }) => (
    <Typography component="h1" variant="h5">
        {children}
    </Typography>
);
