import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNotification } from "../../context/notification.context"
import { useAppDispatch } from "../../redux/hooks";
import { LoginValidate } from "../../utils/validateForm";
import { logInUser } from "../../redux/slices/userSlice";

type loginForm = {
   email: string,
   password: string
}

export const Login: React.FC<{}> = () => {
   const { getSuccess } = useNotification();
   const dispatch = useAppDispatch()

   const formik = useFormik<loginForm>({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: LoginValidate,
      onSubmit: (values: loginForm) => {
         getSuccess(JSON.stringify("Loading..."))
         dispatch(logInUser(values))
      }
   });

   return (
      <Grid item>
         <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4" sx={{ mb: 1 }} >LOG IN</Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
               <TextField
                  name="email"
                  fullWidth
                  type="text"
                  margin="normal"
                  label="Email"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
               />
               <TextField
                  name="password"
                  fullWidth
                  type="password"
                  margin="normal"
                  label="Password"
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
               />
               <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
               >log in</Button>
            </Box>
         </Paper>
      </Grid>
   )
}