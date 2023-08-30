import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  email: yup.string().email().required("The email is required."),
  password: yup.string().trim().required("The password is required.").min(4, "The password must have a minimum of 4 characters.").max(20, "The password must have a maximum of 4 characters."),
})

export const SingInValidate = yup.object().shape({
  name:yup.string().trim().required("The name is required."),
  email:yup.string().trim().required("The email is required."),
  password:yup.string().trim().required("The password is required.").min(4, "The password must have a minimum of 4 characters.").max(20, "The password must have a maximum of 4 characters."),
})