import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

const Clock = () => {
  const [time, setTime] = useState<Dayjs>(undefined);
  const [counter, setCounter] = useState(0); //second

  useInterval(() => {
    setCounter((counter % 2) + 1);
  }, 1000);

  useEffect(() => {
    setTime(dayjs());
  }, [counter]);

  if (!time) {
    return <></>;
  }

  return (
    <>
      <p>{dayjs(time).format("DD/MMM/YYYY")}</p>
      <p>{dayjs(time).format("HH:mm:ss")}</p>
    </>
  );
};

export default Clock;
