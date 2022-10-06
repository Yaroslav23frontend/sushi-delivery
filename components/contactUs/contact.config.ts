import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Min length of the name 2 characters")
    .required("Name is required"),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Phone is required"),
});
