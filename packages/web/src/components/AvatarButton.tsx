import type { FC } from 'react';
import React from 'react';
import { Feedback, Logout, Settings } from '@mui/icons-material';
import {
    Divider,
    IconButton,
    ListItemIcon,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { useLogoutMutation, useMeQuery } from '@nyoomy/graphql';
import { Link } from 'react-router-dom';

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
                <Link to="/settings">
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" /> Settings
                        </ListItemIcon>
                    </MenuItem>
                </Link>
                <Link to="/feedback">
                    <MenuItem>
                        <ListItemIcon>
                            <Feedback fontSize="small" /> Feedback
                        </ListItemIcon>
                    </MenuItem>
                </Link>
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
