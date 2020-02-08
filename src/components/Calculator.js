import React, { useState, useEffect } from "react";
import * as classnames from "classnames";
import "./Calculator.css";

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [value, setValue] = useState("");
  const [acc, setAcc] = useState("");
  const [operator, setOperator] = useState("");
  const [faded, setFaded] = useState(false);
  const [lastKey, setLastKey] = useState("");

  function handleKeyPress(e) {
    const numKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const eqKeys = ["=", "Enter", " "];
    const opKeys = ["+", "-"];
    const acKeys = ["Delete", "Backspace"];
    const acceptedKeys = [...numKeys, ...eqKeys, ...opKeys, ...acKeys];
    if (acceptedKeys.includes(e.key)) setLastKey(e.key);
    if (numKeys.includes(e.key)) {
      handleNumInput(e.key);
    } else if (opKeys.includes(e.key)) {
      handleOpInput();
    } else if (eqKeys.includes(e.key)) {
      applyEquals();
    } else if (acKeys.includes(e.key)) {
      clearAll();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [lastKey]);

  function handleNumInput(input) {
    // When user makes first keystroke at start of new sum
    const isBrandNew = operator === "" && screen === "0" && acc === "";
    if (isBrandNew) {
      setAcc(input);
      setScreen(input);
      // New entry, but not first digit entered
    } else if (operator === "" && screen !== "") {
      setAcc(acc + input);
      setScreen(acc + input);
      // Not a new entry, but first digit entered
    } else if (operator !== "" && value === "") {
      setValue(input);
      setScreen(input);
      // Not a new entry, not first digit entered
    } else if (operator !== "" && value !== "") {
      setValue(value + input);
      setScreen(value + input);
    }
  }

  function clearAll() {
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

  function handleOpInput(input) {
    setOperator(input);
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
            <button
              className="btn"
              title={val}
              key={key}
              onClick={e => handleNumInput(e.target.innerText)}
            >
              {val}
            </button>
          ))}
        </div>
        <div className="Calc_pad_zero">
          <div className="empty"></div>
          <button className="btn btn-zero">0</button>
          <div className="empty"></div>
        </div>
        <div className="Calc_pad_ops">
          <button className="btn btn-ops btn-ac" onClick={clearAll}>
            AC
          </button>
          <button
            className="btn btn-ops"
            onClick={e => handleOpInput(e.target.innerText)}
          >
            +
          </button>
          <button
            className="btn btn-ops"
            onClick={e => handleOpInput(e.target.innerText)}
          >
            -
          </button>
          <button className="btn btn-equals" onClick={applyEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
