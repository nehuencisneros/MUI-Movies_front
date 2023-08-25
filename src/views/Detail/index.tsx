import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Divider, Grid, LinearProgress, Typography, Modal  } from "@mui/material";
import { useLoadingBar, useProgressBar } from "../loading";
import { getMovieById } from "../../redux/slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CardReview } from "../../components/CardReview/CardReview";
import style from "./Detail.module.css"
import { getRevies } from "../../redux/slices/reviewSlice";

const DetailView: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const movieSelector = useAppSelector(state => state.movies.movie[0])
    const reviewsSelector = useAppSelector(state => state.reviews.reviews)

    //loading
    const progress = useProgressBar();
    const loading = useLoadingBar();

    let params = useParams()
    const id = Number(params.id)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        dispatch(getRevies(id))
        dispatch(getMovieById(id))
    }, [dispatch, id])

    return (
        <Box >
            <Container maxWidth="xl">
                {loading ? (
                    <Box className={style.boxProgress}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                ) : (
                    <Grid container>
                        <Box className={style.boxImage}>
                            {
                                movieSelector && <img src={movieSelector.backdrop_path} alt={movieSelector.title} className={style.imagen} />
                            }
                            <Grid item className={style.textMovieGrid}>
                                <div>
                                    <Typography variant="h1" align="center" className={style.title}>
                                        {movieSelector.title}
                                    </Typography>
                                </div>
                                <Typography variant="h5" className={style.overview}>
                                    {movieSelector.overview}
                                </Typography>
                            </Grid>
                            <div className={style.divBotonFlotante}>
                                <Button sx={{ backgroundColor: "#fc4b08" }} onClick={handleOpen} color="error" variant="contained">
                                        <Typography variant="h5" marginY={1}>
                                            ADD REVIEW
                                        </Typography>
                                </Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        >
                                        <Box className={style.modalBox}>
                                            
                                        </Box>
                                    </Modal>
                            </div>
                        </Box>
                        {reviewsSelector.length > 0 &&
                            <Grid container sx={{ backgroundColor: '#292f31' }}>
                                <Typography variant="h4" mt={3} ml={2}>Reviews :</Typography>
                                <Divider />
                                <Carousel showThumbs={false} className={style.carousel}>
                                    {reviewsSelector.map((data, index) => (
                                        <Grid item className={style.gridCardReview} key={index}>
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

export default DetailView