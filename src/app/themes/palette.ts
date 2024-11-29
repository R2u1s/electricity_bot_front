import {UIMode} from "types/common";
import {PaletteOptions} from "@mui/material/styles/createPalette";
import {PaletteColors} from "types/palette";


export function themePalette(uiMode: UIMode, colors: PaletteColors): PaletteOptions { //
    return {
        mode: uiMode,
        primary: { main: uiMode === "dark" ? colors.darkPrimary : colors.primary },
        secondary: { main: uiMode === "dark" ? colors.darkSecondary : colors.secondary },
        error: { main: uiMode === "dark" ? colors.darkError : colors.error },
        warning: { main: uiMode === "dark" ? colors.darkWarning : colors.warning },
        info: { main: uiMode === "dark" ? colors.darkInfo : colors.info },
        success: { main: uiMode === "dark" ? colors.darkSuccess : colors.success },
        common: {
            black: uiMode === "dark" ? colors.darkBlack : colors.black,
            white: uiMode === "dark" ? colors.darkWhite : colors.white,
            blue: uiMode === "dark" ? colors.darkBlue : colors.blue,
            red: uiMode === "dark" ? colors.darkRed : colors.red,
            green: uiMode === "dark" ? colors.darkGreen : colors.green,
            orange: uiMode === "dark" ? colors.darkOrange : colors.orange,
            yellow: uiMode === "dark" ? colors.darkYellow : colors.yellow,
            purple: uiMode === "dark" ? colors.darkPurple : colors.purple
        },
        grey: {
            100: colors.grey100,
            300: colors.grey300,
            500: colors.grey500,
            700: colors.grey700,
            900: colors.grey900
        },
        text: {
            primary: uiMode === "dark" ? colors.darkTextPrimary : colors.textPrimary,
            secondary: uiMode === "dark" ? colors.darkTextSecondary : colors.textSecondary ,
            tertiary: uiMode === "dark" ? colors.darkTextTertiary : colors.textTertiary,
            disabled: uiMode === "dark" ? colors.grey700 : colors.grey300
        },
        divider: uiMode === "dark" ? colors.grey700 : colors.grey300,
        background: {
            default: uiMode === "dark" ? colors.darkBackground : colors.background ,
            paper: uiMode === "dark" ? colors.darkPaper : colors.paper
        },
        tonalOffset: {
            light: 0.9,
            dark: 0.2
        }
    };
}

export const enum TextColor {
    grey = '#989898',
    red = '#ff0000',
    green = '#0bad0b',
    black = '#000000'
}
