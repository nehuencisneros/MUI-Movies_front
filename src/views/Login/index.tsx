import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material"
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register/Register";


const LoginView: React.FC<{}> = () => {

    return (
        <Container maxWidth="sm" >
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
                >
                <Login/>
                {
                    <Register/>
                }
                <div style={{display: "flex", border:"solid 1px red", marginTop:"1rem", alignItems:"center"}} >
                    <Typography > If you don't have an account, you can </Typography>
                    <Button variant="text">Register Here</Button>
                </div>
            </Grid>
        </Container>
    );
}


export default LoginView;