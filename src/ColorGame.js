// ColorGame.js
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import Game2 from "./Game2";

const ColorGame = () => {
  const colorHints = {
    red: "Apple",
    blue: "Water",
    green: "Grass",
    yellow: "Banana",
  };

  const colors = Object.keys(colorHints);
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for programmatic navigation

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const isThree = (score) => {
    console.log("isThree function called");
    if (score === 2) {
      console.log("isThree is counting score");
      setMessage("You win!");
    }
  };

  const handleSquareClick = (clickedColor) => {
    if (clickedColor === targetColor) {
      setMessage(`Correct!`);
      console.log(score);
      setScore(score + 1);
      isThree(score);
      setTargetColor(getRandomColor());
    } else {
      setMessage(`Wrong! Game Over.`);
      setScore(0);
      setTargetColor(getRandomColor());
    }
  };

  useEffect(() => {
    setTargetColor(getRandomColor());
  }, []);

  const onReset = () => {
    setScore(0);
    setTargetColor(getRandomColor());
    setMessage("");
  };

  const goToNextGame = () => {
    navigate("/Game2"); // Use the navigate hook to navigate to the '/Game2' route
  };

  return (
    <div>
      <h1>Click the Correct Color</h1>
      <p>Use the hint below to select the corresponding color</p>
      <p>
        <h4>
          Hint: <strong>{colorHints[targetColor]}</strong>
        </h4>
      </p>
      <p>Score: {score}/3</p>
      <p>{message && <strong>{message}</strong>}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color,
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleSquareClick(color)}
          ></div>
        ))}
      </div>
      <Button onClick={onReset} label="Start Over" />
      <button onClick={goToNextGame}>Next Game</button>
    </div>
  );
};

export default ColorGame;
