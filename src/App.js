import "./styles.css";

import React, { useEffect, useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const [counterState, setCounterState] = useState(false);

  useEffect(() => {
    if (counterState) {
      setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  const handleClick1 = () => {
    if (!counterState) {
      setCounterState(true);
      setCounter(counter + 1);
    } else {
      setCounterState(false);
    }
  };
  const handleReset = () => {
    setCounterState(false);
    setCounter(0);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%"
      }}
    >
            Counter App       
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh"
        }}
      >
                {counter}
              
      </div>
            
      <div className="buttons">
                
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white"
          }}
          onClick={handleClick1}
        >
          {counterState ? "Pause" : "Play"}
        </button>
                
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white"
          }}
          onClick={handleReset}
        >
          Reset
        </button>
              
      </div>
          
    </div>
  );
};
export default App;
