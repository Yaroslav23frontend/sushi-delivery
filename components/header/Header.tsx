import React from "react";
import Container from "../container/Container";
import Typography from "../UI/typography/Typography";
import { HeaderProps } from "./types";
import dynamic from "next/dynamic";
import Link from "next/link";

const CountDown = dynamic(() => import("./countDown/CountDown"), {
  ssr: false,
});
export default function Header({ data }: HeaderProps) {
  return (
    <Container>
      <div className="z-10 w-full h-full flex flex-col justify-center items-center gap-2 py-4 px-2 rounded-lg shadow-lg">
        <Typography variant="h2" tag="p" weight="bold" sx="text-center">
          Delivery of Japanese Cuisine &quot;Sushi&quot;
        </Typography>
        {new Date().getTime() < new Date(data.endDate).getTime() &&
          new Date().getTime() >= new Date(data.startDate).getTime() && (
            <>
              <Typography variant="p">{data.body}</Typography>
              <CountDown endDate={data.endDate} />
              <Link href="/discount">
                <div className="py-1 px-2 bg-orange-500 rounded-xl cursor-pointer hover:bg-orange-600 active:bg-orange-700">
                  <Typography variant="span" color="white">
                    Discount Products
                  </Typography>
                </div>
              </Link>
            </>
          )}
      </div>
    </Container>
  );
}
