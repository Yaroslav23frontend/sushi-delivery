import React, { InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ref: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
  labelactive?: "false" | "true";
}
