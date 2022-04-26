import type { FC } from 'react';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { blue, green, grey, red, yellow } from '@mui/material/colors';
import { ColorRadio } from './ColorRadio';
import type { ITag } from '../routes/TodoDetailsRoute';

export interface ITagChipProps {
    tag: ITag;
}

export interface IColorOption {
    color: string;
    name: string;
}

const colorOptions: IColorOption[] = [
    { color: grey[400], name: 'Default' },
    { color: red[200], name: 'Red' },
    { color: yellow[200], name: 'Yellow' },
    { color: green[200], name: 'Green' },
    { color: blue[200], name: 'Blue' },
];

export const TagChip: FC<ITagChipProps> = ({ tag }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [label, setLabel] = useState<string>(tag.label);

    const [color, setColor] = useState<string>(tag.colorName);

    const handleOpen = () => {
        setMenuOpen(true);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    const updateLabel = (newLabel: string) => {
        const parsedLabel = newLabel.trim();
        if (parsedLabel.length > 0) {
            setLabel(parsedLabel);
        }
    };

    return (
        <>
            <Modal open={menuOpen} onClose={handleClose}>
                <Box>
                    <TextField
                        autoFocus
                        label="Tag Name"
                        margin="dense"
                        placeholder={tag.label}
                        name="label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        onBlur={(e) => updateLabel(e.target.value)}
                    />
                    <Divider />
                    <Typography>Color: {tag.colorName}</Typography>
                    <RadioGroup row>
                        {colorOptions.map((option) => (
                            <ColorRadio
                                key={option.color}
                                color={option.color}
                                colorName={option.name}
                                size={32}
                                checked={option.name === color}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setColor(option.name);
                                    }
                                }}
                            />
                        ))}
                    </RadioGroup>
                </Box>
            </Modal>
            <Chip
                label={tag.label}
                onClick={handleOpen}
                sx={
                    color === 'Default'
                        ? undefined
                        : {
                              backgroundColor: colorOptions.find(
                                  (option) => option.name === color
                              )?.color,
                          }
                }
            />
        </>
    );
};
