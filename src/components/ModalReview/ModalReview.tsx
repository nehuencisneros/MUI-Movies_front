import React from "react";
import style from "./ModalReview.module.css"
import { Box, Button, Grid, Rating, Stack, TextField, Typography } from "@mui/material";


export const ModalReview : React.FC<{}> = () => {
   const [value, setValue] = React.useState<number | null>(2);

   

   return(
      <Box className={style.modalBox}>
         <Grid className={style.ratingBox}>
            <Typography className={style.typo}>ADD RATE :</Typography>
            <Rating
               name="simple-controlled"
               value={value}
               onChange={(event, newValue) => {
                  setValue(newValue);
               }}
               className={style.rating}
            />
         </Grid>
         <TextField
            id="outlined-multiline-flexible"
            label="Add your review"
            multiline
            size="medium"
            rows={5}
            sx={{
               "& .MuiInputLabel-root":{
                  color: '#12181b',
               },
               "& .MuiInputBase-root": {
                  fontSize:20,
                  '&:after': { borderBottom: "2px solid #12181b" },
               },
            }}
            className={style.reviewInput}
            variant="filled"
         />
         <Button color="error" variant="contained" type="submit" className={style.postButton}>
            Post review
         </Button>
      </Box>
   )
}

// '&:after': { color: '#12181b' },