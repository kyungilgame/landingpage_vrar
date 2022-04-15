import React from "react";
import styled from "styled-components";
import "../styles/css/App.css";

const Timer = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <text style={{ color: "white", marginLeft: "0.5vw" }}>{`${hrs
      .toString()
      .padStart(2, "0")}시간 ${mins.toString().padStart(2, "0")}분 ${secs
      .toString()
      .padStart(2, "0")}초`}</text>
  );
};

export default Timer;
