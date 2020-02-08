import React, { useState } from "react";
import * as classnames from "classnames";
import "./Calculator.css";

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [value, setValue] = useState("");
  const [acc, setAcc] = useState("");
  const [operator, setOperator] = useState("");
  const [faded, setFaded] = useState(false);

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
        <div
          className="Calc_top_solar"
          onMouseEnter={() => setFaded(true)}
          onMouseLeave={() => setFaded(false)}
        ></div>
        <header className="Calc_top_header">
          <h1>Calc-u-h8</h1>
        </header>
      </div>
      <span className={classnames("Calc_screen", faded && "Calc_screen-faded")}>
        {screen}
      </span>
      <div className="Calc_pad">
        <div className="Calc_pad_nums">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((val, key) => (
            <a className="btn" key={key} onClick={handleNumClick}>
              {val}
            </a>
          ))}
        </div>
        <div className="Calc_pad_zero">
          <div className="empty"></div>
          <a className="btn btn-zero">0</a>
          <div className="empty"></div>
        </div>
        <div className="Calc_pad_ops">
          <a className="btn btn-ops btn-ac" onClick={handleAcClick}>
            AC
          </a>
          <a className="btn btn-ops" onClick={handleOpClick}>
            +
          </a>
          <a className="btn btn-ops" onClick={handleOpClick}>
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
