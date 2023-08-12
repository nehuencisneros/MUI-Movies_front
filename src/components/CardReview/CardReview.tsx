import React from "react";
import { Card, CardActions, CardContent, Typography, CardMedia, Divider, Grid, IconButton, Box } from "@mui/material";
import { useAppDispatch } from '../../redux/hooks';

interface CardReviewProps {
    id: string,
    author: string,
    content: string,
}



export const CardReview: React.FC <CardReviewProps> = ({ id, author, content}) => {

    const dispatch = useAppDispatch();

    const props: CardReviewProps = {
        id: "647760aad3719700f9cad266",
        author:"garethmb",
        content:  "Life as a teenager is never easy and when you are gifted with the superhuman abilities of a spider and lead a double life as a student and crime fighter; life gets even harder.\r\n\r\nMiles Morales (Shameik Moore) is finding it even harder to hide his secret from his family who has grown concerned that his erratic behavior is more than the usual teenage angst.\r\n\r\nIn another earth, Gwen Stacy (Hailee Steinfeld) deals with her Police officer father desperately hunting down her alter-ego believing that she is a killer which drives a wedge between them as Gwen desperately tries to find her way forward.\r\n\r\nIn “Spider-Man Across the Spider-Verse audiences learn that what one perceives as reality is often just the corner of a much larger picture and when Miles confronts what he dismisses as a “Villain of the Week” in a quirky enemy known as The Spot (Jason Schwartzman), starts a campaign against Spider-Man, he soon finds that the threat is much larger than he expected and secretly follows a visiting Gwen into an another Earth where his actions soon draw the attention of a larger temporal Spider squad.\r\n\r\nMotivated by his feelings for Gwen and a desire to do good, Miles looks to undo the damage that the Spot is causing across various Earths and learns that each one has its own version of Spider-man or Woman to protect it.\r\n\r\nAt this point the film goes into overdrive as Miles learns more about his past and how he became Spider-Man but also learns more about the cost that his powers enact on his life and those around him. There are plenty of special moments and guest appearances that follow from the more obscure to the mainstream and the range of emotions from the audience at the press screening as they reacted to the film showed they were deeply engaged and loving it.\r\n\r\nThe film does take a darker turn and does end in a cliffhanger which sets up the next film very well but also may be a bit darker than younger viewers might want. That being said; I enjoyed this film far more than I did the prior film. I found the animation style a bit off-putting as the jerky way the characters moved was a bit much over the length of a feature film. This time around there is a mix of animation styles throughout and at times in the same frame which may be a bit hard for some as the film does come at the viewer with waves of flashing lights, sounds, and animations that very cleverly mimic reading a comic complete with small boxes to define various characters from time to time.\r\n\r\nThe film runs nearly two and a half hours and did seem to go on a bit long at times but thanks to the great voice-acting and strong cast as well as engaging storyline I found myself eagerly looking forward to the next film.\r\n\r\nI first saw a rough cut of a scene at Cinemacon in 2022 and it was amazing seeing the final scene near the opening of the film as it was a rare instance of a film surpassing expectations and delivers the storyline and action with a good dose of solid characters that fans will love.\r\n\r\n4.5 stars out of 5"
    }
    return(
        <Card sx={{ mt: 1 , maxWidth:300}}>
            <Typography variant="h4">{author}</Typography>
            <Divider/>
            <Typography variant="h6">{content}</Typography>
        </Card>
    )
}