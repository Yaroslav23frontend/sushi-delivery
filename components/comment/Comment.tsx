import { useFormik, FormikProps } from "formik";
import { useState } from "react";
import Typography from "../UI/typography/Typography";
import { CommentProps } from "./types";
import { validationSchema } from "./contact.config";
import FormInput from "../UI/input/Input";
import FormTextarea from "../UI/textarea/Textarea";
export default function CommentForm() {
  const [submited, setSubmited] = useState(false);
  const formik: FormikProps<CommentProps> = useFormik<CommentProps>({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema,
    onSubmit: (values) => {
      fetch("/api/createComment", {
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
        <div className="w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <Typography variant="h3" tag="h3" weight="semibold">
            Thank you for submitting your comment!
          </Typography>
          <Typography variant="p" tag="p">
            Once it has been approved, it will appeare below!
          </Typography>
        </div>
      ) : (
        <div className="w-full h-full">
          <form
            className="w-full h-full mx-auto bg-white p-5 rounded-lg shadow-lg mb-5"
            onSubmit={formik.handleSubmit}
          >
            <Typography variant="h1" tag="h3" weight="semibold" sx="mt-1 mb-2">
              Live a reviews bellow!
            </Typography>
            <FormInput
              name="Name"
              id="name"
              value={`${formik.values.name}`}
              onChange={formik.handleChange}
              type="text"
              errors={formik.errors.name}
              touched={formik.touched.name}
            />
            <FormInput
              name="Email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="tel"
              errors={formik.errors.email}
              touched={formik.touched.email}
            />
            <FormTextarea
              name="Comment"
              id="phone"
              value={formik.values.comment}
              onChange={formik.handleChange}
              errors={formik.errors.comment}
              touched={formik.touched.comment}
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
