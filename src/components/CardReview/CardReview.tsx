import React from "react";
import { Card, CardActions, CardContent, Typography, CardMedia, Divider, Grid, IconButton, Box, Rating } from "@mui/material";
import { useAppDispatch } from '../../redux/hooks';

interface CardReviewProps {
    id: string,
    author: string,
    content: string,
    rating: number | null,
}

export const CardReview: React.FC <CardReviewProps> = ({ id, author, content, rating}) => {

    return(
        <Card sx={{ 
            mt: 1, 
            paddingInline: 2 ,
            border: "solid 1px grey",
            backgroundColor: "#414648"
            }}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h4">
                    {author}
                </Typography>
                { rating ? 
                    <Box display={"flex"} alignItems={"center"} sx={{border: "solid 1px red"}}>
                        <Typography variant="h5" sx={{marginRight:2, border: "solid 1px yellow"}}>
                            Rating: 
                        </Typography>
                        <Rating  size="small" sx={{border: "solid 1px blue"}} name={`rating-${id}`} value={rating} precision={0.01} readOnly />
                    </Box>
                        : 
                    <Box display={"flex"} alignItems={"center"} sx={{border: "solid 1px red"}}> 
                        <Typography variant="h5">
                            No rating added
                        </Typography>
                    </Box>
                }
            </Box>
            <Divider />
            <Typography variant="h6" textAlign={"start"}>
                {content}
            </Typography>
        </Card>
    )
}