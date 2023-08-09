import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Divider, Grid, LinearProgress, Typography } from "@mui/material";
import { useLoadingBar, useProgressBar } from "../loading";
import { getMovieById } from "../../redux/slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const DetailView: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const movieSelector = useAppSelector(state => state.movies.movie[0])

    //loading
    const progress = useProgressBar();
    const loading = useLoadingBar();

    let params = useParams()
    
    const id = Number(params.id)

    useEffect(()=>{
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
                        <Box
                            sx={{
                            position: 'relative',
                            width: '100%',
                            height: 0,
                            paddingTop: '56.25%',
                            }}
                        >
                            {movieSelector && (
                                <img
                                    src={movieSelector.image}
                                    alt={movieSelector.title}
                                    style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    }}
                                />
                            )}
                            <Grid item sx={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(-50%, -50%)', // Centra el contenido
                                ml: 70,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Typography variant="h1">{movieSelector.title}</Typography>
                                <Typography variant="h5">{movieSelector.overview}</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                )
                }
            </Container>
        </Box>
    )
}