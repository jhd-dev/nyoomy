import type { FC } from 'react';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useMeQuery } from '@nyoomy/graphql';

export const AvatarButtonMenu: FC = () => {
    const { data, loading } = useMeQuery();
    if (loading || data?.me == null) {
        return <Avatar />;
    }
    return (
        <>
            <Avatar alt={`${data.me.username}'s Avatar`}>
                {data.me.username.charAt(0).toUpperCase()}
            </Avatar>
        </>
    );
};
