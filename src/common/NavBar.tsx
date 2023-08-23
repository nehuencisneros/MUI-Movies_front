import React from "react";
import { Box , AppBar, Toolbar, Container, Grid, Button, Typography, Stack, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MoviesToSee } from "./MoviesToSee";
import { useAppSelector } from "../redux/hooks";

export const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState<boolean>(false);
    const cantMoviesAdded = useAppSelector(state => state.drawer.length)

    const handleDrawer = () => {
        setOpen((state) => !state);
    };

    return (
        <Box sx={{flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl" sx={{my:2}}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Button  variant="text" onClick={()=>navigate("/")}>Movies Stack</Button>
                            </Grid>
                            <Grid item>
                                <Stack spacing={1} direction={"row"}>
                                    <Badge badgeContent={cantMoviesAdded} color="error">
                                        <Button sx={{paddingInline:"10px"}} variant="contained" onClick={()=>handleDrawer()}>Movies To See</Button>
                                    </Badge>
                                    <Button sx={{paddingInline:"10px"}} variant="outlined">Sing In</Button>
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