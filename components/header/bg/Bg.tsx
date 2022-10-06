import { urlFor } from "../../../lib/sanity/client";
import { BgProps } from "./types";
function Bg({ url, width, height }: BgProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${urlFor(url)
          .height(height)
          .width(width)
          .fit("crop")
          .format("webp")
          .quality(80)
          .url()})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        content: "",
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}
export default Bg;
