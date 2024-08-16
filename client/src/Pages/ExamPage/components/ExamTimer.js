import { useState, useEffect } from "react";

const ExamTimer = ({ initialTime, onEnd }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    // Check if the exam start time is already stored
    let startTime = localStorage.getItem("examStartTime");

    if (!startTime) {
      // If not stored, store the current time as the start time
      startTime = Date.now();
      localStorage.setItem("examStartTime", startTime);
    } else {
      // Calculate the remaining time based on the stored start time
      const elapsedTime = Math.floor((Date.now() - parseInt(startTime)) / 1000);
      const calculatedTime = initialTime - elapsedTime;

      if (calculatedTime <= 0) {
        setRemainingTime(0);
        if (onEnd) onEnd(); // Trigger the onEnd callback if time has already run out
      } else {
        setRemainingTime(calculatedTime);
      }
    }

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          if (onEnd) onEnd(); // Trigger the onEnd callback when time reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTime, onEnd]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return <div>{formatTime(remainingTime)}</div>;
};

export default ExamTimer;
