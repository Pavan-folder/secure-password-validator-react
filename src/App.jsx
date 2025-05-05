import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [color, setColor] = useState("");
  const [width, setWidth] = useState("0%");

  const checkStrength = (val) => {
    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasSpecial = /[^A-Za-z0-9]/.test(val);

    if (val.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial) {
      setStrength("Strong");
      setColor("green");
      setWidth("100%");
    } else if (val.length >= 6 && hasUpper && hasLower && hasNumber) {
      setStrength("Medium");
      setColor("orange");
      setWidth("60%");
    } else {
      setStrength("Weak");
      setColor("red");
      setWidth("30%");
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    checkStrength(val);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f3f4f6",
      }}
    >
      <h2>Password Strength Checker</h2>
      <label
        htmlFor="password"
        style={{ marginBottom: "8px", fontWeight: "bold" }}
      >
        Enter Password:
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        style={{
          padding: "12px 16px",
          width: "280px",
          borderRadius: "10px",
          fontSize: "16px",
          border: `2px solid ${color || "#ccc"}`,
          outline: "none",
          transition: "0.3s",
        }}
      />

      {/* Strength Meter Bar */}
      <div
        style={{
          height: "8px",
          width: "280px",
          background: "#e0e0e0",
          borderRadius: "10px",
          marginTop: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: width,
            background: color,
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>

      {/* Strength Label */}
      {strength && (
        <p
          style={{
            marginTop: "12px",
            fontWeight: "bold",
            color: color,
            fontSize: "18px",
          }}
        >
          Password Strength: {strength}
        </p>
      )}
    </div>
  );
};

export default App;
