import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [timer, setTimer] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      setIsRunning(false);
      alert('Pomodoro completed!');
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="pomodoro">
      <h1 className="text-center">Pomodoro Timer</h1>
      <div className="card text-center">
        <div className="card-body">
          <h2>{formatTime(timer)}</h2>
          <div className="buttons">
            {!isRunning && <button className="btn btn-primary" onClick={startTimer}>Start</button>}
            {isRunning && <button className="btn btn-danger" onClick={stopTimer}>Stop</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
