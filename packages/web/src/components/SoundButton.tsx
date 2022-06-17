import type { FC } from 'react';
import React from 'react';
import { Pause as PauseIcon, PlayArrow } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useSound from 'use-sound';

export interface ISoundButtonProps<T = string | string[]> {
    source: T;
    playing: boolean;
    setPlaying: (value: boolean) => void;
    volume?: number; // percent
    disabled?: boolean;
}

export const SoundButton: FC<ISoundButtonProps> = ({
    source,
    playing,
    setPlaying,
    volume = 100,
    disabled = false,
}) => {
    const [playSound, { stop: stopSound }] = useSound(source, {
        volume: volume / 100.0,
        playbackRate: 3,
        interrupt: true,
        onplay() {
            setPlaying(true);
        },
        onend() {
            setPlaying(false);
        },
    });

    return (
        <Tooltip title={playing ? 'Stop sound' : 'Test sound'}>
            <IconButton
                onClick={() => (playing ? stopSound() : playSound())}
                disabled={disabled}
            >
                {playing ? <PauseIcon /> : <PlayArrow />}
            </IconButton>
        </Tooltip>
    );
};
