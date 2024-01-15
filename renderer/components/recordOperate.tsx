import {
  CloseCircleTwoTone,
  PauseCircleTwoTone,
  PlayCircleTwoTone,
} from "@ant-design/icons";
import { Button, notification } from "antd";
import React from "react";

notification.config({
  placement: "bottomLeft",
  duration: 2,
  bottom: 0,
});

const notiTimerKey = "timer";
const defaultNotiStyle: React.CSSProperties = {
  padding: 4,
};

const RecordOperation = () => {
  const startHandle = async () => {
    notification.success({
      // key: notiTimerKey,
      message: "Timer is start !",
      description: <p>Don't forget to STOP when job is done !</p>,
      style: defaultNotiStyle,
      icon: <PlayCircleTwoTone twoToneColor={"blue"} />,
    });

    const res = await fetch("http://10.122.77.10/api/dummy");
    console.log(res);
  };

  const pauseHandle = () => {
    notification.info({
      // key: notiTimerKey,
      message: "Timer is pause !",
      description: <p>Don't forget to START when you continue your job !</p>,
      style: defaultNotiStyle,
      icon: <PauseCircleTwoTone twoToneColor={"orange"} />,
    });
  };

  const stopHandle = () => {
    notification.success({
      // key: notiTimerKey,
      message: "Timer is stop !",
      description: <p>Good work ! Your job was recorded !</p>,
      style: defaultNotiStyle,
      icon: <CloseCircleTwoTone twoToneColor={"red"} />,
    });
  };

  return (
    <div className="operation">
      <Button type="primary" onClick={startHandle}>
        Start
      </Button>
      <Button type="default" onClick={pauseHandle}>
        Pause
      </Button>
      <Button type="primary" danger onClick={stopHandle}>
        Stop
      </Button>
    </div>
  );
};

export default RecordOperation;
