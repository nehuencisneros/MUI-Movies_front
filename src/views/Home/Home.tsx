import React from "react";
import { Button, Container } from "@mui/material"

export const HomeView: React.FC<{}> = () => {
    
    return(
        <Container sx={{mt: 10}} maxWidth="xl" >
            <Button fullWidth variant="contained">
                estamos en el home
            </Button>
        </Container>
    )
}