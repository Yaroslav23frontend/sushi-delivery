import { useEffect, useState } from "react";
import Bg from "./Bg";
import { BgContainerProps } from "./types";
export default function BgContainer({ url }: BgContainerProps) {
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
  return <Bg url={url} width={width} height={height} />;
}
