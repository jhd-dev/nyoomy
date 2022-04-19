import { blueGrey, cyan, grey, red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[50],
            paper: blueGrey[200],
        },
        primary: {
            light: teal.A100,
            main: teal[200],
            dark: teal[700],
            contrastText: blueGrey[900],
        },
        secondary: {
            main: cyan[800],
            contrastText: teal[50],
        },
        danger: red,
    },
});
