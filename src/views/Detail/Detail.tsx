import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { useLoadingBar, useProgressBar } from "../loading";
import { getMovieById } from "../../redux/slices/moviesSlice";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const DetailView: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const movie = useAppSelector(state => state.movies.movie[0])

    //loading
    const progress = useProgressBar();
    const loading = useLoadingBar();

    let params = useParams()
    
    const id = Number(params.id)

    useEffect(()=>{
        dispatch(getMovieById(id))
    },[id])

    return(
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                { loading ? (
                    <Box sx={{ width: '100%', mt: 10 }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                ) : (
                    <Grid container display="flex" sx={{mt:3}}>
                        <Grid item xs={6}>
                            <img src={movie?.image} style={{width:"100%"}}/>
                        </Grid>
                        <Grid item xs={6}>

                        </Grid>
                    </Grid>
                )
                }
            </Container>
        </Box>
    )
}