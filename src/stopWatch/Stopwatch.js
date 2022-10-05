import React, { useState } from "react";
import BTNFUNC from "../component/btnfuc";
import Display from "../component/display";
import "./Stopwatch.css";

const StopWatch = () => {
  const [inputval, setInputval] = useState("");
  const [phoneval, setPhoneval] = useState("");
  const [showCard, setShowCard] = useState([]);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  var UpdatedMs = time.ms,
    UpdatedS = time.s,
    UpdatedM = time.m,
    UpdatedH = time.h;
  const run = () => {
    if (UpdatedM === 60) {
      UpdatedH++;
      UpdatedM = 0;
    }
    if (UpdatedS === 60) {
      UpdatedM++;
      UpdatedS = 0;
    }
    if (UpdatedMs === 100) {
      UpdatedS++;
      UpdatedMs = 0;
    }
    UpdatedMs++;
    return setTime({ ms: UpdatedMs, s: UpdatedS, m: UpdatedM, h: UpdatedH });
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  let list = [...showCard];
  return (
    <>
      <div className="stopWatch">
        <div className="card">{list}</div>
        <input
          type="text"
          placeholder="your name"
          value={inputval}
          onChange={(event) => {
            setInputval(event.target.value);
          }}
        />
        <input
          type="Number"
          placeholder="your phone"
          value={phoneval}
          onChange={(event) => {
            setPhoneval(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setShowCard(inputval + phoneval);
          }}
        >
          Add Card
        </button>
      </div>
      <div className="wrapper">
        <div className="stopwatch">
          <Display time={time} />
          <BTNFUNC status={status} reset={reset} stop={stop} start={start} />
        </div>
      </div>
    </>
  );
};
export default StopWatch;
