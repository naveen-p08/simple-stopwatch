import { useState, useEffect } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const timer = useRef();
  useEffect(() => {
    if (seconds > 59) {
      setMinutes((prev) => prev + 1);
      setSeconds(() => 0);
    }

    if (minutes > 59) {
      setMinutes(0);
      setSeconds(0);
    }
  }, [seconds, minutes]);

  function updateTime() {
    console.log(timer.current);
    console.log(seconds, minutes);

    if (!timer.current) {
      timer.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else return;
  }

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = 0;
    }
    updateTime();
  }

  function resetTimer() {
    console.log(timer.current);
    clearInterval(timer.current);
    timer.current = 0;
    setSeconds(0);
    setMinutes(0);
  }

  return (
    <>
      <div>
        <h2>Time</h2>
        <h2>
          {minutes < 10 ? `0${minutes}` : `${minutes}`} :
          {seconds < 10 ? `0${seconds}` : `${seconds}`}
        </h2>

        <button onClick={() => clearInterval(timer.current)}>stop</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={startTimer}>Start</button>
      </div>
    </>
  );
}

export default App;
