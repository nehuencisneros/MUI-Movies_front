import { Box , AppBar, Toolbar} from "@mui/material";
import React from "react";

export const NavBar: React.FC<{}> = () => {
    return (
        <Box sx={{flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar></Toolbar>
            </AppBar>
        </Box>
    )
}