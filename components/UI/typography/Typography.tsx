import React from "react";
import styled from "@emotion/styled";
import { TypographyProps } from "./types";
import { weights, colors, size } from "./typography.config";
const StyledDynamicComponent = styled.div``;
const Typography = ({
  tag = "p",
  children,
  variant = "p",
  weight = "normal",
  color,
  sx = "",
  ...props
}: TypographyProps) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag);
  return (
    <WithComponent
      className={`${size[variant]} ${color ? colors[color] : ""} ${
        weights[weight]
      } ${sx}`}
      {...props}
    >
      {children}
    </WithComponent>
  );
};

Typography.defaultProps = {
  tag: "p",
  variant: "p",
  weight: "normal",
};

export default Typography;
