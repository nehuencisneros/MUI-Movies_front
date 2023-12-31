import React, { useEffect, useState } from "react";
import { Card, CardContent, CardActionArea, Typography, CardMedia, CardActions, Button, Divider, Box, Rating } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { addToSee } from "../../redux/slices/drawerSlice"
import { setItem } from "../../utils/localStorage";

type CardProps = {
    id: number,
    backdrop_path: string,
    title: string,
    overview: string,
    rating: number
}

export const CardComponent: React.FC<CardProps> = ({ id, backdrop_path, title, overview, rating }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const movieAdded = useAppSelector(state => state.drawer)
    const [buttonDisable, setButtonDisable] = useState<boolean>(false)

    useEffect(() => {
        movieAdded.some(item => item.id === id) ? setButtonDisable(true) : setButtonDisable(false);
        setItem("drawer", movieAdded)
    }, [movieAdded, id])

    const handleAddToCart = () => {
        dispatch(addToSee({ id, backdrop_path, title, rating }));
    };

    return (
        <Card sx={{ maxWidth: 300 }} >
            <Rating size="small" sx={{ marginLeft: "68%", marginTop: "5px" }} name={`rating-${id}`} value={(rating / 2)} precision={0.1} readOnly />
            <CardActionArea component="a" onClick={() => navigate("/movie/" + id)} >
                <CardMedia
                    component="img"
                    height="200"
                    image={backdrop_path}
                />
                <CardContent sx={{ flexDirection: 'column', padding: 1 }}>
                    <Typography fontSize="28px" align={"center"} height={80}>
                        {title.length > 40 ? title.slice(0, 40) + "..." : title}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="body2" color="text.secondary" mt={1} height={100}>
                        {overview.length > 250 ? overview.slice(0, 250) + "..." : overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button fullWidth variant="outlined" size="small" onClick={handleAddToCart} disabled={buttonDisable}>
                    Add to see
                </Button>
            </CardActions>
        </Card>
    )
}