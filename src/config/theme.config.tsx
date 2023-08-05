import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
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
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em"
                }
            }
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