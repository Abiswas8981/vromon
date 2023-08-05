import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((Timer) => Timer + 1);
    }, 1000);
  }, []);

  const handleReset = () => {
    setTimer(0);
  };

  return (
    <center><div>
      <div>Timer: {timer}</div>
      <button onClick={handleReset}>Reset</button>
    </div></center>
  );
}

export default Timer;
