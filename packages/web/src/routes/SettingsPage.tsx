import type { FC, SyntheticEvent } from 'react';
import React, { useState } from 'react';
import {
    Person as PersonIcon,
    Style,
    Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { Box, Drawer, LinearProgress, Tab, Tabs, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMeQuery } from '@nyoomy/graphql';
import { AppearanceSettings } from './AppearanceSettings';
import { GeneralSettings } from './GeneralSettings';

interface ISettingsPageProps {
    drawerWidth: number;
}

const SettingsPage: FC<ISettingsPageProps> = ({
    drawerWidth,
}: ISettingsPageProps) => {
    const { data, loading } = useMeQuery();
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (_event: SyntheticEvent, newValue: number): void => {
        setCurrentTab(newValue);
    };

    return (
        <Box>
            <Typography variant="h2">Settings</Typography>
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
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={currentTab}
                        onChange={handleChange}
                    >
                        <Tab
                            label="General"
                            icon={<PersonIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            label="Appearance"
                            icon={<Style />}
                            iconPosition="start"
                        />
                        <Tab
                            label="Privacy"
                            icon={<VisibilityIcon />}
                            iconPosition="start"
                        />
                    </Tabs>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {loading ? (
                    <LinearProgress />
                ) : (
                    <>
                        {currentTab === 0 && <GeneralSettings />}
                        {currentTab === 1 && <AppearanceSettings />}
                    </>
                )}
            </Box>
        </Box>
    );
};

export default SettingsPage;
