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
import { CategoryColor, useUpdateTagMutation } from '@nyoomy/graphql';
import { ColorRadio } from './ColorRadio';

export interface ITagChipProps {
    tagId: string;
    label: string;
    color: CategoryColor;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IColorOption {
    color: string;
    name: string;
}

export const categoryColors: CategoryColor[] = [
    CategoryColor.Default,
    CategoryColor.Red,
    CategoryColor.Yellow,
    CategoryColor.Green,
    CategoryColor.Blue,
];

export const colorOptions: Record<CategoryColor, IColorOption> = {
    DEFAULT: { color: grey[400], name: 'Default' },
    RED: { color: red[200], name: 'Red' },
    YELLOW: { color: yellow[200], name: 'Yellow' },
    GREEN: { color: green[200], name: 'Green' },
    BLUE: { color: blue[200], name: 'Blue' },
};

export const TagChip: FC<ITagChipProps> = ({ tagId, ...props }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [label, setLabel] = useState<string>(props.label);
    const [color, setColor] = useState<CategoryColor>(props.color);

    const [updateTag] = useUpdateTagMutation();

    const colorOption = colorOptions[color];

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
                        placeholder={label}
                        name="label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        onBlur={(e) => updateLabel(e.target.value)}
                    />
                    <Divider />
                    <Typography>Color: {colorOption.name}</Typography>
                    <RadioGroup row>
                        {categoryColors.map((cc: CategoryColor) => (
                            <ColorRadio
                                key={cc}
                                color={colorOptions[cc].color}
                                colorName={colorOptions[cc].name}
                                size={32}
                                checked={cc === color}
                                onChange={async (e) => {
                                    if (e.target.checked) {
                                        await updateTag({
                                            variables: {
                                                input: { id: tagId, color: cc },
                                            },
                                        });
                                        setColor(cc);
                                    }
                                }}
                            />
                        ))}
                    </RadioGroup>
                </Box>
            </Modal>
            <Chip
                label={label}
                onClick={handleOpen}
                sx={
                    color === 'DEFAULT'
                        ? undefined
                        : { backgroundColor: colorOption.color }
                }
            />
        </>
    );
};
