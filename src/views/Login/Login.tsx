import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type loginForm = {
    email: string,
    password:string
}

export const LoginView: React.FC<{}> = () => {
    const { getError, getSuccess } = useNotification()
    const [form, setForm] = useState<loginForm>({
        email:"",
        password:""
    })

    const handleForm = (event:any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.ChangeEvent<unknown>) => {
        event.preventDefault();
        LoginValidate.validate(form)
            .then(()=>{getSuccess(JSON.stringify(form))})
            .catch((error)=>{ getError(error.message)})
    }


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
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField 
                                name="email"
                                fullWidth 
                                type="text"
                                margin="normal"
                                label="Email" 
                                sx={{ mt: 1, mb: 1 }} 
                                onChange={handleForm}
                            />
                            <TextField 
                                name="password"
                                fullWidth 
                                type="password"
                                margin="normal"
                                label="Password" 
                                sx={{ mt: 1, mb: 1 }} 
                                onChange={handleForm}
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