import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialSeconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({ initialSeconds = 10 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [inputValue, setInputValue] = useState(initialSeconds.toString());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (seconds === 0) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, isRunning]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.replace(/[^0-9]/g, ""));
  };

  const handleSetCountdown = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value) && value > 0) {
      setSeconds(value);
      setIsRunning(false);
    }
  };

  const handleStart = () => {
    if (seconds > 0) setIsRunning(true);
  };

  const handleReset = () => {
    setSeconds(initialSeconds);
    setInputValue(initialSeconds.toString());
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Countdown: {seconds} Sekunden</h2>
      <input
        type="number"
        min="1"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isRunning}
        style={{ width: "80px", fontSize: "1rem" }}
      />
      <button onClick={handleSetCountdown} disabled={isRunning} style={{ marginLeft: "8px" }}>
        Setzen
      </button>
      <button onClick={handleStart} disabled={isRunning || seconds === 0} style={{ marginLeft: "8px" }}>
        Start
      </button>
      <button onClick={handleReset} style={{ marginLeft: "8px" }}>
        Reset
      </button>
      {seconds === 0 && <div style={{ marginTop: "16px", color: "#61dafb" }}>Zeit abgelaufen!</div>}
    </div>
  );
};

export default Countdown;
