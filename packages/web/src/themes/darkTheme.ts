import { blueGrey, cyan, red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: blueGrey[900],
            paper: blueGrey[700],
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
