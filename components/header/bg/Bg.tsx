import Image from "next/image";
import { useState, useEffect } from "react";
import { urlFor } from "../../../lib/sanity/client";
import { BgProps } from "./types";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../../../lib/sanity/client";
import styled from "styled-components";
function getWindowsDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const Bg = styled.div<BgProps>`
  background-image: url(${(props) =>
    urlFor(props.url).height(props.height).url()});
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  width: 100%;
  height: 100%;
`;
export default Bg;
// export default function Bg({ url }: BgProps) {
//   const [width, setWidth] = useState<number>(0);
//   const [height, setHeight] = useState<number>(0);
//   const imageProps = useNextSanityImage(sanityClient, url);
//   useEffect(() => {
//     const { width, height } = getWindowsDimensions();
//     setWidth(width);
//     setHeight(height);
//   }, []);
//   console.log(urlFor(url).height(height).url());
//   if (height !== 0) {
//     return (

//       <img className="w-full h-full" src={urlFor(url).height(height).url()} />
//     );
//   } else {
//     return <></>;
//   }
// }
