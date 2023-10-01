import React, { useEffect } from "react";

function Timer({ time, setTime }) {
  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timerId); // Cleanup the timer
    }
  }, [time, setTime]);

  return <div>Time Remaining: {time} seconds</div>;
}

export default Timer;
