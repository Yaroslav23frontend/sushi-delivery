import { urlFor } from "../../../lib/sanity/client";
import { BgProps } from "./types";
import styled from "styled-components";
const Bg = styled.div<BgProps>`
  background-image: url(${(props) =>
    urlFor(props.url)
      .height(props.height)
      .width(props.width)
      .fit("crop")
      .format("webp")
      .url()});
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  width: 100%;
  height: 100%;
`;
export default Bg;
