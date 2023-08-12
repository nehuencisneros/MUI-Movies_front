import React from "react";
import { Card, CardActions, CardContent, Typography, CardMedia, Divider, Grid, IconButton, Box } from "@mui/material";
import { useAppDispatch } from '../../redux/hooks';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface CardDrawerProps {
    id: number;
    image: string;
    title: string;
    rating: number;
}

export const CardDrawer: React.FC <CardDrawerProps> = ({ id, image, title, rating }) => {

    const dispatch = useAppDispatch();

    return(
        <Card sx={{ mt: 1 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" ml="2%">{title}</Typography>
                <CardActions>
                    <IconButton>
                        <CloseRoundedIcon />
                    </IconButton>
                </CardActions>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <CardMedia
                    component="img"
                    sx={{ width: 250, my: 1, ml: "2%" }}
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="h6" >Rating</Typography>
                    <Typography variant="h6" >{rating}</Typography>
                </CardContent>
            </Box>
        </Card>
    )
}