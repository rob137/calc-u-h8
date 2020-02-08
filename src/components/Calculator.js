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
      <div className="Calc_top">
        <div className="Calc_top_solar"></div>
        <header className="Calc_top_header">
          <h1>Calc-u-h8</h1>
        </header>
      </div>
      <span className="Calc_screen">{screen}</span>
      <div className="Calc_pad">
        <div className="Calc_pad_numbers">
          <a className="btn" onClick={handleNumClick}>
            7
          </a>
          <a className="btn" onClick={handleNumClick}>
            8
          </a>
          <a className="btn" onClick={handleNumClick}>
            9
          </a>
          <a className="btn" onClick={handleNumClick}>
            4
          </a>
          <a className="btn" onClick={handleNumClick}>
            5
          </a>
          <a className="btn" onClick={handleNumClick}>
            6
          </a>
          <a className="btn" onClick={handleNumClick}>
            1
          </a>
          <a className="btn" onClick={handleNumClick}>
            2
          </a>
          <a className="btn" onClick={handleNumClick}>
            3
          </a>
        </div>
        <div className="Calc_pad_zero">
          <div className="empty"></div>
          <a className="btn btn-zero">0</a>
          <div className="empty"></div>
        </div>
        <div className="Calc_pad_ops">
          <a className="btn" onClick={handleAcClick}>
            AC
          </a>
          <a className="btn" onClick={handleOpClick}>
            +
          </a>
          <a className="btn" onClick={handleOpClick}>
            -
          </a>
          <a className="btn btn-equals" onClick={applyEquals}>
            =
          </a>
        </div>
      </div>
    </div>
  );
}
