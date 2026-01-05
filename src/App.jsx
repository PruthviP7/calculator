import { useState } from "react";
import "./App.css";

const keys = [
  "AC", "%", "←", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "00", "0", ".", "=",
];

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (key) => {
    if (key === "AC") {
      setInput("");
      return;
    }

    if (key === "←") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    if (key === "=") {
      try {
        const expression = input
          .replace(/×/g, "*")
          .replace(/÷/g, "/");

        // eslint-disable-next-line no-eval
        const result = eval(expression);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
      return;
    }

    setInput((prev) => prev + key);
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <input className="screen" value={input} disabled />

        <div className="keys">
          {keys.map((key, idx) => (
            <button
              key={idx}
              className={`btn ${key === "=" ? "equal" : ""}`}
              onClick={() => handleClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
