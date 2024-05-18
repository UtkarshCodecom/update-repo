import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ hours, minutes, seconds }) => {
  // Convert the provided hours, minutes, seconds into a total time in seconds
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000); // Update every second

    // Cleanup interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Function to format time into "HH:MM:SS"
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return <div>{formatTime(time)}</div>;
};

export default CountdownTimer;
