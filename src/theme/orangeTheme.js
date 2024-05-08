import { createTheme } from '@mui/material'
import { red } from "@mui/material/colors";

export const orangeTheme = createTheme({
    palette:{
        primary:{
            main: '#F29113'
        },
        secondary:{
            main: '#15297c'
        },
        mycolor:{
            main: '#94b8d7'
        },
        primaryButton:{
            main: '#F29113',
            light: '#F29113',
            dark: '#F29113',
            contrastText: '#f1f1f1',
        },
        light:{
            main: '#f1f1f1'
        },
        error:{
            main: red.A400
        }
    }
})
