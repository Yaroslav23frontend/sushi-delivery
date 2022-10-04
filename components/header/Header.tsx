import React from "react";
import Container from "../container/Container";
import Typography from "../UI/typography/Typography";
import { useCountdown } from "../../hooks/useCountdown";
import { HeaderProps } from "./types";
import { urlFor } from "../../lib/sanity/client";
import dynamic from "next/dynamic";
import Link from "next/link";
const CountDown = dynamic(() => import("./countDown/CountDown"), {
  ssr: false,
});
export default function Header({ data }: HeaderProps) {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute w-full h-full bg-black overflow-hidden flex justify-center items-center">
        <img
          className="w-screen h-screen"
          src={`${urlFor(data.image)}`}
          alt="bgImage"
        />
      </div>
      <div className="absolute bg-black opacity-50 w-full h-full"></div>
      <Container>
        <div className="z-10 text-white w-full h-full flex flex-col justify-center items-center gap-5">
          <Typography
            variant="h1"
            tag="h1"
            weight="bold"
            color="white"
            sx="text-center"
          >
            Delivery of Japanese Cuisine "Sushi"
          </Typography>
          <Typography color="white" variant="h3">
            {data.body}
          </Typography>
          <CountDown endDate={data.endDate} />
          <Link href="/promotion">
            <div className="py-2 px-4 bg-orange-500 rounded-xl cursor-pointer hover:bg-orange-600 active:bg-orange-700">
              Promotion Sets
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
