import { useState } from "react";
import "./app.css";

export default function App() {
  const [weight, setWeight] = useState("");
  const [heigth, setHeigth] = useState("");

  function calculator() {
    const h = heigth / 100;
  }

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <span>Let's calculate your BMI</span>

      <div className="input">
        <input
          type="text"
          placeholder="Weight in (kg) Ex: 80kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Height in (cm) Ex: 180cm"
          value={heigth}
          onChange={(e) => setHeigth(e.target.value)}
        />
        <button onClick={calculator}>Calcular</button>
      </div>

      <h2>Your BMI</h2>
    </div>
  );
}
