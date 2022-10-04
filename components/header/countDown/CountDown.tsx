import { useState, useEffect } from "react";
import Typography from "../../UI/typography/Typography";
import { CountDownProps } from "./types";
export default function CountDown({ endDate }: CountDownProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        const countDown =
          new Date("2022-10-06T19:45:00.000Z").getTime() - new Date().getTime();
        // calculate time left
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        setDays(days);
        const hours = Math.floor(
          (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(hours);
        const minutes = Math.floor(
          (countDown % (1000 * 60 * 60)) / (1000 * 60)
        );
        setMinutes(minutes);
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
        setSeconds(seconds);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);
  if (!endDate) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <Typography
          variant="h1"
          tag="p"
          color="white"
          weight="bold"
          sx="flex gap-5"
        >
          <div className="flex flex-col justify-center items-center">
            {`${days < 10 ? `0${days}` : days}`}
            <Typography tag="span" variant="h3" color="white">
              Days
            </Typography>
          </div>
          :
          <div className="flex flex-col justify-center items-center">
            {`${hours < 10 ? `0${hours}` : hours}`}
            <Typography tag="span" variant="h3" color="white">
              Hours
            </Typography>
          </div>
          :
          <div className="flex flex-col justify-center items-center">
            {`${minutes < 10 ? `0${minutes}` : minutes}`}
            <Typography tag="span" variant="h3" color="white">
              Minutes
            </Typography>
          </div>
          :
          <div className="flex flex-col justify-center items-center">
            {`${seconds < 10 ? `0${seconds}` : seconds}`}
            <Typography tag="span" variant="h3" color="white">
              Seconds
            </Typography>
          </div>
        </Typography>
      </>
    );
  }
}
