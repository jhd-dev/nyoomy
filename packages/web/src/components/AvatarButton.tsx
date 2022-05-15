import type { FC } from 'react';
import React from 'react';
import { Feedback, Logout, Settings } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useLogoutMutation, useMeQuery } from '@nyoomy/graphql';
import { RouteLink } from './RouteLink';

export const AvatarButton: FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { data, loading } = useMeQuery();
    const [logout, { client }] = useLogoutMutation();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (loading || data?.me == null) {
        return <Avatar />;
    }

    return (
        <div>
            <Tooltip title={`${data.me.username}'s Account`}>
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar alt={`${data.me.username}'s Avatar`}>
                        {data.me.username.charAt(0).toUpperCase()}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                <Typography>Logged in as: {data.me.username}</Typography>
                <Divider />
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <RouteLink to="/settings">
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" /> Settings
                        </ListItemIcon>
                    </MenuItem>
                </RouteLink>
                <RouteLink to="/feedback">
                    <MenuItem>
                        <ListItemIcon>
                            <Feedback fontSize="small" /> Feedback
                        </ListItemIcon>
                    </MenuItem>
                </RouteLink>
                <MenuItem
                    onClick={async () => {
                        await logout();
                        await client.resetStore();
                    }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" /> Logout
                    </ListItemIcon>
                </MenuItem>
            </Menu>
        </div>
    );
};
