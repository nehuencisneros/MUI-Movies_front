import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material"
import { Header } from "../../components/Header/Header";
import { CardComponent } from "../../components/Card/Card";
import { getMovies } from "../../redux/slices/moviesSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"

interface TypeMovies {
    id: number;
    title: string;
    overview: string;
    adult: boolean;
    lenguaje: string;
    image: string;
    poster: string;
    rating: number;
    release_date: string;
}

export const HomeView: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const moviesState = useAppSelector(state => state.movies.movies)

    useEffect(()=>{
        dispatch(getMovies())
    },[dispatch])
    
    return(
        <Container sx={{mt: 5}} maxWidth="xl" >
            <Header 
                title="Movies From Nehuen" 
                description="la descripcion"
            />
            <Grid container spacing={4} direction="row" justifyContent="center">
                { moviesState.length > 0 && 
                    moviesState.map((movie:TypeMovies)=>

                        <Grid item >
                            <CardComponent
                                key={movie.id}
                                title={movie.title}
                                image={movie.image}
                                overview={movie.overview}
                            />
                        </Grid>
                    )
                }
            </Grid>            
        </Container>
    )
}