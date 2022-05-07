import type { ChangeEvent, FC } from 'react';
import React from 'react';
import Radio from '@mui/material/Radio';
import Tooltip from '@mui/material/Tooltip';

interface IColorRadioProps {
    color: string;
    colorName: string;
    checked?: boolean;
    size?: 'small' | 'medium' | number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ColorRadio: FC<IColorRadioProps> = ({
    color,
    colorName,
    size,
    checked,
    onChange,
}) => (
    <Tooltip title={colorName}>
        <Radio
            sx={{
                color,
                '&.Mui-checked': { color },
                '&.MuiSvgIcon-root': {
                    'fontSize': typeof size === 'number' ? size : undefined,
                    '&.Mui-checked': { color },
                },
            }}
            size={typeof size === 'string' ? size : undefined}
            checked={checked ?? false}
            onChange={onChange}
        />
    </Tooltip>
);
