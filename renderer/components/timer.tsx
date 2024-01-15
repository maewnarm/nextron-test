import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

interface ITimer {
  interval: number; // millisecond
  isRunning: boolean;
  reset: boolean;
  showTimer?: boolean;
  setCounterValue?: (counter: number) => void;
}

dayjs.extend(duration);

const Timer: React.FC<ITimer> = (props) => {
  const {
    interval,
    isRunning,
    reset,
    showTimer = true,
    setCounterValue,
  } = props;
  const [counter, setCounter] = useState(0); //second

  useInterval(
    () => {
      setCounter(Number((counter + interval / 1000).toFixed(1)));
    },
    isRunning ? interval : null
  );

  useEffect(() => {
    setCounter(0);
  }, [reset]);

  useEffect(() => {
    setCounterValue?.(counter);
  }, [counter]);

  return (
    <div>
      {showTimer && <p>{dayjs.duration(counter, "seconds").format("mm:ss")}</p>}
    </div>
  );
};

export default Timer;
