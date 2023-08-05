import React from "react";
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Divider } from "@mui/material";


export const CardComponent: React.FC<{image: string, title: string, overview: string}> = ({image, title, overview}) => {
    
    return(
        <Card sx={{maxWidth:450}}>
            <CardMedia 
                component="img"
                height="300"
                image={image}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4"  height={100}>
                    {title}
                </Typography>
                <Divider/>
                <Typography variant="body2" color="text.secondary" mt={2} height={100}>
                    {overview}
                </Typography>
            </CardContent>
        </Card>
    )
}