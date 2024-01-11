"use client";

import { useEffect, useState } from "react";
import Marker from "./marker";

import { clockStyles as styles } from "@/shared-styles";

const Clock = () => {
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
    <svg viewBox="-50 -50 100 100" className={styles.svg}>
      <circle className={styles.clockFace} r="48" />

      {Array.from<unknown, [boolean, number]>({ length: 60 }, (_, i) => [
        i % 5 === 0,
        i,
      ]).map(([isMajor, radial]) => (
        <Marker
          isMajor={isMajor}
          radial={radial}
          key={`markers-${isMajor}-${radial}`}
        />
      ))}

      <line
        id="hour"
        className={styles.hour}
        y1="2"
        y2="-20"
        transform={`rotate(${30 * hours + minutes / 2})`}
      />

      <line
        id="minute"
        className={styles.minute}
        y1="4"
        y2="-30"
        transform={`rotate(${6 * minutes + seconds / 10})`}
      />

      <g id="second" transform={`rotate(${6 * seconds})`}>
        <line className="text-red-700" y1="10" y2="-38" stroke="currentColor" />
        <line
          className="text-red-700"
          y1="10"
          y2="2"
          stroke="currentColor"
          stroke-width="3"
        />
      </g>
    </svg>
  );
};

export default Clock;
