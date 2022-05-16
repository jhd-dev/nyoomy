import type { FC } from 'react';
import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { Weekday } from '@nyoomy/graphql';

interface IRepeatInputProps {
    doesRepeat: boolean;
    onRepeatToggle: (switched: boolean) => void;
    repeatingWeekdays: Weekday[];
    onRepeatingWeekdaysChange: (newDays: Weekday[]) => void;
}

const weekdays = [
    Weekday.Sunday,
    Weekday.Monday,
    Weekday.Tuesday,
    Weekday.Wednesday,
    Weekday.Thursday,
    Weekday.Friday,
    Weekday.Saturday,
];

const weekdaysMap = {
    [Weekday.Sunday]: { icon: 'S', label: 'Sunday' },
    [Weekday.Monday]: { icon: 'M', label: 'Monday' },
    [Weekday.Tuesday]: { icon: 'T', label: 'Tuesday' },
    [Weekday.Wednesday]: { icon: 'W', label: 'Wednesday' },
    [Weekday.Thursday]: { icon: 'T', label: 'Thursday' },
    [Weekday.Friday]: { icon: 'F', label: 'Friday' },
    [Weekday.Saturday]: { icon: 'S', label: 'Saturday' },
};

export const RepeatInput: FC<IRepeatInputProps> = ({
    doesRepeat,
    onRepeatToggle,
    repeatingWeekdays,
    onRepeatingWeekdaysChange,
}) => {
    const handleRepeatToggle = (newVal: boolean) => {
        onRepeatToggle(newVal);
    };

    const handleWeekdaysChange = (val: Weekday | Weekday[]) => {
        if (Array.isArray(val)) {
            onRepeatingWeekdaysChange(val);
            return;
        }
        onRepeatingWeekdaysChange(
            val in repeatingWeekdays
                ? repeatingWeekdays.filter((day) => day !== val)
                : [...repeatingWeekdays, val]
        );
    };

    return (
        <Stack>
            <FormControlLabel
                value={doesRepeat}
                checked={doesRepeat}
                control={
                    <Switch
                        onChange={(e) => handleRepeatToggle(e.target.checked)}
                        color="primary"
                    />
                }
                label="Repeats?"
                labelPlacement="start"
            />
            <ToggleButtonGroup
                disabled={!doesRepeat}
                value={repeatingWeekdays}
                onChange={(_e, val: Weekday | Weekday[]) =>
                    handleWeekdaysChange(val)
                }
                orientation="horizontal"
            >
                {weekdays.map((day) => (
                    <ToggleButton key={day} value={day}>
                        <Typography>{weekdaysMap[day].icon}</Typography>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Stack>
    );
};
