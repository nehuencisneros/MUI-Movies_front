import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material"
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register/Register";


const LoginView: React.FC<{}> = () => {

    const [open, setOpen] = React.useState<boolean>(false);

    const handleDrawer = () => {
        setOpen((state) => !state);
    };

    return (
        <Container maxWidth="sm" >
            { open ? 
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                    >
                        <Login/> 
                    <div style={{display: "flex", border:"solid 1px red", marginTop:"1rem", alignItems:"center"}} >
                        <Typography > If you don't have an account, you can </Typography>
                        <Button variant="text" onClick={()=>handleDrawer()}>Register Here</Button>
                    </div>
                </Grid>
                : 
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                    >
                    <Register/>
                    <div style={{display: "flex", border:"solid 1px red", marginTop:"1rem", alignItems:"center"}} >
                        <Typography > If you have an account, you can </Typography>
                        <Button variant="text" onClick={()=>handleDrawer()}>Login here</Button>
                    </div>
                </Grid>
            }
        </Container>
    );
}


export default LoginView;