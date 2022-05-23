import type { FC, ReactNode } from 'react';
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import { blue, green, grey, red, yellow } from '@mui/material/colors';
import { CategoryColor, useUpdateTagMutation } from '@nyoomy/graphql';
import { EditTagDialog } from './EditTagDialog';

export interface ITagChipProps {
    children?: ReactNode;
    tagId: string;
    label: string;
    color: CategoryColor;
    handleDelete?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

    const [updateTag] = useUpdateTagMutation({
        refetchQueries: ['MyTags', 'MyTodos'],
    });

    const colorOption = colorOptions[color];

    const handleOpen = () => {
        setMenuOpen(true);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    const updateLabel = async (newLabel: string) => {
        const parsedLabel = newLabel.trim();
        if (parsedLabel.length > 0) {
            await updateTag({
                variables: {
                    input: { id: tagId, label: parsedLabel },
                },
            });
            setLabel(parsedLabel);
        }
    };

    return (
        <>
            <EditTagDialog
                open={menuOpen}
                handleClose={handleClose}
                color={color}
                colorOption={colorOption}
                label={label}
                updateLabel={updateLabel}
                onSelect={async (cc: CategoryColor) => {
                    await updateTag({
                        variables: {
                            input: { id: tagId, color: cc },
                        },
                    });
                    setColor(cc);
                }}
            />
            <Chip
                label={label}
                onClick={handleOpen}
                sx={
                    color === 'DEFAULT'
                        ? undefined
                        : { backgroundColor: colorOption.color }
                }
                onDelete={props.handleDelete}
            />
        </>
    );
};
