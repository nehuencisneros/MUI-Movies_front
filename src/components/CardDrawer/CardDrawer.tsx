import React from "react";
import { Card, CardActions, CardContent, Typography, CardMedia, Divider, Grid, IconButton } from "@mui/material";
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
        <Card>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={image}
                alt={title}
            />
            <Grid container sx={{ mx: 1 }}>
                <Grid item xs={9}>
                <CardContent>
                    <Typography variant="h4">{title}</Typography>
                    <Divider />
                    <Typography variant="h5">{rating}</Typography>
                </CardContent>
                </Grid>
                <Grid item xs={2}>
                <CardActions>
                    <IconButton>
                    <CloseRoundedIcon />
                    </IconButton>
                </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}