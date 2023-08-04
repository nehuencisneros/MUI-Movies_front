import React from "react";
import { Button, Container } from "@mui/material"
import { useNotification } from "../../context/notification.context";

export const HomeView: React.FC<{}> = () => {
    const { getError } = useNotification()
    
    const handleClick = () => {
        getError("funcionan las notificaciones")
    }
    return(
        <Container sx={{mt: 10}} maxWidth="xl" >
            <Button fullWidth variant="contained" onClick={handleClick}>
                estamos en el home
            </Button>
        </Container>
    )
}