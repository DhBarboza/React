import { useState } from "react";
import "./app.css";

export default function App() {
  const [weight, setWeight] = useState("");
  const [heigth, setHeigth] = useState("");

  function calculator() {
    const h = heigth / 100;
    const bmi = weight / (h * h);

    if (bmi < 18.6) {
      alert("You are underweight. BMI: " + bmi.toFixed(2));
    } else if (bmi >= 18.6 && bmi < 24.9) {
      alert("Ideal weight. BMI: " + bmi.toFixed(2));
    } else if(bmi >= 24.9 && bmi < 34.9) {
      alert("Are you overweight. BMI: " + bmi.toFixed(2));
    } else if (bmi > 34.9) {
      alert("Be careful, you are obese. BMI: " + bmi.toFixed(2));
    }
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
