import React from "react";
import { Card, CardActions, CardContent, Typography, CardMedia, Divider, Grid, IconButton, Box } from "@mui/material";
import { useAppDispatch } from '../../redux/hooks';
import { removeToSee } from "../../redux/slices/drawerSlice"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface CardDrawerProps {
    id: number;
    backdrop_path: string;
    title: string;
    rating: number;
}

export const CardDrawer: React.FC <CardDrawerProps> = ({ id, backdrop_path, title, rating }) => {

    const dispatch = useAppDispatch();

    const handlerRemove = () => {
        dispatch(removeToSee( id ))
    }

    return(
        <Card sx={{ mt: 1 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" ml="2%">{title}</Typography>
                <CardActions>
                    <IconButton onClick={() => handlerRemove()}>
                        <CloseRoundedIcon />
                    </IconButton>
                </CardActions>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <CardMedia
                    component="img"
                    sx={{ width: 250, my: 1, ml: "2%" }}
                    image={backdrop_path}
                    alt={title}
                />
                <CardContent >
                    <Typography variant="h6" sx={{}}>Rating</Typography>
                    <Typography variant="h6" sx={{ ml: 1.5}} >{rating}</Typography>
                </CardContent>
            </Box>
        </Card>
    )
}