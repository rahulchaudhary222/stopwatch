import React from "react";

const BTNFUNC = ({ start, status, stop, reset }) => {
  return (
    <>
      {status === 0 ? (
        <div className="btnfunc">
          <button onClick={start}>Start</button>
        </div>
      ) : (
        ""
      )}
      {status === 1 ? (
        <>
          <div className="btnfunc">
            <button onClick={stop}>Stop</button>
          </div>
          <div className="btnfunc">
            <button onClick={reset}>Reset</button>
          </div>
        </>
      ) : (
        ""
      )}
      {status === 2 ? (
        <>
          <div className="btnfunc">
            <button onClick={start}>Resume</button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default BTNFUNC;
