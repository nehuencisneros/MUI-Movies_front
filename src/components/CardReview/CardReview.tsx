import React from "react";
import { Card, Typography, Divider, Box, Rating } from "@mui/material";
import style from "./CardReview.module.css"

interface CardReviewProps {
    id: string,
    author: string,
    content: string,
    rating: number | null,
}

export const CardReview: React.FC <CardReviewProps> = ({ id, author, content, rating}) => {

    return(
        <Card className={style.cardConteiner} sx={{ backgroundColor: "#414648"}}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                <Typography variant="h4">
                    {author}
                </Typography>
                { rating ? 
                    <Box display={"flex"} alignItems={"center"} >
                        <Typography variant="h5" sx={{marginRight:"0.5rem"}}>
                            Rating: 
                        </Typography>
                        <Rating className={style.rating} name={`rating-${id}`} value={rating} precision={0.5} readOnly />
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