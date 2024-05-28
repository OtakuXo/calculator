import React, { createContext, useEffect, useState } from "react";
import Keypad from "./components/Keypad";

export const valueContext = createContext();

function App(props) {
  const [values, setValues] = useState(["0"]);
  const [inputs, setInputs] = useState("0");
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(0);

  return (
    <valueContext.Provider value={{ values, setValues }}>
      <section>
        <div className="cont">
          {console.log(count)}
          {/* <div id="display"> {values} </div> */}

          {answer === "" ? (
            <div id="display">{values.join("")}</div>
          ) : (
            <div id="display">{answer}</div>
          )}
          <div id="prev">{inputs}</div>
        </div>
        <div id="buttonWrapper">
          <Keypad
            values={values}
            setValues={setValues}
            setInputs={setInputs}
            setAnswer={setAnswer}
            answer={answer}
            setCount={setCount}
            count={count}
          />
        </div>
      </section>
    </valueContext.Provider>
  );
}

export default App;
