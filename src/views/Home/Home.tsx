import { Container, Typography } from "@mui/material"

export const HomeView: React.FC<{}> = () => {
    return(
        <Container sx={{mt: 10}} maxWidth="xl" >
            <Typography>estamos en el home</Typography>
        </Container>
    )
}