import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type loginForm = {
    email: string,
    password:string
}

const LoginView: React.FC<{}> = () => {
    const { getSuccess } = useNotification();

    const formik = useFormik<loginForm>({
        initialValues: {
            email:"",
            password: "",
        },
        validationSchema: LoginValidate,
        onSubmit: (values: loginForm) => {
            getSuccess(JSON.stringify(values))
        }
    });
    
    return (
        <Container maxWidth="sm" >
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant="h4" sx={{mb: 1 }} >Iniciar sesión</Typography>
                        <Box component="form" onSubmit={formik.handleSubmit}>
                            <TextField 
                                name="email"
                                fullWidth 
                                type="text"
                                margin="normal"
                                label="Email" 
                                sx={{ mt: 1, mb: 1 }} 
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField 
                                name="password"
                                fullWidth 
                                type="password"
                                margin="normal"
                                label="Password" 
                                sx={{ mt: 1, mb: 1 }} 
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button 
                                fullWidth 
                                type="submit"
                                variant="contained"
                                sx={{mt:1, mb:2}}
                            >Iniciar sesión</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}


export default LoginView;