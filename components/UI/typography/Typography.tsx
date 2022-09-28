import React from "react";
import { TypographyProps } from "./types";
import { weights, colors, size } from "./typography.config";
const Typography = React.forwardRef((props: TypographyProps, ref) => {
  return React.createElement(
    props.tag!,
    {
      className: `${size[props.variant!]} ${
        props.color ? colors[props.color] : ""
      } ${weights[props.weight!]} ${props.sx}`,
      ref,
      ...props,
    },
    props.children
  );
});
Typography.defaultProps = {
  variant: "p",
  tag: "p",
  color: "black",
  sx: "",
  weight: "normal",
};

export default Typography;
