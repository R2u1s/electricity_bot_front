import config from "../config";
import {Palette} from "@mui/material";
import {TypographyOptions} from "@mui/material/styles/createTypography";



export function themeTypography(palette:Palette):TypographyOptions {
    return {
        fontFamily: config.fontFamily,
        h6: {
            fontWeight: 500,
            color: palette.text.primary,
            fontSize: '0.75rem'
        },
        h5: {
            fontSize: '0.875rem',
            color: palette.text.primary,
            fontWeight: 500
        },
        h4: {
            fontSize: '1rem',
            color: palette.text.primary,
            fontWeight: 600
        },
        h3: {
            fontSize: '1.25rem',
            color: palette.text.primary,
            fontWeight: 600
        },
        h2: {
            fontSize: '1.5rem',
            color: palette.text.primary,
            fontWeight: 700
        },
        h1: {
            fontSize: '2.125rem',
            color: palette.text.primary,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: palette.text.secondary
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: palette.text.tertiary
        },
        caption: {
            fontSize: '0.75rem',
            color: palette.text.secondary,
            fontWeight: 500
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em',
            color: palette.text.primary
        },
        body2: {
            letterSpacing: '0em',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: palette.text.primary
        }
    }
}
