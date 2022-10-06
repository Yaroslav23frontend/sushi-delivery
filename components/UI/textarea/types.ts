import { TextareaHTMLAttributes } from "react";
export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  ref: string;
  errors: string | undefined;
  touched: boolean | undefined;
}
