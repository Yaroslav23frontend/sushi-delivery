import Typography from "../typography/Typography";
import React, { ForwardRefRenderFunction } from "react";
import { TextareaProps } from "./types";
const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  props,
  ref
) => {
  const { name, errors, touched } = props;
  return (
    <label className="block mb-5">
      <Typography variant="p" tag="span">
        {name}
      </Typography>
      <textarea
        {...props}
        name={`${name.toLowerCase()}`}
        className={`shadow border ${
          touched && errors ? "border-red-600" : ""
        } rounded py-2 px-3 form-input mt-1 block w-full ring-black outline-none focus:ring`}
        ref={ref}
      />
      {touched && errors && (
        <p className="text-xs text-red-600 mt-1 ml-2">{errors}</p>
      )}
    </label>
  );
};
const FormTextarea = React.forwardRef(Textarea);

export default FormTextarea;
