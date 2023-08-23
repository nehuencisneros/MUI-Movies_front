import React from "react";
import { Card, Typography, Divider, Box, Rating } from "@mui/material";


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
            paddingInline: "8px" ,
            border: "solid 1px grey",
            backgroundColor: "#414648"
            }}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                <Typography variant="h4">
                    {author}
                </Typography>
                { rating ? 
                    <Box display={"flex"} alignItems={"center"} >
                        <Typography variant="h5" sx={{marginRight:"0.5rem"}}>
                            Rating: 
                        </Typography>
                        <Rating size="small" name={`rating-${id}`} value={rating} precision={0.01} readOnly />
                    </Box>
                        : 
                    <Box display={"flex"} alignItems={"center"}> 
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