import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Container, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useLoadingBar, useProgressBar } from "../loading";
import { getMovieById } from "../../redux/slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { CardReview } from "../../components/CardReview/CardReview";
import style from "./Detail.module.css"
import { getRevies } from "../../redux/slices/reviewSlice";

export const DetailView: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const movieSelector = useAppSelector(state => state.movies.movie[0])
    const reviewsSelector = useAppSelector(state => state.reviews.reviews)

    //loading
    const progress = useProgressBar();
    const loading = useLoadingBar();
    
    let params = useParams()
    
    const id = Number(params.id)
    
    useEffect(()=>{
        dispatch(getRevies(id))
        dispatch(getMovieById(id))
    },[dispatch,id])
    
    return(
        <Box >
            <Container maxWidth="xl">
                { loading ? (
                    <Box sx={{ width: '100%', mt: 10 }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                ) : (
                    <Grid container>
                        <Box sx={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', }}>
                            {movieSelector && (
                                <img src={movieSelector.backdrop_path} alt={movieSelector.title}
                                    style={{
                                    position: 'absolute',
                                    top: 0, left: 0,
                                    width: '100%', height: '100%',
                                    objectFit: 'cover',
                                    }}
                                />
                            )}
                            <Grid item sx={{ position: 'absolute', top: '12%', flexDirection: 'column', }}>
                                <div>
                                    <Typography variant="h1" align="center"
                                    sx={{ 
                                        width: 'fit-content',
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                                        borderRadius: 10, 
                                        padding: "1%",
                                        marginInline: '2%'
                                    }}
                                    >{movieSelector.title}</Typography>
                                </div>
                                <Typography variant="h5" mt={2} sx={{ 
                                        width: 'fit-content',
                                        backgroundColor: 'rgba(0, 0, 0, 0.15)', 
                                        padding: '1%',
                                    }}>
                                    {movieSelector.overview}
                                </Typography>
                            </Grid>
                        </Box>
                        { reviewsSelector.length > 0 && 
                            <Grid container sx={{ backgroundColor: '#292f31'}}>
                                <Typography variant="h4" mt={3} ml={2}>Reviews :</Typography>
                                <Divider/>
                                <Carousel showThumbs={false} className={style.carousel}>
                                    {reviewsSelector.map((data, index) => (
                                        <Grid item sx={{mb:5, paddingInline:5}} key={index}>
                                            <CardReview
                                                id={data.id}
                                                author={data.author}
                                                content={data.content}
                                                rating={data.rating}
                                            />
                                        </Grid>
                                        ))
                                    }
                                </Carousel>
                            </Grid>
                        }
                    </Grid>
                )
            }
            </Container>
        </Box>
    )
}