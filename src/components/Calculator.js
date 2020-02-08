import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [value, setValue] = useState(0);
  const [acc, setAcc] = useState(0);
  const [operator, setOperator] = useState("");
  const changeValue = evt => setValue(evt.target.value);

  function handleNumClick(e) {
    if (e.target.tagName === "A") {
      const num = e.target.innerText;
      setValue(Number(num));
    }
  }

  function handleAcClick() {
    setValue(0);
    setAcc(0);
  }

  function handleEqClick() {
    if (operator === "+") {
      setAcc(acc + value);
    } else if (operator === "-") {
      setAcc(acc - value);
    }
    setOperator("");
  }

  console.log(acc, operator);
  return (
    <div className="Calc">
      <input value={value} onChange={changeValue} />
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
            <a onClick={() => setOperator("+")}>+</a>
          </div>
          <div className="Calc-Row">
            <a onClick={() => setOperator("-")}>-</a>
          </div>
          <div className="Calc-Row">
            <a onClick={handleEqClick}>=</a>
          </div>
        </div>
      </div>
    </div>
  );
}
