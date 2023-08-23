import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  email: yup.string().trim().required("The email is required."),
  password: yup.string().trim().required("The password is required.").min(4, "The password must have a minimum of 4 characters.").max(20, "The password must have a maximum of 4 characters."),
})