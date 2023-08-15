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
    
    const props = [{
        id: "647760aad3719700f9cad266",
        author:"garethmb",
        content:  "Life as a teenager is never easy and when you are gifted with the superhuman abilities of a spider and lead a double life as a student and crime fighter; life gets even harder.\r\n\r\nMiles Morales (Shameik Moore) is finding it even harder to hide his secret from his family who has grown concerned that his erratic behavior is more than the usual teenage angst.\r\n\r\nIn another earth, Gwen Stacy (Hailee Steinfeld) deals with her Police officer father desperately hunting down her alter-ego believing that she is a killer which drives a wedge between them as Gwen desperately tries to find her way forward.\r\n\r\nIn “Spider-Man Across the Spider-Verse audiences learn that what one perceives as reality is often just the corner of a much larger picture and when Miles confronts what he dismisses as a “Villain of the Week” in a quirky enemy known as The Spot (Jason Schwartzman), starts a campaign against Spider-Man, he soon finds that the threat is much larger than he expected and secretly follows a visiting Gwen into an another Earth where his actions soon draw the attention of a larger temporal Spider squad.\r\n\r\nMotivated by his feelings for Gwen and a desire to do good, Miles looks to undo the damage that the Spot is causing across various Earths and learns that each one has its own version of Spider-man or Woman to protect it.\r\n\r\nAt this point the film goes into overdrive as Miles learns more about his past and how he became Spider-Man but also learns more about the cost that his powers enact on his life and those around him. There are plenty of special moments and guest appearances that follow from the more obscure to the mainstream and the range of emotions from the audience at the press screening as they reacted to the film showed they were deeply engaged and loving it.\r\n\r\nThe film does take a darker turn and does end in a cliffhanger which sets up the next film very well but also may be a bit darker than younger viewers might want. That being said; I enjoyed this film far more than I did the prior film. I found the animation style a bit off-putting as the jerky way the characters moved was a bit much over the length of a feature film. This time around there is a mix of animation styles throughout and at times in the same frame which may be a bit hard for some as the film does come at the viewer with waves of flashing lights, sounds, and animations that very cleverly mimic reading a comic complete with small boxes to define various characters from time to time.\r\n\r\nThe film runs nearly two and a half hours and did seem to go on a bit long at times but thanks to the great voice-acting and strong cast as well as engaging storyline I found myself eagerly looking forward to the next film.\r\n\r\nI first saw a rough cut of a scene at Cinemacon in 2022 and it was amazing seeing the final scene near the opening of the film as it was a rare instance of a film surpassing expectations and delivers the storyline and action with a good dose of solid characters that fans will love.\r\n\r\n4.5 stars out of 5"
    },{
        id: "6499e4de62f3350127477b22",
        author:"GenerationofSwine",
        content:"I don't know, but in my humble opinion, the punk Spider-Man really needed to look like Johnny Rotten, Sid Vicious, someone from the Sex Pistols.  He sort of screamed them in the way he was depicted, right down to the multi-media used around him.\r\n\r\nThey really missed an opportunity for if not a great pop culture reference, but at least an in-joke for the punk community.  I mean, throw us a bone here.  He spent half his time mocking us anyway (in a pretty hysterical way) at least give us the laugh when they do the face reveal.\r\n\r\nAnyway, it's not bad.  Miles is less... boring in this cartoon than he is in the comics where he's developed the moniker \"Mild Morales.\"  He actually has more depth of character here and is forced to face some serious choices and turning points (Hey Marvel, you could learn a lesson here).  \r\n\r\nBut he also took a bit of a back seat to Stacey, who seemed to be the star of the show until there was an abrupt switch... which irritated me.  It sort of screamed ensemble cast, but really it just shifter from one lead to the other a bit abruptly.  As far as complaints go, that's pretty bare bones.\r\n\r\nIt also gave Spidey 2099 a sort of bad spin despite being the most beloved of the 2099 line and the coolest costume design of any spider.  So for us Gen-Xers, it sort of burned.  At least I'm old enough to have been looking forward to his inclusion only to be a little disappointed. \r\n\r\nAnd I am still very upset over how Peter is portrayed, but they are slowly redeeming his character.\r\n\r\nOver-all though, it's not bad.  It's better than just about all of the current Super-Hero movies and, honestly, it's probably the only cape franchise that people are still interested in... because it isn't totally political BS."
    },{
        id: "647e0f700fb39801180e8f4b",
        author:"garManuel São Bentoethmb",
        content:"Spider-Man: Across the Spider-Verse is the epitome of incredibly detailed, gorgeously unique, undeniably epic animation within its medium. Separately from enjoying this movie or not, any or all cinephiles should bow to the ridiculously talented artists and animators behind this pure work of art.\r\n\r\nThat said, the attributes and issues are more or less the same as the original. The various animation styles are overwhelmingly stunning, but also to the point of creating confusing moments. Gwen Stacy stands out from the rest of the pack – both the character and Hailee Steinfeld's voice performance – but everyone on screen is impressively captivating. The voice cast is superb all-around.\r\n\r\nAn unfinished story – remember, this is the first of two parts – about what it really means to be a hero. The 140-minute runtime isn't exactly heavy, but the necessity to resort to exposition scenes is more frequent than in the previous flick, even though the narrative complexity ends up justifying this.\r\n\r\nA must-see movie in the cinema! Go support animation.\"\r\n\r\n\r\nRating: A-"
    },
    {
        id: "64cca1752f266b09ef121de5",
        author: "Louisa Moore - Screen Zealots",
        content: "I don’t have that much to say about “Spider-Man: Across the Spider-Verse”, the sequel to the equally terrific 2018 Oscar winning film “Spider-Man: Into the Spider-Verse,” except that it’s easily one of the best films of the year. It’s the type of achievement in animation that’s not only artistically skilled but also wildly entertaining. This is one of the most perfect pieces of animated cinema in years and even better, it’s aimed squarely at more sophisticated audiences of older kids, teens, and adults.\r\n\r\nMiles Morales (voice of Shameik Moore) is back for part two, and he’s happily fulfilling his duties as Brooklyn’s friendly neighborhood superhero. Miles finds himself joining forces with Gwen Stacy (voice of Hailee Steinfeld) and a new team of elite Spider heroes (featuring the voices of Jake Johnson, Karan Soni, Issa Rae, and others) from across the multiverse as they work together to fight off a powerful villain.\r\n\r\nThe plot is complex, but the story is terrific. The parallel universes at play don’t feel like a gimmick, and there are real stakes for every character. There are strong messages about teamwork, friendship, power, and responsibility, and it’s nice to see more female representation in a film that prides itself on diversity and inclusion. The story is a little slow at the start, but things pick up ones Miles enters the picture. His relationship with Gwen is developed extensively here, and they’re a great onscreen duo.\r\n\r\nThe film is computer-animated, and the visuals are nothing short of masterful. The animation is vibrant, skillfully executed, and absolutely stunning. This is the type of visual art that leaves your eyes begging for more. From the attention to detail to the choice of hues, there isn’t one misstep to be found.\r\n\r\nThe story, however, has a few stumbles, and most of that stems from the overly long run time (2 hours, 20 minutes), the too-insider Easter egg references for diehard comic fans, and the irritating cliffhanger ending that is so obnoxious that it almost ruins everything that came before. Thank goodness the rest of the movie is so much fun.\r\n\r\n“Spider-Man: Across the Spider-Verse” is the type of film that proves animation isn’t just for kids, and it’s certainly not a throwaway medium that deserves to be dismissed. It’s an action-packed, visually dazzling, frentic, and outrageously fun piece of cinema. Go see it.\r\n\r\nBy: Louisa Moore",
    },
    {   
        id: "648238bad2b20900ca1dc5c2",
        author: "Chris Sawin",
        content: "And perhaps _Beyond the Spider-Verse_ will retroactively make Across’ story more enjoyable, but for now, the franchise’s flashy visuals are fully in controls of its web-shooters.\r\n\r\nAs a stand alone feature, _Across the Spider-Verse_ is groundbreaking with its half-a-dozen animation styles and plethora of Spider-Men. The Spot is an insanely cool villain, Spider-Man 2099 is an anti-hero teetering on the verge of becoming a full-time villain, and Spider-Punk oozes overall awesomeness.\r\n\r\nBut with the film sitting at 162 minutes and a sequel on the way in less than a year, the story ultimately feels like it’s stretched beyond its means.\r\n\r\n**Full review:** https://boundingintocomics.com/2023/06/07/spider-man-across-the-spider-verse-review-a-stunning-labyrinthine-benchmark-for-animation/"
    }]

    
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
                                <img src={movieSelector.image} alt={movieSelector.title}
                                    style={{
                                    position: 'absolute',
                                    top: 0, left: 0,
                                    width: '100%', height: '100%',
                                    objectFit: 'cover',
                                    }}
                                />
                            )}
                            <Grid item sx={{ position: 'absolute', top: '15%', flexDirection: 'column', }}>
                                <div>
                                    <Typography variant="h1" align="center"
                                    sx={{ 
                                        width: 'fit-content',
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                                        borderRadius: 10, 
                                        padding: 2,
                                        marginInline:2
                                    }}
                                    >{movieSelector.title}</Typography>
                                </div>
                                <Typography variant="h5" mt={2} sx={{ 
                                        width: 'fit-content',
                                        backgroundColor: 'rgba(0, 0, 0, 0.15)', 
                                        padding: 2,
                                    }}>
                                    {movieSelector.overview}
                                </Typography>
                            </Grid>
                        </Box>
                        { props.length > 0 && 
                            <Grid container sx={{justifyContent:"center"}}>
                                <Typography variant="h4" mt={3}>Reviews :</Typography>
                                <Divider/>

                                    <div style={{}}>
                                        <Carousel showThumbs={false}>

                                            {props.map((data) => (
                                                <Grid item 
                                                    sx={{mb:4, 
                                                        justifyContent:"center" , 
                                                        paddingInline:5,
                                                        paddingBottom:2,
                                                        width: '25rem',
                                                    }} key={data.id}>

                                                    <CardReview
                                                        id={data.id}
                                                        author={data.author}
                                                        content={data.content}
                                                    />
                                                </Grid>
                                            ))}

                                        </Carousel>
                                    </div>

                            </Grid>
                        }
                    </Grid>
                )
            }
            </Container>
        </Box>
    )
}