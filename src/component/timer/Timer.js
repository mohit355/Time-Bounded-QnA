import React, { useState, useEffect } from "react";

const Timer = ({ setIsTimeCompleted, Ref, calculateScore }) => {
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(Ref.current);
      console.log("working");
      setIsTimeCompleted(true);
    }
  };

  const clearTimer = (e) => {
    setTimer("00:02:00");

    if (Ref.current) {
      clearInterval(Ref.current);
    }
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 120);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="App">
      <h2>{timer}</h2>
    </div>
  );
};

export default Timer;
