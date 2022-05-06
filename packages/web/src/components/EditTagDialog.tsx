import type { FC } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import type { CategoryColor } from '@nyoomy/graphql';
import { ColorRadio } from './ColorRadio';
import { categoryColors, colorOptions } from './TagChip';
import type { IColorOption } from './TagChip';

export interface IEditTagDialogProps {
    open: boolean;
    handleClose: () => void;
    label: string;
    updateLabel: (value: string) => void;
    color: CategoryColor;
    colorOption: IColorOption;
    onSelect:
        | ((cc: CategoryColor) => void)
        | ((cc: CategoryColor) => Promise<void>);
}

export const EditTagDialog: FC<IEditTagDialogProps> = ({
    open,
    handleClose,
    label,
    updateLabel,
    colorOption,
    onSelect,
    color,
}) => (
    <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { padding: 1 } }}
    >
        <Box>
            <TextField
                label="Tag Name"
                type="text"
                margin="dense"
                placeholder={label}
                name="tag-label"
                onChange={(e) => updateLabel(e.target.value)}
                onBlur={(e) => updateLabel(e.target.value)}
            />
            <Divider />
            <FormLabel id="tag-color-button-group-label">
                Color: {colorOption.name}
            </FormLabel>
            <RadioGroup row aria-labelledby="tag-color-button-group-label">
                {categoryColors.map((cc: CategoryColor) => (
                    <ColorRadio
                        key={cc}
                        color={colorOptions[cc].color}
                        colorName={colorOptions[cc].name}
                        size={32}
                        checked={cc === color}
                        onChange={async (e) => {
                            if (e.target.checked) {
                                await onSelect(cc);
                            }
                        }}
                    />
                ))}
            </RadioGroup>
        </Box>
    </Dialog>
);
