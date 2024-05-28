import React, { useState } from "react";
import Buttons from "./Buttons";
import data from "../data";

function Keypad({
  values,
  setValues,
  setInputs,
  setAnswer,
  answer,
  setCount,
  count,
}) {
  const oper = ["+", "-", "*", "/"];

  const clickHandler = (i) => {
    // handeling 0
    if (values[0] === "0") {
      if (i.id === "zero") {
        return;
      }
      values.shift();
      // return;
    }

    // claer
    if (i.id === "clear") {
      setInputs("0");
      setValues(["0"]);
      setAnswer("");
      setCount(0);
      return;
    }

    // equals
    if (i.id === "equals") {
      const inputs = values.join("");
      try {
        const calculation = eval(inputs);
        setValues([calculation]);
        setInputs([calculation]);
        setCount(0);
        return;
      } catch {
        setInputs("err");
        return;
      }
    }

    // delet
    if (i.id === "delete") {
      if (values.length <= 1) {
        setValues(["0"]);
        return;
      } else {
        const s = values.filter((i, index) => index != values.length - 1);
        setValues(s);
        return;
      }
    }

    if (i.id === "decimal") {
      const s = values[values.length - 1].toString();
      // console.log(s);
      if (s.indexOf(".") !== -1) {
        return;
      }
    }

    setInputs(i.text);
    if (i.catagory === "digit") {
      const inputs = values + i.text;
      setValues(inputs.split(","));
      return;
    } else if (i.catagory === "operator") {
      if (answer != "") {
        setValues([...answer, i.text]);
        setAnswer("");
        return;
      }
      if (
        oper.includes(values[values.length - 1]) &&
        i.catagory === "operator"
      ) {
        setCount(count + 1);
        if (i.id === "subtract") {
          setValues([...values, i.text]);
          return;
        }
        if (oper.includes(values[values.length - count])) {
          values.pop();
        }
        values.pop();
        setValues([...values, i.text]);
        return;
      }
      setValues([...values, i.text]);
      return;
    }
  };
  return (
    <div className="keyPad">
      {data.map((i, index) => {
        return <Buttons key={index} i={i} clickHandler={clickHandler} />;
      })}
    </div>
  );
}

export default Keypad;
