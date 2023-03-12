import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(0);
  const [words, setwords] = useState(0);

  const countWords = (str) => {
    return str.replace(/-/g, " ").trim().split(/\s+/g).length;
  };

  const handleKeyDown = (event) => {
    setwords(countWords(message));
    if (event.key === "Backspace") {
      setErrors(errors + 1);
    }
  };
  const handleReset = () => {
    setMessage("");
    setErrors(0);
    setwords(0);
  };

  return (
    <div style={{ margin: "auto", width: "70%", textAlign: "center" }}>
      <h1>Errors: {errors}</h1>
      <h1>Words:{words}</h1>
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        rows={20}
        cols={60}
        style={{ resize: "none" }}
      />
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
