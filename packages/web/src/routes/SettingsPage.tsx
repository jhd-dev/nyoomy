import type { FC } from 'react';
import React from 'react';
import {
    Person as PersonIcon,
    Style,
    Visibility as VisibilityIcon,
} from '@mui/icons-material';
import {
    Box,
    Divider,
    Drawer,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import { useMeQuery } from '@nyoomy/graphql';
import { Header } from '../components/Header';

interface ISettingsPageProps {
    drawerWidth: number;
}

const SettingsPage: FC<ISettingsPageProps> = ({
    drawerWidth,
}: ISettingsPageProps) => {
    const { data, loading } = useMeQuery();
    return (
        <Box>
            <Header />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="General" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Style />
                            </ListItemIcon>
                            <ListItemText primary="Appearance" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <VisibilityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Privacy" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {loading ? (
                    <LinearProgress />
                ) : (
                    <Typography>Lorem ipsum dolor</Typography>
                )}
            </Box>
        </Box>
    );
};

export default SettingsPage;
