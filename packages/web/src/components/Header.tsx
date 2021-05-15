import type { FC } from 'react';
import React from 'react';
import { APP_NAME } from '@nyoomy/global';
import { Link } from 'react-router-dom';
import { LoginStatus } from './LoginStatus';

export const Header: FC = () => (
    <header>
        <Link to="/">{APP_NAME}</Link>
        <LoginStatus />
    </header>
);
