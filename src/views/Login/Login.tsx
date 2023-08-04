import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"

type loginForm = {
    email: string,
    password:string
}

export const LoginView: React.FC<{}> = () => {

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

    const handleSubmmit = (event: any)=> {
        event.preventDefault();
        console.log(form)
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
                        <Box component="form" onSubmit={handleSubmmit}>
                            <TextField 
                                name="email"
                                fullWidth 
                                type="text"
                                margin="normal"
                                label="Email" 
                                sx={{ mt: 1, mb: 1 }} 
                                required 
                                onChange={handleForm}
                            />
                            <TextField 
                                name="password"
                                fullWidth 
                                type="password"
                                margin="normal"
                                label="Password" 
                                sx={{ mt: 1, mb: 1 }} 
                                required 
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