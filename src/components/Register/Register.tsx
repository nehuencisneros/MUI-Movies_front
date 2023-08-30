import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { signInUser } from "../../redux/slices/userSlice";
import { useFormik } from "formik";
import { useAppDispatch } from "../../redux/hooks";
import { useNotification } from "../../context/notification.context";
import { SingInValidate } from "../../utils/validateForm";

type SingInForm = {
   name: string,
   email: string,
   password: string
}

export const Register: React.FC<{}> = () => {
   const { getSuccess } = useNotification();
   const dispatch = useAppDispatch()

   const formik = useFormik<SingInForm>({
      initialValues: {
         name:"",
         email: "",
         password: "",
      },
      validationSchema: SingInValidate,
      onSubmit: (values: SingInForm) => {
         getSuccess(JSON.stringify("User Registered"))
         dispatch(signInUser(values))
      }
   });

   return (
      <Grid item>
         <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4" sx={{ mb: 1 }} >REGISTER</Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
               <TextField
                  name="name"
                  fullWidth
                  type="text"
                  margin="normal"
                  label="Name"
                  sx={{ mt: 1, mb: 1 }}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
               />
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
               >SIGN IN</Button>
            </Box>
         </Paper>
      </Grid>
   )
}