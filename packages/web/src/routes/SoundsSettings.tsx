import type { FC } from 'react';
import React, { useState } from 'react';
import { Pause as PauseIcon, PlayArrow } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
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

export const SoundsSettings: FC = () => {
    const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
    const [mainVolume, setMainVolume] = useState<number>(100);
    const [soundPlaying, setSoundPlaying] = useState<boolean>(false);

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

    const handleAudioToggle = (checked: boolean): void => {
        if (checked) {
            stopSound();
        }
        setAudioEnabled(checked);
    };

    const handleMainVolumeChange = (newVal: number | number[]) => {
        const input = Array.isArray(newVal) ? newVal[0] ?? 0 : newVal;
        setMainVolume(Math.max(Math.min(input, 100), 0));
        setSoundPlaying(false);
    };

    return (
        <Box>
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
                    onChange={(_e, newVal): void =>
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
        </Box>
    );
};
