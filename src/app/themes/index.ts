import {createTheme, Theme} from '@mui/material/styles';
// @ts-ignore
import colors from '../../assets/scss/_themes-vars.module.scss';
import { themePalette } from './palette'
import { themeTypography } from './typography'
import { UIMode} from "types/common"
import {PaletteColors} from "types/palette"
import createPalette from "@mui/material/styles/createPalette"


declare module '@mui/material/styles/createPalette' {
    interface CommonColors {
        blue: string
        red: string
        green: string
        orange: string
        yellow: string
        purple: string
    }

    interface TypeText {
        tertiary: string
    }
}

declare module '@mui/material/styles' {
    interface Theme {
        customField: {[key:string]:string}
    }
    interface ThemeOptions {
        customField?: {[key:string]:string}
    }
}


export function theme(uiMode:UIMode):Theme {
    const paletteOptions = themePalette(uiMode, colors as PaletteColors)

    const palette = createPalette(paletteOptions)

    return createTheme({
        palette: paletteOptions,
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '8px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(palette),
        components: {
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        padding: 0,
                        margin: 0
                    }
                }
            }
        }
    })
}

export default theme;
