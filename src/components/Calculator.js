import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [value, setValue] = useState("");
  const [acc, setAcc] = useState("");
  const [operator, setOperator] = useState("");

  function handleNumClick(e) {
    const isNum = e.target.tagName === "A";
    const input = e.target.innerText;
    const isNewEntry = isNum && operator === "" && screen === "0";
    if (isNewEntry) {
      setAcc(input);
      setScreen(input);
    } else if (isNum && operator === "" && screen !== "") {
      setAcc(acc + input);
      setScreen(acc + input);
    } else if (isNum && operator !== "" && value === "") {
      setValue(input);
      setScreen(input);
    } else if (isNum && operator !== "" && value !== "") {
      setValue(value + input);
      setScreen(value + input);
    }
  }

  function handleAcClick() {
    setValue("");
    setScreen("0");
    setAcc("");
    setOperator("");
  }

  function applyEquals() {
    let newAcc = acc;
    if (operator === "+") {
      newAcc = String(Number(acc) + Number(value));
    } else if (operator === "-") {
      newAcc = String(Number(acc) - Number(value));
    }
    setScreen(newAcc);
    setOperator("");
    setAcc(newAcc);
  }

  function handleOpClick(e) {
    setOperator(e.target.innerText);
    setValue("");
  }

  return (
    <div className="Calc">
      <span>{screen}</span>
      <div className="Calc-Row">
        <div onClick={handleNumClick} className="Calc-Column">
          <div className="Calc-Row">
            <a>1</a>
            <a>2</a>
            <a>3</a>
          </div>
          <div className="Calc-Row">
            <a>4</a>
            <a>5</a>
            <a>6</a>
          </div>
          <div className="Calc-Row">
            <a>7</a>
            <a>8</a>
            <a>9</a>
          </div>
          <div className="Calc-Row">
            <a>0</a>
          </div>
        </div>
        <div className="Calc-Column">
          <div className="Calc-Row">
            <a onClick={handleAcClick}>AC</a>
          </div>
          <div className="Calc-Row">
            <a onClick={handleOpClick}>+</a>
          </div>
          <div className="Calc-Row">
            <a onClick={handleOpClick}>-</a>
          </div>
          <div className="Calc-Row">
            <a onClick={applyEquals}>=</a>
          </div>
        </div>
      </div>
    </div>
  );
}
