import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: purple,
        blackx: {
            main: '#000',
            contrastText: '#fff',
        }
    },
});