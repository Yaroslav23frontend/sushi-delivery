import { useFormik, FormikProps } from "formik";
import { useState } from "react";
import Typography from "../UI/typography/Typography";
import { ContactProps } from "./types";
import { validationSchema } from "./contact.config";
import FormInput from "../UI/input/Input";
export default function ContactForm() {
  const [submited, setSubmited] = useState(false);
  const formik: FormikProps<ContactProps> = useFormik<ContactProps>({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      fetch("/api/contactUs", {
        method: "POST",
        body: JSON.stringify({ ...values }),
      })
        .then(() => {
          console.log({ ...values });
          setSubmited(true);
        })
        .catch((err: Error) => {
          console.log(err.message);
        });
    },
  });
  return (
    <>
      {submited ? (
        <div className="w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto bg-white rounded-lg">
          <Typography variant="h2" tag="p" weight="semibold">
            We will contact you soon.
          </Typography>
        </div>
      ) : (
        <div className="w-full h-full">
          <form
            className="w-full h-full max-w-4xl mx-auto bg-white p-5 rounded-lg"
            onSubmit={formik.handleSubmit}
          >
            <Typography variant="h1" tag="h3" weight="semibold" sx="mt-1 mb-2">
              Contuct Us
            </Typography>
            <FormInput
              name="name"
              id="name"
              value={`${formik.values.name}`}
              onChange={formik.handleChange}
              type="text"
              errors={formik.errors.name}
              touched={formik.touched.name}
            />
            <FormInput
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              type="tel"
              errors={formik.errors.phone}
              touched={formik.touched.phone}
            />

            <input
              type="submit"
              className="py-2 px-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 active:bg-gray-900 text-sm"
            />
          </form>
        </div>
      )}
    </>
  );
}
