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
        const end = new Date(endDate).getTime();
        const start = new Date().getTime();
        if (end > start) {
          const countDown = new Date(endDate).getTime() - new Date().getTime();
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
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);
  if (!endDate) {
    return null;
  }
  return (
    <>
      <div className="flex gap-5 text-black">
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h3" weight="bold">{`${
            days < 10 ? `0${days}` : days
          }`}</Typography>
          <Typography tag="span" variant="span">
            Days
          </Typography>
        </div>
        :
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h3" weight="bold">{`${
            hours < 10 ? `0${hours}` : hours
          }`}</Typography>
          <Typography tag="span" variant="span">
            Hours
          </Typography>
        </div>
        :
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h3" weight="bold">{`${
            minutes < 10 ? `0${minutes}` : minutes
          }`}</Typography>
          <Typography tag="span" variant="span">
            Minutes
          </Typography>
        </div>
        :
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h3" weight="bold">{`${
            seconds < 10 ? `0${seconds}` : seconds
          }`}</Typography>
          <Typography tag="span" variant="span">
            Seconds
          </Typography>
        </div>
      </div>
    </>
  );
}
