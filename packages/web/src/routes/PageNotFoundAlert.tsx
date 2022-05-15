import type { FC } from 'react';
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { RouteLink } from '../components/RouteLink';

const PageNotFoundAlert: FC = () => (
    <Alert severity="error">
        <AlertTitle sx={{ textAlign: 'left' }}>Page not found.</AlertTitle>
        Make sure the URL is correct or return to our{' '}
        <RouteLink to="/">homepage</RouteLink>.
    </Alert>
);

export default PageNotFoundAlert;
