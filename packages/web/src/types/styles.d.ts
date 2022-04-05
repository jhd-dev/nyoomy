import '@mui/material/styles';

declare module '@mui/material/styles' {
    // interface Theme {
    //     status: {
    //         danger: React.CSSProperties['color'];
    //     };
    // }

    interface Palette {
        danger: Palette['primary'];
    }
    interface PaletteOptions {
        danger: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }

    // interface ThemeOptions {
    //     status?: {
    //         danger?: React.CSSProperties['color'];
    //     };
    // }
}
