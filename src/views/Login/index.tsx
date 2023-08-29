import React, { useState } from "react";
import { Container, Grid } from "@mui/material"
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
                <Register/>
            </Grid>
        </Container>
    );
}


export default LoginView;