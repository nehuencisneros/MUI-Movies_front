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
        <Card sx={{ 
            mt: 1, 
            paddingInline: 2 ,
            border: "solid 1px grey",
            backgroundColor: "#414648"
            }}>
            <Typography variant="h4">
                {author}
            </Typography>
            <Divider />
            <Typography variant="h6" textAlign={"start"}>
                {content}
            </Typography>
        </Card>
    )
}