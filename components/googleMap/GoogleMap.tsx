import { MapProps } from "./types";
import { useState, useEffect } from "react";
import { urlFor } from "../../lib/sanity/client";
import Link from "next/link";
import Typography from "../UI/typography/Typography";
export default function GoogleMap({ mainImage, url }: MapProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  function getWindowsDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  useEffect(() => {
    const { width, height } = getWindowsDimensions();
    setWidth(width);
    setHeight(height);
  }, []);
  return (
    // Important! Always set the container height explicitly
    <Link href={url}>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${urlFor(mainImage)
            .height(150)
            .width(width)
            .fit("crop")
            .format("webp")
            .quality(100)
            .url()})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          content: "",
          width: "100%",
          height: "150px",
        }}
      >
        <Link href={url}>
          <div className="bg-white text-underline absolute py-1 px-2 top-2 left-2">
            <Typography sx="text-blue-500 hover:underline cursor-pointer">
              View larger map
            </Typography>
          </div>
        </Link>
      </div>
    </Link>
  );
}
