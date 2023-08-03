import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

enum themePalette{
    BG = "#12181b",
    BlueElec = "#172DE2"
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