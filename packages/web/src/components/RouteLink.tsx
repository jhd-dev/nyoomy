import type { FC } from 'react';
import React from 'react';
import MuiLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

interface IRouteLinkProps {
    to: string;
}

export const RouteLink: FC<IRouteLinkProps> = ({ to, children }) => (
    <MuiLink component={RouterLink} to={to}>
        {children}
    </MuiLink>
);
