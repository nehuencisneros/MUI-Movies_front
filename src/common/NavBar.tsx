import React from "react";
import { Box , AppBar, Toolbar, Container, Grid, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MoviesToSee } from "./MoviesToSee";

export const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState<boolean>(false);

    const handleDrawer = () => {
        setOpen((state) => !state);
    };

    return (
        <Box sx={{flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Button variant="text" onClick={()=>navigate("/")}>Movies Stack</Button>
                            </Grid>
                            <Grid item>
                                <Stack spacing={2} direction={"row"}>
                                    <Button variant="contained" onClick={()=>handleDrawer()}>Movies To See</Button>
                                    <Button variant="contained" onClick={()=>navigate("login")}>Login</Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <MoviesToSee
                open={open}
                handleDrawer={handleDrawer}
            />
        </Box>
    )
}