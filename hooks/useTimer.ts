import { useState, useEffect } from 'react';

export const useTimer = () => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [timesUp, setTimesUp] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          setTimesUp(true);
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return { minutes, seconds, timesUp };
}
