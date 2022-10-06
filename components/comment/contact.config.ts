import * as yup from "yup";
export const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Min length of the name 2 characters")
    .required("Name is required"),
  email: yup.string().email().required("Email is required"),
  comment: yup.string().required("Comment is required"),
});
