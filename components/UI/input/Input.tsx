import Typography from "../typography/Typography";
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { InputProps } from "./types";
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { labelactive, name, errors, touched } = props;
  return (
    <label className="block mb-5">
      <Typography variant="p" tag="span">
        {labelactive === "false" ? "" : name}
      </Typography>
      <input
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
const FormInput = React.forwardRef(Input);

export default FormInput;
