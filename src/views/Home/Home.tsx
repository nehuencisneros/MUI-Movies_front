import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Grid, LinearProgress, Pagination } from "@mui/material"

import { Header } from "../../components/Header/Header";
import { CardComponent } from "../../components/Card/Card";
import { getMovies } from "../../redux/slices/moviesSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { boolean } from "yup";
import { useProgressBar, useLoadingBar } from "../loading";

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
    const moviesState: TypeMovies[] = useAppSelector(state => state.movies.movies)
    //loading
    const progress = useProgressBar();
    const loading = useLoadingBar();
    
    //paginado
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [moviesPage, setMoviesPage] = React.useState<number>(12);
    const indexLastMovie = currentPage * moviesPage;
    const indexFirstMovie = indexLastMovie - moviesPage;
    const currentMoviesPage = moviesState.slice(indexFirstMovie, indexLastMovie);   
    const cantPages = Math.ceil(moviesState.length/moviesPage)

    useEffect(() => {
        dispatch(getMovies());

    }, [currentPage]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
    }
    
    return(
        <Container sx={{mt: 2}} maxWidth="xl" >
            <Header 
                title="Movies From Nehuen" 
                description="la descripcion"
            />
            <Divider/>
            { loading ? (
                <Box sx={{ width: '100%', mt: 10 }}>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
            ) : (
                <div>
                    <Grid sx={{my:2}} container spacing={4} direction="row" justifyContent="center">
                        { currentMoviesPage.length > 0 && 
                            currentMoviesPage.map((movie:TypeMovies)=>

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
                    <Divider/>
                    <Box sx={{width: "100%", display: "flex", justifyContent: "center", my: 2}}>
                        <Pagination count={cantPages} page={currentPage} onChange={handleChange} color="primary" size="large" variant="outlined" shape="rounded" />
                    </Box>
                </div>
            )
            }
                        
        </Container>
    )
}