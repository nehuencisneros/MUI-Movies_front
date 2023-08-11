import React from "react";
import { Card, CardMedia } from "@mui/material";
import { useAppDispatch } from '../../redux/hooks';

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
                sx={{ width: 151 }}
                image={image}
                alt={title}
            />
        </Card>
    )
}