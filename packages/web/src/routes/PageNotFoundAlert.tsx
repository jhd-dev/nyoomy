import type { FC } from 'react';
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';

const PageNotFoundAlert: FC = () => (
    <Alert severity="error">
        <AlertTitle sx={{ textAlign: 'left' }}>Page not found.</AlertTitle>
        Make sure the URL is correct or return to our{' '}
        <Link to="/">homepage</Link>.
    </Alert>
);

export default PageNotFoundAlert;
