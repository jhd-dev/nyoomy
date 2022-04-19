import { blueGrey, cyan, red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const black = '#000000';

export const oledTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: black,
            paper: blueGrey[700],
        },
        primary: {
            light: teal.A100,
            main: teal[200],
            dark: teal[700],
            contrastText: black,
        },
        secondary: {
            main: cyan[800],
            contrastText: teal[50],
        },
        danger: red,
    },
});
