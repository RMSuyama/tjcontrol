import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const targetDate = new Date('2023-07-02');
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  const [countdown, setCountdown] = useState(daysRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000 * 60 * 60 * 24);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (

    <div className="card text-center">

    <div className="card-footer text-body-secondary">
      {countdown > 0 ? (
        <h5 className="card-title">{countdown} dias restantes até o dia 2 de julho</h5>
      ) : (
        <p className="card-text">O dia 2 de julho já chegou!</p>
      )}
    </div>
  </div>
  );
};

export default Countdown;
