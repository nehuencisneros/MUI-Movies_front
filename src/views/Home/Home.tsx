import React, { useEffect, useState } from "react";
import { Button, Container, Grid } from "@mui/material"
import { Header } from "../../components/Header/Header";
import { CardComponent } from "../../components/Card/Card";
import { moviesdb } from "../../api/movies";

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
    const [ movies, setMovies ] = useState<TypeMovies[]>([])

    moviesdb.map((movie: any) => {
        const newMovie = {
                id : movie.id,
                title: movie.title,
                overview: movie.overview ? movie.overview : "no overview",
                adult: movie.adult,
                lenguaje: movie.original_language,
                image: "https://www.themoviedb.org/t/p/original" + movie.backdrop_path,
                poster: movie.poster_path,
                rating: movie.vote_average,
                release_date: movie.release_date,
        }
        movies.push(newMovie)
    })

    useEffect (() => {

    },[])


    return(
        <Container sx={{mt: 5}} maxWidth="xl" >
            <Header 
                title="Movies From Nehuen" 
                description="la descripcion"
            />
            <Grid container spacing={4} direction="row" justifyContent="center">
                { movies.length > 0 && 
                    movies.map((movie:TypeMovies)=>

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