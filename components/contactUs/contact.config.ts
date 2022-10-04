import * as yup from "yup";
import "yup-phone";
export const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Min length of the name 2 characters")
    .required("Name is required"),
  phone: yup.string().phone().required("Phone is required"),
});
