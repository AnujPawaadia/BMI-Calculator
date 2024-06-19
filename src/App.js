import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(90);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  }, [height, weight]);

  function result() {
    if (output < 18.50) {
      return "Kuch Kha le Bhai";
    } else if (output >= 18.50 && output < 24.90) {
      return "Fit Hai Bhai";
    } else if (output >= 25.00 && output < 29.90) {
      return "Thoda Km Kha le Bhai";
    } else if (output >= 30.00 && output < 34.90) {
      return "Gian hai aap";
    } else if (output >= 35.00) {
      return "Tun tun mosi kaisi ho??";
    }
  }

  return (
    <main className={result(output)}>
      <h1>BMI Calculator</h1>

      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />

        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          min="100"
          max="300"
          onChange={onHeightChange}
        ></input>
      </div>

      <div className="output-section">
        <p> Your BMI is </p>
        <p className="output">{output}</p>
        <div className="result">
          <h1>{result()}</h1>
        </div>
      </div>
    </main>
  );
};

export default App;
