"use client";

import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div>
      {hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:
      {seconds > 9 ? seconds : `0${seconds}`}
    </div>
  );
};

export default Timer;
