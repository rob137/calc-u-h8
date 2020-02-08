import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [value, setValue] = useState("");
  const changeValue = evt => setValue(evt.target.value);
  return (
    <div className="Calc">
      <input value={value} onChange={changeValue} />
      <div className="Calc-Row">
        <div className="Calc-Column">
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
            <a>AC</a>
          </div>
          <div className="Calc-Row">
            <a>+</a>
          </div>
          <div className="Calc-Row">
            <a>-</a>
          </div>
          <div className="Calc-Row">
            <a>=</a>
          </div>
        </div>
      </div>
    </div>
  );
}
