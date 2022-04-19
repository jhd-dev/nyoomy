import { blueGrey, cyan, red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const white = '#ffffff';
const black = '#000000';

export const highContrastTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: black,
            paper: blueGrey[700],
        },
        primary: {
            light: white,
            main: '#00ffff',
            dark: teal[900],
            contrastText: black,
        },
        secondary: {
            main: cyan[600],
            contrastText: white,
        },
        danger: red,
    },
});
