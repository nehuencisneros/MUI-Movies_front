import React from "react";
import { Card, CardActions, CardContent, Typography, CardMedia, Divider, Grid, IconButton, Box } from "@mui/material";
import { useAppDispatch } from '../../redux/hooks';

interface CardReviewProps {
    id: string,
    author: string,
    content: string,
}

export const CardReview: React.FC <CardReviewProps> = ({ id, author, content}) => {

    const dispatch = useAppDispatch();

    return(
        <Card sx={{ mt: 2, padding: 2 ,justifyContent:"center", width: "100%"}}>
            <Typography variant="h4" sx={{ mt: 1 }}>
                {author}
            </Typography>
            <Divider />
            <Typography variant="h6">
                {content}
            </Typography>
        </Card>
    )
}