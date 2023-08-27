import React from "react";
import style from "./ModalReview.module.css"
import { Box, Button, Grid, Rating, Stack, TextField, Typography } from "@mui/material";


export const ModalReview : React.FC<{}> = () => {
   const [value, setValue] = React.useState<number | null>(2);

   return(
      <Box className={style.modalBox}>
         <Grid className={style.ratingBox}>
            <Typography variant="h5" mr={2}>ADD RATE :</Typography>
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
            label="Multiline"
            multiline
            rows={4}
            sx={{
               "& .MuiInputLabel-root ":{color: '#12181b'},
               "& .MuiInputBase-root": {
                  '&:after': { borderBottom: "2px solid #12181b" },
               },
            }}
            variant="filled"
         />
         <Button color="error" variant="contained" type="submit">
            Post review
         </Button>
      </Box>
   )
}

// { backgroundColor:"#8c8c8c", color: "white"} 


