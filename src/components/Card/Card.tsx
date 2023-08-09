import React from "react";
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Divider, Box } from "@mui/material";

type CardProps = {
    image: string, 
    title: string, 
    overview: string
}

export const CardComponent: React.FC<CardProps> = ({image, title, overview}) => {
    
    return(
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia 
                component="img"
                height="200"
                image={image}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 'auto' }}>
                <Typography variant="h4" align="center" height={80}>
                    {title.length > 40 ? title.slice(0, 40) + "..." : title}
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body2" color="text.secondary" mt={2} height={100}>
                    {overview.length > 250 ? overview.slice(0, 250) + "..." : overview}
                </Typography>
            </CardContent>
        </Card>
    )
}