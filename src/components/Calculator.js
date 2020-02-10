import React, { useState, useEffect } from "react";
import * as classnames from "classnames";
import "./Calculator.css";

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [value, setValue] = useState("");
  const [acc, setAcc] = useState("");
  const [operator, setOperator] = useState("");
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    function handleKeyPress(e) {
      const eqKeys = ["=", "Enter", " "];
      const opKeys = ["+", "-"];
      const acKeys = ["Delete", "Backspace"];
      if (!isNaN(Number(e.key))) {
        handleNumInput(e.key);
      } else if (opKeys.includes(e.key)) {
        handleOpInput(e.key);
      } else if (eqKeys.includes(e.key)) {
        applyEquals();
      } else if (acKeys.includes(e.key)) {
        clearAll();
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  function handleNumInput(input) {
    // First digit at start of new sum
    if (value === "" && operator === "" && acc === "" && screen === "0") {
      setAcc(input);
      setScreen(input);
      // Start of new sum, but not first digit entered
    } else if (operator === "" && value === "") {
      setAcc(acc + input);
      setScreen(acc + input);
      // Number after operator, but first digit entered
    } else if (operator !== "" && value === "") {
      setValue(input);
      setScreen(input);
      // Number after operator, not first digit entered
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
    if (acc === "" && value === "") {
      return undefined;
    }

    let newAcc = acc;
    if (operator === "+") {
      newAcc = String(Number(acc) + Number(value));
    } else if (operator === "-") {
      newAcc = String(Number(acc) - Number(value));
    }
    setScreen(newAcc);
    setValue("");
    setOperator("");
    setAcc("");
  }

  function handleOpInput(input) {
    if (acc === "") {
      setAcc(screen);
    }
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
