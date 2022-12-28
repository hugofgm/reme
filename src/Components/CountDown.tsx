import { useEffect, useState } from "react";

const numberToDate = (ms: number) => {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

interface PropsCountdown {
  date: Date;
}

export const CountDown = (date: PropsCountdown) => {
  const dateOfEvent = date.date.getTime();

  const [timeDiff, setTimeDiff] = useState<number>(
    dateOfEvent - new Date().getTime()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      //setInterval --> calls function every 1000ms
      setTimeDiff(dateOfEvent - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval); //clearInterval --> stop calling function
  }, [dateOfEvent]);

  const [days, hours, minutes, seconds] = numberToDate(timeDiff);

  return (
    <p>
      {days}D {hours}H {minutes}M {seconds}S
    </p>
  );
};
