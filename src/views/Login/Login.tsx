import React from "react";
import { Container, Typography } from "@mui/material"

export const LoginView: React.FC<{}> = () => {
    return(
        <Container sx={{mt: 10}} maxWidth="xl" >
            <Typography>estamos en el login</Typography>
        </Container>
    )
}