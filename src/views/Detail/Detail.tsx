import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { useLoadingBar, useProgressBar } from "../loading";

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

export const DetailView: React.FC<{}> = () => {
    const [movie, setMovie] = useState<TypeMovies | null>(null)
    //loading
    const progress = useProgressBar();
    const loading = useLoadingBar();

    const { id } = useParams()

    const getbyid = async (id:any) => {
        const response = await axios.get("http://localhost:3001/movies/"+ id)
        const {data} = response
        setMovie({
            id: data.id,
            title: data.title,
            overview: data.overview,
            adult: data.adult,
            lenguaje: data.original_language,
            image: "https://www.themoviedb.org/t/p/original/" + data.backdrop_path,
            poster: "https://www.themoviedb.org/t/p/original" + data.poster_path,
            rating: data.vote_average,
            release_date: data.release_date,
        })
        console.log(data.poster_path)
        console.log(data.backdrop_path)
    }

    

    useEffect(()=>{
        getbyid(id)
    },[])
    return(
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                { loading ? (
                    <Box sx={{ width: '100%', mt: 10 }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                ) : (
                    <Grid container>
                        <Grid item>
                            <img src={movie?.image}/>
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                )
                }
            </Container>
        </Box>
    )
}