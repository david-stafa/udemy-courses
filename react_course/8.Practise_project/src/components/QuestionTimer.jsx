import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("settingTIMEOUT");
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log("settingINTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
}
