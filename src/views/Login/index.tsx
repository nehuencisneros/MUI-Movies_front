import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import { Login } from "../../components/Login/Login";


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
            </Grid>
        </Container>
    );
}


export default LoginView;