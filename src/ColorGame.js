// ColorGame.js
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import Game2 from "./Game2";
import "./styles.css";

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

  const showNextGameButton = () => {
    <button className="next-game-btn" onClick={goToNextGame}>
      Next Game
    </button>;
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
    <div className="color-game-container">
      <h1>Click the Correct Color</h1>
      <p>Use the hint below to select the corresponding color</p>
      <p className="hint">
        Hint: <strong>{colorHints[targetColor]}</strong>
      </p>
      <p className="score">Score: {score}/3</p>
      <p className="message">{message && <strong>{message}</strong>}</p>
      <div className="color-squares">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-square"
            style={{ backgroundColor: color }}
            onClick={() => handleSquareClick(color)}
          ></div>
        ))}
      </div>
      <Button onClick={onReset} label="Start Over" />
    </div>
  );
};

export default ColorGame;
