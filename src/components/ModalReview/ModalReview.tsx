import React from "react";
import style from "./ModalReview.module.css"
import { Box, Button, Rating, TextField } from "@mui/material";


export const ModalReview : React.FC<{}> = () => {
   const [value, setValue] = React.useState<number | null>(2);

   return(
      <Box className={style.modalBox}>
         <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue);
            }}
            sx={{border: "solid 1px red", alignSelf: "flex-end"}}
         />
         <TextField
            label="Add your review"
            multiline
            rows={5}
            sx={{width:"100%", backgroundColor:"#8c8c8c"}}
         />
         <Button color="error" variant="contained" type="submit">
            Post review
         </Button>
      </Box>
   )
}