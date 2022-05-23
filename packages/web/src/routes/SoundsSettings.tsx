import type { FC } from 'react';
import React, { useState } from 'react';
import { Pause as PauseIcon, PlayArrow } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Slider from '@mui/material/Slider';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useMySettingsQuery, useUpdateSettingsMutation } from '@nyoomy/graphql';
import type { MySettingsQuery } from '@nyoomy/graphql';
import bellSfx from 'Assets/audio/bell.mp3';
import useSound from 'use-sound';

const volumeSliderMarks = [
    { value: 0, label: '0%' },
    { value: 20 },
    { value: 40 },
    { value: 60 },
    { value: 80 },
    { value: 100, label: '100%' },
];

const defaultIsAudioEnabled = true;
const defaultVolume = 100; // percentage;

export const SoundsSettings: FC = () => {
    const [audioEnabled, setAudioEnabled] = useState<boolean>(
        defaultIsAudioEnabled
    );
    const [mainVolume, setMainVolume] = useState<number>(defaultVolume);
    const [soundPlaying, setSoundPlaying] = useState<boolean>(false);
    const [isShowingError, setIsShowingError] = useState<boolean>(false);

    const { loading } = useMySettingsQuery({
        onCompleted(data: MySettingsQuery) {
            setAudioEnabled((prev) => data.mySettings?.audioEnabled ?? prev);
            setMainVolume((prev) => data.mySettings?.globalVolume ?? prev);
        },
    });
    const [updateSettings] = useUpdateSettingsMutation({
        refetchQueries: ['MySettings'],
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const [playSound, { stop: stopSound }] = useSound(bellSfx, {
        volume: mainVolume / 100.0,
        playbackRate: 3,
        interrupt: true,
        onplay() {
            setSoundPlaying(true);
        },
        onend() {
            setSoundPlaying(false);
        },
    });

    const handleAudioToggle = async (checked: boolean): Promise<void> => {
        if (checked) {
            stopSound();
        }
        setAudioEnabled(checked);
        await sendUpdate(checked, mainVolume);
    };

    const handleMainVolumeSlide = (newVal: number | number[]) => {
        const input = Array.isArray(newVal) ? newVal[0] ?? 0 : newVal;
        const clampedInput = Math.max(Math.min(input, 100), 0);
        setMainVolume(clampedInput);
        setSoundPlaying(false);
    };

    const handleMainVolumeChange = async (newVal: number | number[]) => {
        const input = Array.isArray(newVal) ? newVal[0] ?? 0 : newVal;
        const clampedInput = Math.max(Math.min(input, 100), 0);
        handleMainVolumeSlide(clampedInput);
        await sendUpdate(audioEnabled, clampedInput);
    };

    const sendUpdate = async (
        isAudioEnabled: boolean,
        globalVolume: number
    ) => {
        await updateSettings({
            variables: {
                input: { audioEnabled: isAudioEnabled, globalVolume },
            },
            onCompleted() {
                setIsShowingError(false);
            },
            onError() {
                setIsShowingError(true);
            },
        });
    };

    const hideError = () => {
        setIsShowingError(false);
    };

    return (
        <Box>
            {loading && <LinearProgress />}
            <FormControlLabel
                label="Enable Audio"
                labelPlacement="start"
                control={
                    <Switch
                        checked={audioEnabled}
                        onChange={(e) => handleAudioToggle(e.target.checked)}
                    />
                }
            />
            <Divider />
            <Typography
                id="main-volume-slider-label"
                gutterBottom
                sx={(theme) => ({
                    color: audioEnabled
                        ? theme.palette.text.primary
                        : theme.palette.text.disabled,
                })}
            >
                Global Volume
            </Typography>
            <Stack direction="row" spacing={10}>
                <Slider
                    aria-labelledby="main-volume-slider-label"
                    disabled={!audioEnabled}
                    value={mainVolume}
                    marks={volumeSliderMarks}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value: number) => `${String(value)}%`}
                    onChange={(_e, newVal) => handleMainVolumeSlide(newVal)}
                    onChangeCommitted={(_e, newVal) =>
                        handleMainVolumeChange(newVal)
                    }
                />
                <Tooltip title={soundPlaying ? 'Stop sound' : 'Test sound'}>
                    <IconButton
                        onClick={() =>
                            soundPlaying ? stopSound() : playSound()
                        }
                        disabled={!audioEnabled}
                    >
                        {soundPlaying ? <PauseIcon /> : <PlayArrow />}
                    </IconButton>
                </Tooltip>
            </Stack>
            <Snackbar
                open={isShowingError}
                autoHideDuration={5000}
                onClose={hideError}
            >
                <Alert
                    severity="error"
                    onClose={hideError}
                    sx={{ width: '100%' }}
                >
                    An error occurred
                </Alert>
            </Snackbar>
        </Box>
    );
};
