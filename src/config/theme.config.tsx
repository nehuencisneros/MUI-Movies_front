import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette{
    BG = "#12181b",
    BlueElec = "#0066ff",
    FONT_GLOBAL = 'Bebas Neue',
    ERROR_MAIN ="#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.2)",
    SUCCESS_MAIN = "#66BB6A",
    BG_SUCCESS_MAIN = "RGBA(102,187,106,0.2)"
}


const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:themePalette.BG
        },
        primary:{
            main: themePalette.BlueElec,
        }
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
        h1:{
            fontSize: '2rem', // Default font size
            '@media (min-width:600px)': {
              fontSize: '4rem', // Adjust font size for medium screens
            },
            '@media (min-width:960px)': {
              fontSize: '6rem', // Adjust font size for large screens
            },
        },
        h5:{
            fontSize: '0.8rem', // Default font size
            '@media (min-width:600px)': {
              fontSize: '1.3rem', // Adjust font size for medium screens
            },
            '@media (min-width:960px)': {
              fontSize: '1.9rem', // Adjust font size for large screens
            },
        },
        button:{
            fontSize: '0.6rem',
            // Default font size
            '@media (min-width:400px)': {
                fontSize: '0.8rem', // Adjust font size for medium screens
            },
            '@media (min-width:600px)': {
              fontSize: '1.1rem', // Adjust font size for medium screens
            },
            '@media (min-width:960px)': {
              fontSize: '1.5rem', // Adjust font size for large screens
            },
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                    minWidth:"50px",
                    paddingBlock:0.5
                }
            },
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius: "0.5em",
                    fontSize: "2em"
                }
            },
            styleOverrides:{
                standardError:{
                    border: "1px solid" + themePalette.ERROR_MAIN,
                    background: themePalette.BG_ERROR_MAIN
                },
                standardSuccess:{
                    border: "1px solid" + themePalette.SUCCESS_MAIN,
                    background: themePalette.BG_SUCCESS_MAIN
                }
            }
        }
    }
});

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
    <ThemeProvider theme={theme}> 
        <CssBaseline/>
        {children}
    </ThemeProvider>
    )
};