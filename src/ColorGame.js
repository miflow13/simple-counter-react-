// ColorGame.js
import React, { useState, useEffect } from 'react';

const ColorGame = () => {
  const colorHints = {
    red: 'Apple',
    blue: 'Water',
    green: 'Grass',
    yellow: 'Banana',
  };

  const colors = Object.keys(colorHints);
  const [targetColor, setTargetColor] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleSquareClick = (clickedColor) => {
    if (clickedColor === targetColor) {
      setMessage(`Correct! The hint for ${targetColor} is ${colorHints[targetColor]}. Next round.`);
      setScore(score + 1);
      setTargetColor(getRandomColor());
    } else {
      setMessage(`Wrong! Game Over. Your score: ${score}`);
      setScore(0);
      setTargetColor(getRandomColor());
    }
  };

  useEffect(() => {
    setTargetColor(getRandomColor());
  }, []);

  return (
    <div>
      <h1>Click the Correct Color</h1>
      <p><strong> {colorHints[targetColor]}</strong></p>
      <p>Score: {score}</p>
      <p>{message && <strong>{message}</strong>}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              margin: '10px',
              cursor: 'pointer',
            }}
            onClick={() => handleSquareClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorGame;
