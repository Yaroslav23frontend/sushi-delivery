import { useFormik, FormikProps } from "formik";
import { useState } from "react";
import Typography from "../UI/typography/Typography";
import { ContactProps } from "./types";
import { validationSchema } from "./contact.config";
import Container from "../container/Container";
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
        .catch((err) => {
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
            <label className="block mb-5">
              <Typography variant="p" tag="span">
                Name
              </Typography>
              <input
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className={`shadow border ${
                  formik.errors.name ? "border-red-600" : ""
                } rounded py-2 px-3 form-input mt-1 block w-full ring-black outline-none focus:ring`}
                type="text"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs text-red-600 mt-1 ml-2">
                  {formik.errors.name}
                </p>
              )}
            </label>
            <label className="block mb-5">
              <Typography variant="p" tag="span">
                Phone
              </Typography>
              <input
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={`shadow border ${
                  formik.errors.phone ? "border-red-600" : ""
                } rounded py-2 px-3 form-input mt-1 block w-full ring-black outline-none focus:ring`}
                type="tel"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-xs text-red-600 mt-1 ml-2">
                  {formik.errors.phone}
                </p>
              )}
            </label>
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
