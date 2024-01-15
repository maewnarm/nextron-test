import React from "react";
import Clock from "./clock";
import Timer from "./timer";

const JobTimer = () => {
  return (
    <div className="timer">
      <div className="timer-clock">
        <Clock />
      </div>
      <div className="timer-detail">
        <div className="timer-detail-topic">
          Document : Starter RA2.0 Transfer
        </div>
        <div className="timer-detail-time">
          <div className="timer-detail-time-start">
            <p>14:00:00</p>
          </div>
          <div>-</div>
          <div className="timer-detail-time-stop">
            <p>15:00:00</p>
          </div>
          <div className="timer-detail-time-duration">
            <p>{`[01:00:00]`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTimer;
